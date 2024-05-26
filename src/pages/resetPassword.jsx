import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/signin-g.svg";
import Button from "../components/button/button";
import NavbarAuth from "../components/nav/navbarAuth.jsx";
import Footer from "../components/section/footer.jsx";

export default function ResetPassword() {
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
          <form action="post">
            <div className="mb-3 mt-2">
              <input
                placeholder="new password"
                type="text"
                className="border w-full rounded-lg h-[40px] px-4 focus:outline-2 outline-gray-300"
              />
            </div>
            <div className="mb-3 mt-2">
              <input
                placeholder="again"
                type="password"
                className="border w-full rounded-lg h-[40px] px-4 focus:outline-2 outline-gray-300"
              />
            </div>

            <Button
              text="Reset password"
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
