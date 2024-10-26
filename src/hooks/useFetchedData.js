import { useEffect, useState } from "react";

const useFetchedData = (tabId) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://loripsum.net/api/1/medium/plaintext");
        const text = await res.text();
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