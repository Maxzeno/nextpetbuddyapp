import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import image1 from "../assets/hero-pet.png";
import Navbar from "../components/nav/navbar.jsx";
import Footer from "../components/section/footer.jsx";
import Loading from "../components/section/loading.jsx";
import { formatAmount } from "../helper/format.js";
import submitHelper from "../helper/submit.js";
import useFetch from "../hooks/useFetch.js";

export default function ProductDetail() {
  const [currentImage, setCurrentImage] = useState(image1);
  let location = useLocation();
  if (!location.pathname.endsWith("/")) {
    location.pathname += "/";
  }
  const [productData, productLoading, productError] = useFetch(
    `${location.pathname}`,
    true
  );

  useEffect(() => {
    if (productData && productData.image) {
      setCurrentImage(productData.image);
    }
    setCartId(
      productData
        ? productData.orderitem
          ? productData.orderitem.id
          : null
        : null
    );
  }, [productData]);

  const [loading, setLoading] = useState(false);
  const [cartId, setCartId] = useState(
    productData
      ? productData.orderitem
        ? productData.orderitem.id
        : null
      : null
  );

  const toogleCart = async () => {
    const token = Cookies.get("token") || "";
    let jwtBody;
    try {
      jwtBody = jwtDecode(token);
    } catch {
      toast.error("Login to add or remove from cart");
      return;
    }
    setLoading(true);

    const body = {
      quantity: 1,
      animal: productData.id,
      buyer: jwtBody.user_id,
    };
    try {
      const cartUserId = cartId;
      const [result, errorObj] = await submitHelper(
        cartUserId ? `/cart/${cartUserId}/` : "/cart/",
        cartUserId ? {} : body,
        true,
        cartUserId ? "DELETE" : "POST"
      );
      if (cartId) {
        setCartId(null);
      } else {
        setCartId(result.id);
      }

      if (!errorObj) {
        toast.success(
          cartId ? "Product removed from cart" : "Product added to cart"
        );
      } else {
        toast.error(errorObj.detail || "An error occurred");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar />
      {productLoading ? (
        <Loading extraClass="flex justify-center item-center pb-5" />
      ) : productError ? (
        <div className="py-3">{productError.detail}</div>
      ) : (
        <div className="mx-auto pt-5 w-[80vw] mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <div>
                <img
                  className="h-[400px] w-full object-cover rounded-lg"
                  src={currentImage}
                  alt=""
                />

                <div className="flex gap-6 mt-24">
                  {productData.image && (
                    <img
                      className="h-[80px] w-[80px] object-cover rounded-lg border-2 hover:border-amber-400 cursor-pointer"
                      src={productData.image}
                      alt=""
                      onClick={() => setCurrentImage(productData.image)}
                    />
                  )}
                  {productData.image2 && (
                    <img
                      className="h-[80px] w-[80px] object-cover rounded-lg border-2 hover:border-amber-400 cursor-pointer"
                      src={productData.image2}
                      alt=""
                      onClick={() => setCurrentImage(productData.image2)}
                    />
                  )}
                  {productData.image3 && (
                    <img
                      className="h-[80px] w-[80px] object-cover rounded-lg border-2 hover:border-amber-400 cursor-pointer"
                      src={productData.image3}
                      alt=""
                      onClick={() => setCurrentImage(productData.image3)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="border-b-2 pb-5">
                <div className="font-medium text-4xl mb-3">
                  {productData.name}
                </div>
                <div className="font-semibold text-xl mb-3">
                  ₦{formatAmount(productData.price)}
                </div>
                <button
                  onClick={() => toogleCart()}
                  className="rounded-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-20"
                >
                  {/* <Plus className="inline text-[1.1em] leading-[0]" /> */}
                  <span>
                    {loading ? "LOADING.." : cartId ? "REMOVE" : "ADD"}
                  </span>
                </button>
              </div>
              <div className="flex pt-5">
                <div className="flex-1">Pet Code</div>
                <div className="flex-1">{productData.id}</div>
              </div>
            </div>
          </div>
          <div>
            <div className="font-medium text-xl mb-3 mt-5">Description</div>
            <div>{productData.description}</div>
          </div>

          {/* <div>
            <div className="font-medium text-xl mb-3 mt-5">Related Items</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
              <PetCard />
              <PetCard />
              <PetCard />
            </div>
          </div> */}
        </div>
      )}
      <Footer />
    </>
  );
}
