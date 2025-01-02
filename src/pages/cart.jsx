import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCard from "../components/card/EmptyCard.jsx";
import CartCard from "../components/card/cartCard.jsx";
import Footer from "../components/section/footer.jsx";
import Loading from "../components/section/loading.jsx";
import PaymentButton from "../components/section/paymentButton.jsx";
import Sidebar from "../components/section/sidebar.jsx";
import { setAmountExact } from "../features/counter/totalPriceSlice.js";
import { formatAmount } from "../helper/format.js";
import useFetch from "../hooks/useFetch.js";

export default function Cart() {
  const [userData, userLoading, userError] = useFetch("/auth-user");

  const [cartsData, cartsLoading, cartsError] = useFetch("/cart/");
  const totalPrice = useSelector((state) => state.totalPrice.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartsData) {
      
      let totalValue = 0;
      for (let index = 0; index < cartsData.length; index++) {
        const cartItem = cartsData[index];
        totalValue += cartItem.animal.price * cartItem.quantity;
      }
      dispatch(setAmountExact(totalValue + 1000));
    }
  }, [cartsData]);
  return (
    <>
      <Sidebar
        head={<div className="font-semibold text-3xl">Shopping Cart</div>}
        body={
          <div>
            {!cartsLoading &&
              !cartsError &&
              cartsData.map((item, index) => (
                <CartCard
                  key={index}
                  id={item.id}
                  image={item.animal.image}
                  title={item.animal.name}
                  price={item.animal.price}
                  quantity={item.quantity}
                />
              ))}
            {cartsLoading && (
              <Loading extraClass="flex justify-center item-center pb-5" />
            )}
            {cartsError && <div>Failed to fetch</div>}
            {!cartsLoading && !cartsError && cartsData.length !== 0 && (
              <>
                <div className="border-t-2 pt-5 mt-5 font-medium flex justify-between">
                  <div>Delivery fee</div>
                  <div> ₦1,000</div>
                </div>
                <div className="pt-5 font-medium flex justify-between">
                  <div>Total</div>
                  <div> ₦{formatAmount(totalPrice.toFixed(2))}</div>
                </div>
                <div className="text-right pt-5">
                  {!userLoading &&
                    !userError &&
                    userData.length !== 0 &&
                    totalPrice && (
                      <PaymentButton amount={totalPrice} userData={userData} />
                    )}
                </div>
              </>
            )}
            {cartsData && cartsData.length === 0 && <EmptyCard />}
          </div>
        }
      />
      <Footer />
    </>
  );
}
