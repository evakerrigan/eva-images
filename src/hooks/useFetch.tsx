import { Card } from 'components/CardItem/CardItem';
import { useState, useEffect, useCallback } from 'react';

interface IFetch {
  loading: boolean;
  data: Card[];
  error: undefined;
}

const BASE_URL = 'https://eva-images-json-server.vercel.app/cards';

const useFetch = (query = localStorage.getItem('inputValue'), key = 'title') => {
  const [status, setStatus] = useState<IFetch>({
    loading: false,
    data: [],
    error: undefined,
  });

  const fetchNow = useCallback(() => {
    const a = localStorage.getItem('inputValue') || '';
    fetch(query ? `${BASE_URL}/?${key}_like=${isNaN(+query) ? a : query}` : BASE_URL)
      .then((res) => res.json())
      .then((res) => {
        setStatus({ loading: false, data: res, error: undefined });
      });
  }, [key, query]);

  useEffect(() => {
    if (BASE_URL) {
      fetchNow();
    }
  }, [fetchNow]);

  return { ...status, fetchNow };
};

export default useFetch;
