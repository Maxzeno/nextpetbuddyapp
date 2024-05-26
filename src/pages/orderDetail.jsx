import React from "react";
import { Link } from "react-router-dom";
import jumImage from "../assets/mid-nobg.png";
import Footer from "../components/section/footer.jsx";
import Sidebar from "../components/section/sidebar.jsx";

export default function OrderDetail() {
  return (
    <>
      <Sidebar
        head={
          <div className="flex items-center gap-5">
            <span className="font-semibold text-3xl">Your Orders</span>
            <span className="bg-gray-400 px-2 text-white rounded text-xs py-1 font-medium">
              Pending
            </span>
          </div>
        }
        body={
          <div>
            <div className="flex gap-5 justify-between py-5">
              <div className="flex-1">
                <div className="font-semibold text-base pb-2">
                  Shipping Address
                </div>
                <div>39 paradise street enugu Enugu</div>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-base pb-2">
                  Order Details
                </div>
                <div>Order ID: NL8Zgv6p</div>
                <div>Order Date: August 24, 2023</div>
              </div>
            </div>
            <div className="py-5 overflow-x-auto">
              <table className="w-full bg-white">
                <tbody>
                  <tr className="bg-gray-200">
                    <td className="py-2 px-4 border-t font-medium"></td>
                    <td className="py-2 px-4 border-t font-medium">Name</td>
                    <td className="py-2 px-4 border-t font-medium">
                      Product ID
                    </td>
                    <td className="py-2 px-4 border-t font-medium">Quantity</td>
                    <td className="py-2 px-4 border-t font-medium">Total</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-t">
                      <img className="h-[10vh]" src={jumImage} alt="" />
                    </td>
                    <td className="py-2 px-4 border-t">
                      <Link to="#">Bull Dog</Link>
                    </td>
                    <td className="py-2 px-4 border-t">RfrpWLjR</td>
                    <td className="py-2 px-4 border-t">2</td>
                    <td className="py-2 px-4 border-t whitespace-nowrap">
                      4590
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        }
      />
      <Footer />
    </>
  );
}
