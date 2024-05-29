import React, { useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import imageSubmit from "../assets/message.png";
import logo from "../assets/next-pet-nobg.png";
import image from "../assets/signin-g.svg";
import Button from "../components/button/button";
import NavbarAuth from "../components/nav/navbarAuth.jsx";
import Footer from "../components/section/footer.jsx";

export default function ForgotPassword() {
  const [submit] = useState(false);
  return (
    <>
      {!submit ? (
        <div>
          <NavbarAuth
            child={
              <>
                <span>Already have an account?</span>
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
              <div className="text-3xl font-medium">Forgot your password?</div>
              <div className="pb-5 pt-2">
                Please enter the email address associated with your account and
                We will email you a link to reset your password.
              </div>
              <form action="post">
                <div className="mb-3 mt-2">
                  <input
                    placeholder="Email Address"
                    type="text"
                    className="border w-full rounded-lg h-[40px] px-4 focus:outline-2 outline-gray-300"
                  />
                </div>

                <Button
                  text="Submit"
                  color="text-white"
                  extraClass="block w-full rounded-lg my-4"
                  bgColor="bg-amber-600"
                  bgHover="hover:bg-amber-700"
                />
                <div>
                  <span>Back to login </span>
                  <Link
                    className="text-amber-700 hover:text-amber-600 ml-1"
                    to="/login"
                  >
                    {" "}
                    Sign in
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
                text="Try different email"
                color="text-white"
                bgColor="bg-purple-700"
                bgHover="hover:bg-purple-800"
                extraClass="mr-3"
                trailingIcon={<ArrowRight className="inline" />}
              />
              <Button
                text="Back to home"
                color="text-white"
                bgColor="bg-amber-500"
                bgHover="hover:bg-amber-600"
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
