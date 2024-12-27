import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export const AuthorizeUser = ({ children }) => {
  const token = Cookies.get("token") || "";

  if (!token) {
    return <Navigate to={"/"} replace={true}></Navigate>;
  }

  return children;
};
