import React from "react";
import Button from "../components/button/button.jsx";
import Footer from "../components/section/footer.jsx";
import Sidebar from "../components/section/sidebar.jsx";

export default function Address() {
  return (
    <>
      <Sidebar
        head={<div className="font-semibold text-3xl">Address</div>}
        body={
          <div className="pt-5">
            <div>State</div>

            <input
              placeholder="State"
              type="text"
              className="border w-full rounded-lg h-[40px] px-4 mt-2 focus:outline-none focus:border-2"
            />

            <div className="pt-4">Address</div>

            <input
              placeholder="Address"
              type="text"
              className="border w-full rounded-lg h-[40px] px-4 mt-2 focus:outline-none focus:border-2"
            />

            <Button
              to=""
              text="Save Details"
              color="text-white"
              bgColor="bg-amber-700"
              bgHover="hover:bg-amber-800"
              extraClass="mt-5"
            />
          </div>
        }
      />
      <Footer />
    </>
  );
}
