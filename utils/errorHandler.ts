/**
 * Global error handler for the application
 * Helps identify and log errors that might cause white screens
 */

// Function to initialize error tracking
export function initErrorTracking() {
  if (typeof window !== 'undefined') {
    // Handle uncaught JavaScript errors
    window.addEventListener('error', (event) => {
      console.error('Uncaught error:', event.error);
      logError('Uncaught error', event.error);
      // Don't prevent default so the browser can still show the error
    });

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      logError('Unhandled promise rejection', event.reason);
    });
  }
}

// Log error to console and potentially to an error tracking service
export function logError(context: string, error: any) {
  const errorInfo = {
    message: error?.message || 'Unknown error',
    stack: error?.stack,
    context,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
  };

  console.error('Error logged:', errorInfo);
  
  // In the future, you could send this to an error tracking service
  // like Sentry, LogRocket, etc.
  // Example: sendToErrorTrackingService(errorInfo);
}

// Function to handle API errors
export function handleApiError(error: any) {
  const isNetworkError = !window.navigator.onLine || error.message === 'Network Error';
  
  if (isNetworkError) {
    return {
      message: 'Network connection issue. Please check your internet connection and try again.',
      isNetworkError: true,
    };
  }
  
  // Handle different types of API errors
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const status = error.response.status;
    
    if (status === 401 || status === 403) {
      return {
        message: 'Authentication error. Please log in again.',
        isAuthError: true,
      };
    }
    
    if (status === 404) {
      return {
        message: 'Resource not found.',
        isNotFoundError: true,
      };
    }
    
    if (status >= 500) {
      return {
        message: 'Server error. Please try again later.',
        isServerError: true,
      };
    }
    
    return {
      message: error.response.data?.message || 'An error occurred. Please try again.',
      status,
    };
  }
  
  // The request was made but no response was received
  if (error.request) {
    return {
      message: 'No response from server. Please try again later.',
      isTimeoutError: true,
    };
  }
  
  // Something happened in setting up the request that triggered an Error
  return {
    message: error.message || 'An unexpected error occurred. Please try again.',
    isUnknownError: true,
  };
}

export default {
  initErrorTracking,
  logError,
  handleApiError,
};
