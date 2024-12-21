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

      const token = Cookies.get("token");

      if (requireAuth && !token) {
        setError("No access token found");
        setLoading(false);
        return;
      }

      let headers = {
        "Content-Type": "application/json",
      };

      if (requireAuth) {
        headers['Authorization'] = `Bearer ${token}`
      }

      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}${url}`, {
          method: "GET",
          headers: headers,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [ data, loading, error ];
};

export default useFetch;
