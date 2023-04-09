import { Card } from 'components/CardItem/CardItem';
import { useState, useEffect } from 'react';

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

  function fetchNow(BASE_URL: string) {
    // setStatus({ loading: true });
    console.log('queryFetch', query);
    const a = localStorage.getItem('inputValue') || '';
    console.log('a', a);
    fetch(query ? `${BASE_URL}/?${key}_like=${a.length > 0 ? a : query}` : BASE_URL)
      .then((res) => res.json())
      .then((res) => {
        setStatus({ loading: false, data: res, error: undefined });
      });
    // .catch((error) => {
    //   setStatus({ loading: false, error });
    // });
  }

  useEffect(() => {
    if (BASE_URL) {
      fetchNow(BASE_URL);
    }
  }, [query]);

  return { ...status, fetchNow };
};

export default useFetch;
