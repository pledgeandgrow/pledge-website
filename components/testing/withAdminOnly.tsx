"use client";

import { useTestingVisibility } from "./TestingVisibilityProvider";
import { ComponentType, useEffect, useState } from "react";

/**
 * Higher-order component that wraps testing tools to ensure they only appear
 * in the admin section and in development mode.
 */
export function withAdminOnly<P extends object>(
  Component: ComponentType<P>
): React.FC<P> {
  return function WithAdminOnlyComponent(props: P) {
    const [isMounted, setIsMounted] = useState(false);
    
    // Use the testing visibility context
    const { isTestingVisible, isAdminPage } = useTestingVisibility();
    
    // Handle client-side mounting
    useEffect(() => {
      setIsMounted(true);
    }, []);
    
    // Don't render anything during SSR
    if (!isMounted) {
      return null;
    }
    
    // Only render in development mode and on admin pages
    if (!isTestingVisible || !isAdminPage) {
      return null;
    }
    
    return <Component {...props} />;
  };
}
