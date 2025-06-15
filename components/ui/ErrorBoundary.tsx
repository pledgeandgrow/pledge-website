"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { logError } from "@/utils/errorHandler";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary component to catch rendering errors and display a fallback UI
 * This helps prevent white screens by showing a helpful error message instead
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error to our error tracking system
    logError("React Error Boundary caught error", { error, errorInfo });
    
    // Call the onError prop if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleRetry = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // If a custom fallback is provided, use it
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Otherwise use the default fallback UI
      return (
        <div className="flex flex-col items-center justify-center p-6 text-center min-h-[200px] rounded-lg border border-gray-200 bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">Something went wrong</h3>
          <p className="text-sm text-gray-600 mb-4">
            We encountered an error while rendering this component.
          </p>
          <Button 
            variant="outline" 
            onClick={this.handleRetry}
            className="flex items-center gap-2"
          >
            <RefreshCcw className="h-4 w-4" />
            Try Again
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
