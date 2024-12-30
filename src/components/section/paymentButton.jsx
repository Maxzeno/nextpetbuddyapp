import { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import submitHelper from "../../helper/submit";

export default function PaymentButton({ amount, userData }) {
  const navigate = useNavigate();

  const [starting, setStart] = useState(false);
  const data = {
    buyer: userData.id,
  };

  let config = {
    reference: new Date().getTime().toString(),
    email: userData?.email || "",
    amount: parseFloat(amount) * 100, // 20000 kobo = N200
    publicKey: process.env.REACT_APP_API_KEY,
    metadata: {
      order_id: "",
    },
  };

  const onSuccess = (reference) => {
    navigate("/cart");
    toast.success("Your payment is been processed");
  };

  const onClose = () => {
    navigate("/cart");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <button
      disabled={starting}
      onClick={async () => {
        setStart(true);
        const [result, errorObj] = await submitHelper("/order/", data);
        if (errorObj) {
          toast.error(errorObj.detail || "An error occurred");
          return;
        }
        config["metadata"]["order_id"] = result.id;

        initializePayment({ onSuccess, onClose, config });
      }}
      className={`py-2 px-3 rounded text-white bg-amber-700 hover:bg-amber-800`}
    >
      {starting ? "Starting..." : "Make Payment"}
    </button>
  );
}
