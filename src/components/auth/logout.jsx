import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export const LogoutUser = () => {
  Cookies.remove("token");

  return <Navigate to={"/"} replace={true}></Navigate>;
};
