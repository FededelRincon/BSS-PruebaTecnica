// hooks/useFetch.ts
import { useState, useEffect } from "react";

interface UseFetchOptions extends RequestInit {
  // Extiende este tipo si necesitas opciones adicionales
}

interface UseFetchResult<T> {
  loading: boolean;
  data: T | null;
  error: Error | null;
}

export default function useFetch<T>(url: string, options?: UseFetchOptions): UseFetchResult<T> {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options);
        const json: T = await res.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    })();
  }, [url, options]);

  return { loading, data, error };
}
