import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/nav/navbar";
import Loading from "../components/section/loading";
import useFetch from "../hooks/useFetch";

export default function ConfirmEmail() {
  let location = useLocation();
  if (!location.pathname.endsWith("/")) {
    location.pathname += "/";
  }
  const [emailConfirmData, emailConfirmLoading, emailConfirmError] = useFetch(
    `${location.pathname}`,
    false
  );

  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-white">
        <Navbar />
      </div>

      <div className="flex items-center justify-center mt-10">
        <div className="bg-white p-8 rounded-lg shadow-md">
          {!emailConfirmLoading && (
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              Email Confirmation
            </h1>
          )}
          {!emailConfirmLoading && !emailConfirmError && (
            <div>
              <span className="text-gray-600 mb-2">
                {emailConfirmData?.detail}
              </span>

              <span className="text-gray-600 ml-1">
                <Link to="/login" className="text-blue-500 hover:text-blue-400">
                  login
                </Link>
              </span>
            </div>
          )}
          {emailConfirmError && <div>{emailConfirmError.detail}</div>}

          {emailConfirmLoading && (
            <Loading extraClass="flex justify-center item-center" />
          )}
        </div>
      </div>
    </div>
  );
}
