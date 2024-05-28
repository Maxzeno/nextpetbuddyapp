import Cookies from "js-cookie";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import image from "../assets/signin-g.svg";
import Button from "../components/button/button";
import NavbarAuth from "../components/nav/navbarAuth.jsx";
import Footer from "../components/section/footer.jsx";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/token/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        Cookies.set("token", result.token, { expires: 90 });

        navigate("/home");
      } else {
        toast.error(result.detail || "An error occurred");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
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
            <Link
              to="/signup"
              className="text-amber-700 hover:text-amber-600 ml-1"
            >
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
          <div className="text-3xl font-medium">Sign in to NextPetBuddy</div>
          <div className="pb-5">Welcome back to NextPetBuddy!</div>
          <form action="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 mt-2">
              <input
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Email Address"
                type="text"
                className="border w-full rounded-lg h-[40px] px-4 focus:outline-2 outline-gray-300"
              />
              {errors.email && (
                <p className="text-sm text-red-500 pt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-3 mt-2">
              <input
                {...register("password", {
                  required: "This field is required",
                })}
                placeholder="Password"
                type="password"
                className="border w-full rounded-lg h-[40px] px-4 focus:outline-2 outline-gray-300"
              />
              {errors.password && (
                <p className="text-sm text-red-500 pt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="text-right">
              <a href="/forgot-password" className="hover:text-amber-600">
                Forgot password
              </a>
            </div>

            <Button
              type="submit"
              disabled={loading}
              text={loading ? "Loading..." : "Login"}
              color="text-white"
              extraClass="block w-full rounded-lg my-4"
              bgColor="bg-amber-600"
              bgHover="hover:bg-amber-700"
            />
            <div>
              <span>Don’t have an account? </span>
              <Link
                className="text-amber-700 hover:text-amber-600 ml-1"
                to="/signup"
              >
                {" "}
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
