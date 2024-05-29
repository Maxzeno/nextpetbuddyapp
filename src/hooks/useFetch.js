// useFetch.js
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const useFetch = (url, requireAuth=true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const token = Cookies.get("token") || "";

      let headers = {
        "Content-Type": "application/json",
      };

      if (requireAuth) {
        headers['Authorization'] = `Bearer ${token}`
      }

      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}${url}`, {
        method: "GET",
        headers: headers,
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result);
      } else {
        setData(result);
      }
        
      setLoading(false);
 
    };

    fetchData();
  }, [url]);

  return [ data, loading, error ];
};

export default useFetch;
