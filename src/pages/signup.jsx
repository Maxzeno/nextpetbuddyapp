import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/signup-g.svg";
import Button from "../components/button/button";
import NavbarAuth from "../components/nav/navbarAuth.jsx";
import Footer from "../components/section/footer.jsx";

export default function Signup() {
  return (
    <>
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
          <form action="post">
            <div className="mb-3 mt-2 flex gap-4">
              <input
                placeholder="Name"
                type="text"
                className="border w-full rounded-lg h-[40px] px-4 focus:outline-none focus:border-2"
              />
              <input
                placeholder="Number"
                type="text"
                className="border w-full rounded-lg h-[40px] px-4 focus:outline-none focus:border-2"
              />
            </div>
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

            <div className="text-sm">
              <span>By continuing, you agree to our</span>
              <Link className="text-amber-700 hover:text-amber-600 ml-1" to="#">
                Terms of Service
              </Link>
              <span> & </span>
              <Link className="text-amber-700 hover:text-amber-600 ml-1" to="#">
                Privacy Policy
              </Link>
            </div>

            <Button
              text="Signup"
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
    </>
  );
}
