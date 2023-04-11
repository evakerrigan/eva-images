import { Card } from 'components/CardItem/CardItem';
import { useState, useEffect, useCallback } from 'react';

interface IFetch {
  data: Card[];
  error: undefined;
}

const BASE_URL = 'https://eva-images-json-server.vercel.app/cards';

const useFetch = (query = localStorage.getItem('inputValue'), key = 'title') => {
  const [status, setStatus] = useState<IFetch>({
    data: [],
    error: undefined,
  });

  const [loading, setLoading] = useState(true);

  const fetchNow = useCallback(() => {
    const a = localStorage.getItem('inputValue') || '';
    fetch(query ? `${BASE_URL}/?${key}_like=${isNaN(+query) ? a : query}` : BASE_URL)
      .then((res) => {
        setLoading(true);
        return res.json();
      })
      .then((res) => {
        setLoading(false);
        setStatus({ data: res, error: undefined });
      });
  }, [key, query]);

  useEffect(() => {
    if (BASE_URL) {
      fetchNow();
    }
  }, [fetchNow]);

  return { ...status, loading, fetchNow };
};

export default useFetch;
