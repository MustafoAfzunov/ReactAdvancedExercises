import { useState, useCallback } from 'react';

export const useCache = () => {
  const [cache, setCache] = useState({});

  const fetchWithCache = useCallback(async (url) => {
    if (cache[url]) {
      return cache[url];
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCache(prev => ({ ...prev, [url]: data }));
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }, [cache]);

  return { fetchWithCache };
}; 