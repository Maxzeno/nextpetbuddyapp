import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/section/footer.jsx";
import Loading from "../components/section/loading.jsx";
import Sidebar from "../components/section/sidebar.jsx";
import { formatDate } from "../helper/format.js";
import useFetch from "../hooks/useFetch.js";

export default function OrderDetail() {
  let location = useLocation();
  if (!location.pathname.endsWith("/")) {
    location.pathname += "/";
  }
  const [orderData, orderLoading, orderError] = useFetch(
    `${location.pathname}`
  );

  const [userData, userLoading, userError] = useFetch("/auth-user");

  return (
    <>
      <Sidebar
        head={
          orderLoading ? (
            <div className="flex items-center gap-5">
              <span className="font-semibold text-3xl">Your Orders</span>
            </div>
          ) : orderError ? (
            <div className="py-3">{orderError.detail}</div>
          ) : (
            <div className="flex items-center gap-5">
              <span className="font-semibold text-3xl">Your Orders</span>
              <span className="bg-gray-400 px-2 text-white rounded text-xs py-1 font-medium">
                {orderData.status === "P"
                  ? "Pending"
                  : orderData.status === "S"
                  ? "Success"
                  : "Cancelled"}
              </span>
            </div>
          )
        }
        body={
          orderLoading ? (
            <Loading extraClass="flex justify-center item-center pb-5" />
          ) : (
            <div>
              <div className="flex gap-5 justify-between py-5">
                <div className="flex-1">
                  <div className="font-semibold text-base pb-2">
                    Shipping Address
                  </div>
                  <div>
                    {userLoading ? (
                      <Loading extraClass="flex justify-center item-center pb-5" />
                    ) : userError ? (
                      <div className="py-3">{userError.detail}</div>
                    ) : (
                      userData.user_address?.address
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-base pb-2">
                    Order Details
                  </div>
                  <div>Order ID: {orderData.id}</div>
                  <div>Order Date: {formatDate(orderData.created_at)}</div>
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
                      <td className="py-2 px-4 border-t font-medium">
                        Quantity
                      </td>
                      <td className="py-2 px-4 border-t font-medium">Total</td>
                    </tr>
                    {orderData.items.map((item, index) => (
                      <tr key={index}>
                        <td className="py-2 px-4 border-t">
                          <img
                            className="h-[10vh]"
                            src={item.animal.image}
                            alt=""
                          />
                        </td>
                        <td className="py-2 px-4 border-t">
                          {item.animal.name}
                        </td>
                        <td className="py-2 px-4 border-t">{item.animal.id}</td>
                        <td className="py-2 px-4 border-t">{item.quantity}</td>
                        <td className="py-2 px-4 border-t whitespace-nowrap">
                          {item.animal.price_ordered_at
                            ? item.animal.price_ordered_at
                            : item.animal.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )
        }
      />
      <Footer />
    </>
  );
}
