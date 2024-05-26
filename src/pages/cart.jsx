import React from "react";
import { Dash, Plus, Trash } from "react-bootstrap-icons";
import jumImage from "../assets/mid-nobg.png";
import Button from "../components/button/button.jsx";
import Footer from "../components/section/footer.jsx";
import Sidebar from "../components/section/sidebar.jsx";

export default function Cart() {
  return (
    <>
      <Sidebar
        head={<div className="font-semibold text-3xl">Shop Cart</div>}
        body={
          <div>
            <div className="md:flex justify-between items-center w-full mt-3">
              <div className="flex gap-5 flex-1 md:justify-start justify-between pb-5 md:pb-0">
                <img className="h-[10vh]" src={jumImage} alt="" />
                <div className="flex flex-col justify-center">
                  <div className="font-medium text-sm">Bull Dog</div>
                  <div>
                    <Trash className="inline text-amber-700 mr-2" />
                    <span>remove</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-between">
                <div className="flex items-center">
                  <Dash className="inline border text-black mr-2 text-[1.6em] hover:bg-gray-200 p-1 cursor-pointer rounded" />

                  <input
                    value="1"
                    type="text"
                    className="border border-gray-300 outline-1 outline-gray-300 rounded text-center w-7 h-7 p-1"
                  />
                  <Plus className="inline border text-[1.6em] text-amber-700 ml-2 hover:bg-gray-200 p-1 cursor-pointer rounded" />
                </div>
                <div className="font-medium">₦2,167.72</div>
              </div>
            </div>
            <div className="border-t-2 pt-5 mt-5 font-medium flex justify-between">
              <div>Delivery fee</div>
              <div> ₦1,000</div>
            </div>
            <div className="pt-5 font-medium flex justify-between">
              <div>Total</div>
              <div> ₦3,167.72</div>
            </div>
            <div className="text-right pt-5">
              <Button
                text="Make Payment"
                color="text-white"
                bgColor="bg-amber-700"
                bgHover="hover:bg-amber-800"
              />
            </div>
          </div>
        }
      />
      <Footer />
    </>
  );
}
