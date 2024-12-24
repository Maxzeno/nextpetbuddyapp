import React, { useState } from "react";
import Button from "../button/button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useFetch from "../../hooks/useFetch.js";
import submitHelper from "../../helper/submit.js";
import Loading from "./loading.jsx";

export default function Account() {
  const [userData, userLoading, userError] = useFetch("/auth-user");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const [result, errorObj] = await submitHelper(
        `/user/${userData.id}/`,
        data,
        true,
        "PATCH"
      );
      if (!errorObj) {
        toast.success("User updated successfully");
        navigate("/settings");
      } else {
        toast.error(errorObj.detail || "An error occurred");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return userLoading ? (
    <Loading extraClass="flex justify-center item-center pb-5" />
  ) : userError ? (
    <div className="py-3">{userError.detail}</div>
  ) : (
    <form className="py-5 mb-2" onSubmit={handleSubmit(onSubmit)}>
      <div>Name</div>

      <input
        {...register("fullname", {
          required: "This field is required",
        })}
        defaultValue={userData.fullname}
        placeholder="Name"
        type="text"
        className="border w-full rounded-lg h-[40px] px-4 mt-2 focus:outline-2 outline-gray-300"
      />
      {errors.fullname && (
        <p className="text-sm text-red-500 pt-1">{errors.fullname.message}</p>
      )}

      <div className="pt-4">Number</div>

      <input
        {...register("phone")}
        defaultValue={userData.phone}
        placeholder="Number"
        type="text"
        className="border w-full rounded-lg h-[40px] px-4 mt-2 focus:outline-2 outline-gray-300"
      />

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
  );
}
