"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the context type
interface TestingVisibilityContextType {
  isTestingVisible: boolean;
  isAdminPage: boolean;
}

// Create the context with default values
const TestingVisibilityContext = createContext<TestingVisibilityContextType>({
  isTestingVisible: false,
  isAdminPage: false,
});

// Hook to use the context
export const useTestingVisibility = () => useContext(TestingVisibilityContext);

// Provider component
export function TestingVisibilityProvider({ children }: { children: ReactNode }) {
  const [isTestingVisible, setIsTestingVisible] = useState(false);
  const [isAdminPage, setIsAdminPage] = useState(false);

  useEffect(() => {
    // Only show testing tools in development mode
    const isDev = process.env.NODE_ENV === 'development';
    
    // Check if we're on an admin page
    const isAdmin = typeof window !== 'undefined' && window.location.pathname.includes('/admin');
    
    setIsTestingVisible(isDev);
    setIsAdminPage(isAdmin);
  }, []);

  return (
    <TestingVisibilityContext.Provider value={{ isTestingVisible, isAdminPage }}>
      {children}
    </TestingVisibilityContext.Provider>
  );
}

// HOC to wrap testing components
export function withTestingVisibility<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> {
  return (props: P) => {
    const { isTestingVisible, isAdminPage } = useTestingVisibility();
    
    // Only render the component if we're in development mode and on an admin page
    if (!isTestingVisible || !isAdminPage) return null;
    
    return <Component {...props} />;
  };
}
