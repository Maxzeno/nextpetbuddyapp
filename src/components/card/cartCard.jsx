import { useState } from "react";
import { Dash, Plus, Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import jumImage from "../../assets/dog.jpg";
import { setAmount } from "../../features/counter/totalPriceSlice";
import submitHelper from "../../helper/submit";
import Loading from "../section/loading";

export default function CartCard({ title, price, image, id, quantity }) {
  let img;
  if (image) {
    img = image;
  } else {
    img = jumImage;
  }

  const totalPrice = useSelector((state) => state.totalPrice.value);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const toogleCart = async (action = "inc") => {
    setLoading(true);

    try {
      let result;
      let errorObj;
      if (action === "inc") {
        [result, errorObj] = await submitHelper(
          `/cart/${id}/`,
          {
            quantity: itemQuantity + 1,
          },
          true,
          "PATCH"
        );
        if (!errorObj) {
          dispatch(setAmount(Number(price)));
        }
      } else if (action === "dec") {
        [result, errorObj] = await submitHelper(
          `/cart/${id}/`,
          {
            quantity: itemQuantity - 1,
          },
          true,
          "PATCH"
        );
        if (!errorObj) {
          dispatch(setAmount(-Number(price)));
        }
      } else {
        [result, errorObj] = await submitHelper(
          `/cart/${id}/`,
          {},
          true,
          "DELETE"
        );
        if (!errorObj) {
          dispatch(setAmount(-(itemQuantity * Number(price))));
        }
      }

      if (!errorObj) {
        if (action === "del") {
          setItemQuantity(0);
        } else {
          if (result.quantity === 0) {
            [result, errorObj] = await submitHelper(
              `/cart/${id}/`,
              {},
              true,
              "DELETE"
            );
            setItemQuantity(0);
          } else {
            setItemQuantity(result.quantity);
          }
        }
      } else {
        toast.error(errorObj.detail || "An error occurred");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (itemQuantity === 0) {
    return <div></div>;
  }
  return (
    <div className="md:flex justify-between items-center w-full mt-3">
      <div className="flex gap-5 flex-1 md:justify-start justify-between pb-5 md:pb-0">
        <img className="h-[10vh]" src={img} alt="" />
        <div className="flex flex-col justify-center">
          <div className="font-medium text-sm">{title}</div>
          <div className="cursor-pointer" onClick={() => toogleCart("del")}>
            <Trash className="inline text-amber-700 mr-2" />
            <span>remove</span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-between">
        <div className="flex items-center">
          <Dash
            onClick={() => toogleCart("dec")}
            className="inline border text-black mr-2 text-[1.6em] hover:bg-gray-200 p-1 cursor-pointer rounded"
          />

          <input
            disabled
            onChange={() => {}}
            value={itemQuantity}
            type="text"
            className="border border-gray-300 outline-1 outline-gray-300 rounded text-center w-7 h-7 p-1"
          />
          <Plus
            onClick={() => toogleCart("inc")}
            className="inline border text-[1.6em] text-amber-700 ml-2 hover:bg-gray-200 p-1 cursor-pointer rounded"
          />
          {loading && (
            <div className="absolute z-[1000] ">
              <Loading extraClass="inline" />
            </div>
          )}
        </div>
        <div className="font-medium">₦{price}</div>
      </div>
    </div>
  );
}
