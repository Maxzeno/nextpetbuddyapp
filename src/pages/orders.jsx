import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/section/footer.jsx";
import Sidebar from "../components/section/sidebar.jsx";

export default function Orders() {
  return (
    <>
      <Sidebar
        head={<div className="font-semibold text-3xl">Your Orders</div>}
        body={
          <div className="py-5 overflow-x-auto">
            <table className="w-full bg-white">
              <tbody>
                <tr className="bg-gray-200">
                  <td className="py-2 px-4 border-t font-medium">Order</td>
                  <td className="py-2 px-4 border-t font-medium">Paid</td>
                  <td className="py-2 px-4 border-t font-medium">Status</td>
                  <td className="py-2 px-4 border-t font-medium">Date</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-t">
                    <Link to="#" className="hover:text-amber-600">
                      3hjh33j
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-t">Yes</td>
                  <td className="py-2 px-4 border-t">
                    <span className="bg-gray-400 px-2 text-white rounded text-xs py-1 font-medium">
                      Pending
                    </span>
                  </td>
                  <td className="py-2 px-4 border-t whitespace-nowrap">
                    August 22, 2023
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-t">
                    <Link to="#" className="hover:text-amber-600">
                      ejdjkee
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-t">Yes</td>
                  <td className="py-2 px-4 border-t">
                    <span className="bg-gray-400 px-2 text-white rounded text-xs py-1 font-medium">
                      Pending
                    </span>
                  </td>
                  <td className="py-2 px-4 border-t whitespace-nowrap">
                    August 22, 2023
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
      <Footer />
    </>
  );
}
