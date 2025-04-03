import { useState, useEffect } from 'react';

const useFetch = (
  url: string,
): { data?: never; loading: boolean; error: Error | null } => {
  const [data, setData] = useState<never>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      setData(undefined);
      setLoading(false);
      setError(null);
    };
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
