import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import petImage from "../../assets/hero-pet.png";
import submitHelper from "../../helper/submit";

export default function PetCard({
  title,
  breed,
  price,
  image,
  id,
  pet,
  orderitem,
}) {
  let img;
  if (image) {
    img = image;
  } else {
    img = petImage;
  }
  console.log(orderitem);

  const [loading, setLoading] = useState(false);
  const [cartId, setCartId] = useState(orderitem ? orderitem.id : null);

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
      animal: id,
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
    <div
      className="border hover:border-amber-500 cursor-pointer inline-block rounded-lg"
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.12)" }}
    >
      <Link to={`/product/${id}`}>
        <img
          className="h-[300px] w-full object-cover rounded-t-lg"
          src={img}
          alt=""
        />
      </Link>
      <div className="p-3">
        <Link to={`/product/${id}`} className="font-medium text-lg mb-1">
          {title}
        </Link>
        <Link
          to={`/product/?pet=${pet}`}
          className="font-normal text-sm text-amber-600 pb-3 mb-3 border-b-2 block"
        >
          {breed}
        </Link>
        <div className="flex justify-between">
          <div className="font-normal">{price}</div>
          <button
            onClick={() => toogleCart()}
            className="border rounded-3xl py-2 px-3 border-amber-500 hover:bg-gray-100"
          >
            {loading ? "LOADING.." : cartId ? "REMOVE" : "ADD"}
          </button>
        </div>
      </div>
    </div>
  );
}
