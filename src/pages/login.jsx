import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/signin-g.svg";
import Button from "../components/button/button";
import NavbarAuth from "../components/nav/navbarAuth.jsx";
import Footer from "../components/section/footer.jsx";

export default function Login() {
  return (
    <>
      <NavbarAuth
        child={
          <>
            <span>Don't have an account</span>
            <Link
              to="/signup"
              className="text-green-500 hover:text-green-400 ml-1"
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
          <form action="post">
            <div className="mb-3 mt-2">
              <input
                placeholder="Email Address"
                type="text"
                className="border w-full rounded-lg h-[40px] px-4 focus:outline-none focus:border-2"
              />
            </div>
            <div className="mb-3 mt-2">
              <input
                placeholder="Password"
                type="password"
                className="border w-full rounded-lg h-[40px] px-4 focus:outline-none focus:border-2"
              />
            </div>
            <div className="text-right">
              <a href="/forgot-password" className="hover:text-gray-500">
                Forgot password
              </a>
            </div>

            <Button
              text="Login"
              color="text-white"
              extraClass="block w-full rounded-lg my-4"
              bgColor="bg-green-600"
              bgHover="hover:bg-green-700"
            />
            <div>
              <span>Don’t have an account? </span>
              <Link
                className="text-green-500 hover:text-green-400 ml-1"
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
