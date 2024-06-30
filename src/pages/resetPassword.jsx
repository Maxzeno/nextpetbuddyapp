import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import image from "../assets/signin-g.svg";
import Button from "../components/button/button";
import NavbarAuth from "../components/nav/navbarAuth.jsx";
import Footer from "../components/section/footer.jsx";
import submitHelper from "../helper/submit.js";

export default function ResetPassword() {
  let location = useLocation();
  if (!location.pathname.endsWith("/")) {
    location.pathname += "/";
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const [result, errorObj] = await submitHelper(
        location.pathname,
        data,
        false,
        "PUT"
      );
      if (!errorObj) {
        toast.success("Password reset successful");
        navigate("/login");
      } else {
        toast.error(errorObj.detail || "An error occurred");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <NavbarAuth
        child={
          <>
            <span>Don't have an account</span>
            <Link to="#" className="text-amber-700 hover:text-amber-600 ml-1">
              Signup
            </Link>
          </>
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-5 px-5 lg:w-[80vw] lg:mx-auto mt-10 lg:mt-20">
        <div className="font-medium text-3xl pb-5 order-2 lg:order-1 flex justify-center">
          <img src={image} alt="" />
        </div>

        <div className="order-1 lg:order-2">
          <div className="text-3xl font-medium">Reset your password</div>
          <div className="pb-5 pt-2">Please enter your new passwords</div>
          <form action="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 mt-2">
              <input
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
                placeholder="new password"
                type="password"
                className="border w-full rounded-lg h-[40px] px-4 focus:outline-2 outline-gray-300"
              />
              {errors.password && (
                <p className="text-sm text-red-500 pt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mb-3 mt-2">
              <input
                {...register("password_again", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
                placeholder="again"
                type="password"
                className="border w-full rounded-lg h-[40px] px-4 focus:outline-2 outline-gray-300"
              />
              {errors.password_again && (
                <p className="text-sm text-red-500 pt-1">
                  {errors.password_again.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading}
              text={loading ? "Loading..." : "Reset password"}
              color="text-white"
              extraClass="block w-full rounded-lg my-4"
              bgColor="bg-amber-600"
              bgHover="hover:bg-amber-700"
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
