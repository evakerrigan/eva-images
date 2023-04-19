import { useState, useEffect } from 'react';

export function useFetch<T>(url: string, initialState: T) {
  const [data, setData] = useState<T>(initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) {
      return;
    }

    setLoading(true);

    fetch(url)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return {
    loading,
    data,
  };
}
