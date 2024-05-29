import Cookies from "js-cookie";

const submitHelper = async (url, body, requireAuth=true, method="POST") => {
  let data = null;
  let errorObj = null;
  const token = Cookies.get("token") || "";

  let headers = {
    "Content-Type": "application/json",
  };

  if (requireAuth) {
    headers['Authorization'] = `Bearer ${token}`
  }

    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}${url}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    });

    data = await response.json();
    if (!response.ok) {
      errorObj = data
  }
  
  return [ data, errorObj ];
};

export default submitHelper;

