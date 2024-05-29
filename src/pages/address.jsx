import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/button/button.jsx";
import Footer from "../components/section/footer.jsx";
import Loading from "../components/section/loading.jsx";
import Sidebar from "../components/section/sidebar.jsx";
import submitHelper from "../helper/submit.js";
import useFetch from "../hooks/useFetch.js";

export default function Address() {
  const [userData, userLoading, userError] = useFetch("/auth-user");
  console.log(userData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    const body = {
      state: data.state,
      address: data.address,
      user: userData.id,
    };
    try {
      const [result, errorObj] = await submitHelper(
        userData.user_address
          ? `/address/${userData.user_address.id}/`
          : "/address/",
        body,
        true,
        userData.user_address ? "PUT" : "POST"
      );
      if (!errorObj) {
        if (userData.user_address) {
          toast.success("Address updated successfully");
        } else {
          toast.success("Address added successfully");
        }
        navigate("/address");
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
      <Sidebar
        head={<div className="font-semibold text-3xl">Address</div>}
        body={
          userLoading ? (
            <Loading extraClass="flex justify-center item-center pb-5" />
          ) : (
            <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
              <div>State</div>

              <input
                {...register("state", {
                  required: "This field is required",
                })}
                defaultValue={userData.user_address?.state}
                placeholder="State"
                type="text"
                className="border w-full rounded-lg h-[40px] px-4 mt-2 focus:outline-2 outline-gray-300"
              />
              {errors.state && (
                <p className="text-sm text-red-500 pt-1">
                  {errors.state.message}
                </p>
              )}

              <div className="pt-4">Address</div>

              <input
                {...register("address", {
                  required: "This field is required",
                })}
                defaultValue={userData.user_address?.address}
                placeholder="Address"
                type="text"
                className="border w-full rounded-lg h-[40px] px-4 mt-2 focus:outline-2 outline-gray-300"
              />
              {errors.address && (
                <p className="text-sm text-red-500 pt-1">
                  {errors.address.message}
                </p>
              )}

              <Button
                type="submit"
                disabled={loading}
                text={loading ? "Loading..." : "Save Details"}
                color="text-white"
                bgColor="bg-amber-700"
                bgHover="hover:bg-amber-800"
                extraClass="mt-5"
              />
            </form>
          )
        }
      />
      <Footer />
    </>
  );
}
