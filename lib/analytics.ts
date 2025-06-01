/**
 * Analytics utility for tracking events and page views
 * Uses Google Analytics 4 (GA4) via gtag.js
 */

// Define event categories
export enum EventCategory {
  ENGAGEMENT = 'engagement',
  CONVERSION = 'conversion',
  NAVIGATION = 'navigation',
  FORM = 'form',
  AUTHENTICATION = 'authentication',
  FEATURE = 'feature',
}

// Define event actions
export enum EventAction {
  // Navigation events
  PAGE_VIEW = 'page_view',
  CLICK = 'click',
  SCROLL = 'scroll',
  
  // Form events
  FORM_START = 'form_start',
  FORM_SUBMIT = 'form_submit',
  FORM_ERROR = 'form_error',
  FORM_SUCCESS = 'form_success',
  FORM_FIELD_CHANGE = 'form_field_change',
  
  // Authentication events
  SIGN_UP = 'sign_up',
  LOGIN = 'login',
  LOGOUT = 'logout',
  PASSWORD_RESET = 'password_reset',
  
  // Feature usage
  FEATURE_USE = 'feature_use',
  
  // Conversion events
  CONTACT_REQUEST = 'contact_request',
  PROJECT_START = 'project_start',
}

// Define event properties interface
export interface EventProperties {
  [key: string]: string | number | boolean | null | undefined;
}

// Define form step tracking interface
export interface FormStepProperties {
  formName: string;
  stepNumber: number;
  stepId?: string;
}

/**
 * Track an event using Google Analytics
 * @param category Event category
 * @param action Event action
 * @param label Optional label for the event
 * @param properties Optional additional properties
 */
export const trackEvent = (
  category: EventCategory,
  action: EventAction,
  label?: string,
  properties?: EventProperties
) => {
  // Check if gtag is available (client-side only)
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const eventParams: EventProperties = {
      event_category: category,
      ...properties,
    };

    if (label) {
      eventParams.event_label = label;
    }

    // Send event to Google Analytics
    (window as any).gtag('event', action, eventParams);
    
    // Log event in development mode
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] ${category} - ${action}${label ? ` - ${label}` : ''}`, properties);
    }
  }
};

/**
 * Track a page view
 * @param url Page URL
 * @param title Page title
 */
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    });
    
    // Also track as a regular event
    trackEvent(
      EventCategory.NAVIGATION,
      EventAction.PAGE_VIEW,
      title || url
    );
  }
};

/**
 * Track a button click
 * @param buttonName Name of the button
 * @param location Location of the button (e.g., 'header', 'footer', 'sidebar')
 */
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent(
    EventCategory.ENGAGEMENT,
    EventAction.CLICK,
    buttonName,
    { location }
  );
};

/**
 * Track form submission
 * @param formName Name of the form
 * @param success Whether the submission was successful
 * @param errorMessage Error message if submission failed
 */
export const trackFormSubmission = (
  formName: string,
  success: boolean,
  errorMessage?: string
) => {
  if (success) {
    trackEvent(
      EventCategory.FORM,
      EventAction.FORM_SUCCESS,
      formName
    );
  } else {
    trackEvent(
      EventCategory.FORM,
      EventAction.FORM_ERROR,
      formName,
      { error_message: errorMessage }
    );
  }
};

/**
 * Track authentication events
 * @param action Authentication action (sign_up, login, logout, password_reset)
 * @param method Authentication method (email, google, github, etc.)
 */
export const trackAuth = (
  action: EventAction.SIGN_UP | EventAction.LOGIN | EventAction.LOGOUT | EventAction.PASSWORD_RESET,
  method?: string
) => {
  trackEvent(
    EventCategory.AUTHENTICATION,
    action,
    method,
    { method }
  );
};

/**
 * Track feature usage
 * @param featureName Name of the feature
 * @param details Additional details about the feature usage
 */
export const trackFeatureUse = (featureName: string, details?: string) => {
  trackEvent(
    EventCategory.FEATURE,
    EventAction.FEATURE_USE,
    featureName,
    { details }
  );
};

/**
 * Track form step completion
 * @param formName Name of the form
 * @param stepNumber Step number
 * @param stepId Optional identifier for the step
 */
export const trackFormStep = (formName: string, stepNumber: number, stepId?: string) => {
  trackEvent(
    EventCategory.FORM,
    EventAction.FORM_FIELD_CHANGE,
    `${formName}_step_${stepNumber}`,
    { 
      form_name: formName,
      step_number: stepNumber,
      step_id: stepId || `step_${stepNumber}`
    }
  );
};
