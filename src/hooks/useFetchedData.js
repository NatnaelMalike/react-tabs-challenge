import { useEffect, useState } from "react";


const cache = {}; // In memory cache object

const useFetchedData = (tabId) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

       // Checking if the  data is already cached
      if (cache[tabId]) {
        setData(cache[tabId]);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("https://loripsum.net/api/1/medium/plaintext");
        const text = await res.text();
        cache[tabId] = text;
        setData(text);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tabId]);

  return { data, error, loading };
};

export default useFetchedData;