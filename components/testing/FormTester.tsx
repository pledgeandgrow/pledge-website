"use client";

import { useState, useEffect } from "react";
import { FormInput, ClipboardCheck, AlertCircle, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormTest {
  id: string;
  formSelector: string;
  description: string;
  status: "pending" | "testing" | "passed" | "failed";
  error?: string;
}

/**
 * Form Tester component to test form submissions
 */
export function FormTester() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [forms, setForms] = useState<FormTest[]>([]);
  const [detectedForms, setDetectedForms] = useState<string[]>([]);

  // Detect forms when component becomes visible
  useEffect(() => {
    if (isVisible && forms.length === 0) {
      detectForms();
    }
  }, [isVisible, forms.length]);

  // Detect forms on the page
  const detectForms = () => {
    const formElements = document.querySelectorAll("form");
    const formSelectors: string[] = [];
    
    formElements.forEach((form, index) => {
      // Try to get form id or create a selector based on attributes
      let selector = "";
      
      if (form.id) {
        selector = `#${form.id}`;
      } else if (form.getAttribute("name")) {
        selector = `form[name="${form.getAttribute("name")}"]`;
      } else if (form.getAttribute("action")) {
        selector = `form[action="${form.getAttribute("action")}"]`;
      } else {
        // Create a selector based on form position
        selector = `form:nth-of-type(${index + 1})`;
      }
      
      formSelectors.push(selector);
    });
    
    setDetectedForms(formSelectors);
    
    // Create form tests
    const formTests: FormTest[] = formSelectors.map(selector => {
      const form = document.querySelector(selector) as HTMLFormElement;
      const formAction = form?.getAttribute("action") || "Unknown";
      const formMethod = form?.getAttribute("method") || "GET";
      const formName = form?.getAttribute("name") || form?.id || "Unnamed form";
      
      return {
        id: `form-${selector.replace(/[^a-zA-Z0-9]/g, "-")}`,
        formSelector: selector,
        description: `${formName} (${formMethod} ${formAction})`,
        status: "pending"
      };
    });
    
    setForms(formTests);
  };

  // Test a specific form
  const testForm = async (formTest: FormTest) => {
    // Update form status to testing
    updateFormStatus(formTest.id, "testing");
    
    try {
      const form = document.querySelector(formTest.formSelector) as HTMLFormElement;
      
      if (!form) {
        throw new Error("Form not found");
      }
      
      // Fill required fields with test data
      fillRequiredFields(form);
      
      // Create a mock submit event
      const mockSubmitEvent = createMockSubmitEvent(form);
      
      // Intercept form submission
      const originalSubmit = form.submit;
      let wasSubmitCalled = false;
      
      form.submit = function() {
        wasSubmitCalled = true;
        // Don't actually submit the form
        return false;
      };
      
      // Trigger form validation and submission
      const isValid = form.checkValidity();
      form.dispatchEvent(mockSubmitEvent);
      
      // Restore original submit function
      form.submit = originalSubmit;
      
      // Check if form validation passed
      if (!isValid) {
        throw new Error("Form validation failed");
      }
      
      // Check if form submission was attempted
      if (!wasSubmitCalled && !mockSubmitEvent.defaultPrevented) {
        // If submit wasn't called directly but the event wasn't prevented,
        // it likely means the form has a submit handler
        updateFormStatus(formTest.id, "passed", "Form validation passed and submit handler was called");
      } else if (wasSubmitCalled) {
        updateFormStatus(formTest.id, "passed", "Form validation passed and form.submit() was called");
      } else {
        updateFormStatus(formTest.id, "failed", "Form validation passed but submission was prevented");
      }
    } catch (error) {
      updateFormStatus(
        formTest.id, 
        "failed", 
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  };

  // Fill required fields with test data
  const fillRequiredFields = (form: HTMLFormElement) => {
    const requiredInputs = form.querySelectorAll("input[required], select[required], textarea[required]");
    
    requiredInputs.forEach(input => {
      const element = input as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      const type = element.getAttribute("type");
      
      if (element.tagName === "SELECT") {
        // For select elements, choose the first non-empty option
        const options = Array.from((element as HTMLSelectElement).options);
        const nonEmptyOption = options.find(opt => opt.value);
        if (nonEmptyOption) {
          (element as HTMLSelectElement).value = nonEmptyOption.value;
        }
      } else if (type === "checkbox" || type === "radio") {
        (element as HTMLInputElement).checked = true;
      } else if (type === "email") {
        element.value = "test@example.com";
      } else if (type === "tel") {
        element.value = "1234567890";
      } else if (type === "number") {
        element.value = "42";
      } else if (type === "date") {
        element.value = "2023-01-01";
      } else if (type === "time") {
        element.value = "12:00";
      } else if (type === "url") {
        element.value = "https://example.com";
      } else if (type === "password") {
        element.value = "TestPassword123!";
      } else {
        // Text, textarea, and other inputs
        element.value = "Test input";
      }
    });
  };

  // Create a mock submit event
  const createMockSubmitEvent = (form: HTMLFormElement) => {
    const mockEvent = new Event("submit", { bubbles: true, cancelable: true });
    
    // Add preventDefault method to track if it was called
    const originalPreventDefault = mockEvent.preventDefault.bind(mockEvent);
    mockEvent.preventDefault = function() {
      originalPreventDefault();
    };
    
    return mockEvent;
  };

  // Update the status of a form test
  const updateFormStatus = (id: string, status: FormTest["status"], error?: string) => {
    setForms(prevForms => 
      prevForms.map(form => 
        form.id === id ? { ...form, status, error } : form
      )
    );
  };

  // Test all forms
  const testAllForms = async () => {
    setIsTesting(true);
    
    // Reset all forms to pending status
    setForms(prevForms => 
      prevForms.map(form => ({ ...form, status: "pending", error: undefined }))
    );
    
    // Test each form sequentially
    for (const form of forms) {
      await testForm(form);
      // Add a small delay between tests
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    setIsTesting(false);
  };

  return (
    <div className="mb-6 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium flex items-center">
          <FormInput className="h-5 w-5 mr-2" />
          Form Tester
        </h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "Hide" : "Show"}
        </Button>
      </div>
      
      {isVisible && (
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Test form validation and submission on the current page. This tool detects forms and attempts to fill required fields with test data.
          </p>
          
          {detectedForms.length === 0 ? (
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                No forms detected on this page. Navigate to a page with forms to test them.
              </p>
              <Button 
                onClick={detectForms}
                className="mt-2"
                size="sm"
              >
                Refresh
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">
                  {detectedForms.length} form{detectedForms.length !== 1 ? "s" : ""} detected
                </p>
                <Button 
                  onClick={detectForms}
                  size="sm"
                  variant="outline"
                >
                  Refresh
                </Button>
              </div>
              
              <Button 
                onClick={testAllForms} 
                disabled={isTesting}
                className="w-full"
              >
                {isTesting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Testing Forms...
                  </>
                ) : (
                  "Test All Forms"
                )}
              </Button>
              
              <div className="space-y-2">
                {forms.map((form) => (
                  <div 
                    key={form.id} 
                    className="p-3 border border-gray-200 dark:border-gray-700 rounded"
                  >
                    <div className="flex items-start">
                      <div className="mt-0.5 mr-3">
                        {form.status === "testing" ? (
                          <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
                        ) : form.status === "passed" ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : form.status === "failed" ? (
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        ) : (
                          <ClipboardCheck className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium">{form.formSelector}</h4>
                          {form.status !== "testing" && (
                            <Button
                              onClick={() => testForm(form)}
                              size="sm"
                              variant="ghost"
                              className="h-6 px-2"
                            >
                              Test
                            </Button>
                          )}
                        </div>
                        
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {form.description}
                        </p>
                        
                        {form.error && (
                          <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                            {form.error}
                          </p>
                        )}
                        
                        {form.status === "passed" && (
                          <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                            Form validation and submission test passed
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-xs text-gray-500 dark:text-gray-400 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <p className="font-medium mb-1">Form Testing Notes</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>This tool only tests client-side validation and submission</li>
                  <li>It does not actually submit forms to the server</li>
                  <li>For complete testing, manually verify server-side validation and processing</li>
                  <li>Custom validation logic may not be fully tested</li>
                </ul>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
