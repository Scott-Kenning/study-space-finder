import { useState, useEffect } from 'react';

interface FetchResult<T = any> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface FetchOptions extends RequestInit {}

function useFetch<T = any>(url: string, options: FetchOptions = {}): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  // Using JSON.stringify for options to avoid potential issues with object references in the dependency array.
  }, [url, JSON.stringify(options)]);

  return { data, loading, error };
}

export default useFetch;
