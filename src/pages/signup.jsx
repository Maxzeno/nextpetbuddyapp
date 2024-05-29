import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import imageSubmit from "../assets/message.png";
import logo from "../assets/next-pet-nobg.png";
import image from "../assets/signup-g.svg";
import Button from "../components/button/button";
import NavbarAuth from "../components/nav/navbarAuth.jsx";
import Footer from "../components/section/footer.jsx";
import submitHelper from "../helper/submit.js";

export default function Signup() {
  const [submit, setSubmit] = useState(false);

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
      const [result, errorObj] = await submitHelper("/user/", data, false);
      console.log(errorObj, "errorObj");
      if (!errorObj) {
        toast.success("Signup successful");
        setSubmit(true);
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
      {!submit ? (
        <div>
          <NavbarAuth
            child={
              <>
                <span>Already have an account? </span>
                <Link
                  to="/login"
                  className="text-amber-700 hover:text-amber-600 ml-1"
                >
                  Sign in
                </Link>
              </>
            }
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-5 px-5 lg:w-[80vw] lg:mx-auto mt-10 lg:mt-20">
            <div className="font-medium text-3xl pb-5 order-2 lg:order-1 flex justify-center">
              <img src={image} alt="" />
            </div>

            <div className="order-1 lg:order-2">
              <div className="text-3xl font-medium">Get Start Shopping</div>
              <div className="pb-5">Welcome to NextPetBuddy!</div>
              <form action="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 mt-2 md:flex gap-4">
                  <div className="flex-1 mb-3 md:mb-0">
                    <input
                      {...register("fullname", {
                        required: "This field is required",
                      })}
                      placeholder="Name"
                      type="text"
                      className="border w-full rounded-lg h-[40px] px-4 focus:outline-2 outline-gray-300"
                    />
                    {errors.fullname && (
                      <p className="text-sm text-red-500 pt-1">
                        {errors.fullname.message}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      {...register("phone", {
                        required: "This field is required",
                      })}
                      placeholder="Number"
                      type="text"
                      className="border w-full rounded-lg h-[40px] px-4 focus:outline-2 outline-gray-300"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 pt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-3 mt-2">
                  <input
                    {...register("email", {
                      required: "This field is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
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

                <div className="text-sm">
                  <span>By continuing, you agree to our</span>
                  <Link
                    className="text-amber-700 hover:text-amber-600 ml-1"
                    to="#"
                  >
                    Terms of Service
                  </Link>
                  <span> & </span>
                  <Link
                    className="text-amber-700 hover:text-amber-600 ml-1"
                    to="#"
                  >
                    Privacy Policy
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  text={loading ? "Loading..." : "Signup"}
                  color="text-white"
                  extraClass="block w-full rounded-lg my-4"
                  bgColor="bg-amber-600"
                  bgHover="hover:bg-amber-700"
                />
                <div>
                  <span>Have an account</span>
                  <Link
                    className="text-amber-700 hover:text-amber-600 ml-1"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-5 px-5 lg:w-[80vw] lg:mx-auto mt-10 lg:mt-20">
          <div className="">
            <img src={logo} alt="" width={150} />
            <div className="text-3xl font-medium mt-24">Confirm email</div>
            <div>Comfirmation email has been sent.</div>
            <div className="flex gap-5 mt-3">
              <Button
                text="Back to home"
                color="text-white"
                bgColor="bg-amber-600"
                bgHover="hover:bg-amber-700"
              />
            </div>
          </div>
          <div className="mt-10">
            <img src={imageSubmit} alt="" />
          </div>
        </div>
      )}
    </>
  );
}
