import { useState, useEffect } from 'react';

interface UseSafeDataResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

/**
 * A hook for safely fetching data with proper loading and error states
 * This helps prevent white screens by properly handling loading and error states
 */
export function useSafeData<T>(
  fetchFn: () => Promise<T>,
  initialData: T | null = null,
  dependencies: any[] = []
): UseSafeDataResult<T> {
  const [data, setData] = useState<T | null>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [refreshKey, setRefreshKey] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    
    fetchFn()
      .then((result) => {
        if (isMounted) {
          setData(result);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error('Error fetching data:', err);
          setError(err instanceof Error ? err : new Error(String(err)));
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [...dependencies, refreshKey]);

  const refetch = () => {
    setRefreshKey(prev => prev + 1);
  };

  return { data, isLoading, error, refetch };
}

export default useSafeData;
