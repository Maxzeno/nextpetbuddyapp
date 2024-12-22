import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../components/button/button";
import Navbar from "../components/nav/navbar";
import Footer from "../components/section/footer.jsx";
import submitHelper from "../helper/submit.js";

export default function ContactUs() {
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
        "/contact-us/",
        data,
        false
      );
      if (!errorObj) {
        toast.success("Message sent successfully");
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
    <>
      <Navbar />
      <div className="mx-auto pt-5 w-[80vw] mb-5">
        <div className="font-medium text-3xl pb-5">Contact us</div>

        <form action="post" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">Email</div>
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
            className="border w-full rounded-lg h-[40px] px-4 focus:outline-2 outline-gray-300"
          />
          {errors.email && (
            <p className="text-sm text-red-500 pt-1">{errors.email.message}</p>
          )}

          <div className="mb-3 mt-5">Message</div>
          <textarea
            {...register("message", {
              required: "This field is required",
            })}
            className="border w-full rounded-lg h-[80px] py-2 px-4 focus:outline-2 outline-gray-300"
            placeholder="Message"
          ></textarea>
          {errors.message && (
            <p className="text-sm text-red-500 pt-1">
              {errors.message.message}
            </p>
          )}
          <Button
            extraClass="mt-5"
            type="submit"
            disabled={loading}
            text={loading ? "Loading..." : "Send"}
            color="text-white"
            bgColor="bg-amber-700"
            bgHover="hover:bg-amber-800"
          />
        </form>
      </div>
      <Footer />
    </>
  );
}
