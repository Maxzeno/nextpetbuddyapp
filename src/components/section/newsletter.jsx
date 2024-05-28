import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import backgroundImage from "../../assets/jumbo.png";
import jumImage from "../../assets/newsletter.png";
import submitHelper from "../../helper/submit";
import Button from "../button/button";

export default function Newsletter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const [result, errorObj] = await submitHelper(
        "/newsletter/",
        data,
        false
      );
      if (!errorObj) {
        toast.success("Email added to newsletter");
        reset();
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
      className="mt-5 "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="lg:w-[70vw] w-[90vw] mx-auto flex lg:gap-20 lg:p-20 p-10">
        <div className="flex-1">
          <div className="font-bold text-3xl mb-3">Get top deals and more.</div>
          <div className="font-normal text-lg mb-3">
            Join our email subscription now to get updateson offers.
          </div>
          <form action="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-3">
              <input
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Email Address"
                type="text"
                className="border w-[80%] rounded-lg h-[40px] px-4 focus:outline-2 outline-gray-300"
              />
              {errors.email && (
                <p className="text-sm text-red-500 pt-1">
                  {errors.email.message}
                </p>
              )}
              <Button
                type="submit"
                disabled={loading}
                text={loading ? "Loading..." : "Subscribe"}
                color="text-white"
                bgColor="bg-amber-700"
                bgHover="hover:bg-amber-800"
              />
            </div>
          </form>
        </div>
        <div className="flex-1 hidden lg:block">
          <img className="object-fill h-[35vh]" src={jumImage} alt="" />
        </div>
      </div>
    </div>
  );
}
