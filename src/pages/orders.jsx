import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/section/footer.jsx";
import Loading from "../components/section/loading.jsx";
import Sidebar from "../components/section/sidebar.jsx";
import { formatDate } from "../helper/dateFormat.js";
import useFetch from "../hooks/useFetch.js";

export default function Orders() {
  const [ordersData, ordersLoading, ordersError] = useFetch("/order/");

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
                {!ordersLoading &&
                  !ordersError &&
                  ordersData.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-t">
                        <Link
                          to={`/order/${item.id}`}
                          className="hover:text-amber-600"
                        >
                          {item.id}
                        </Link>
                      </td>
                      <td className="py-2 px-4 border-t">
                        {item.has_paid ? "Yes" : "No"}
                      </td>
                      <td className="py-2 px-4 border-t">
                        <span className="bg-gray-400 px-2 text-white rounded text-xs py-1 font-medium">
                          {item.status === "P"
                            ? "Pending"
                            : item.status === "S"
                            ? "Success"
                            : "Cancelled"}
                        </span>
                      </td>
                      <td className="py-2 px-4 border-t whitespace-nowrap">
                        {formatDate(item.created_at)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {ordersLoading && (
              <Loading extraClass="flex justify-center item-center pb-5" />
            )}
            {ordersError && <div>Failed to fetch</div>}
          </div>
        }
      />
      <Footer />
    </>
  );
}
