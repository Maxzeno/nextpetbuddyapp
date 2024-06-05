import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import submitHelper from "../../helper/submit";
import Button from "../button/button";

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const body = {
      old_password: data.old_password,
      new_password: data.new_password,
      new_password_again: data.new_password,
    };
    try {
      const [result, errorObj] = await submitHelper("/change-password/", body);
      if (!errorObj) {
        toast.success("Password updated successfully");
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
    <div className="pt-5 border-t-2">
      <form action="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="font-semibold text-2xl pb-5">Password</div>
        <div className="lg:flex lg:gap-5">
          <div>
            <div>New Password</div>

            <input
              {...register("new_password", {
                required: "This field is required",
              })}
              placeholder="**********"
              type="password"
              className="border w-full rounded-lg h-[40px] px-4 mt-2 focus:outline-2 outline-gray-300"
            />
            {errors.new_password && (
              <p className="text-sm text-red-500 pt-1">
                {errors.new_password.message}
              </p>
            )}
          </div>

          <div>
            <div>Current Password</div>

            <input
              {...register("old_password", {
                required: "This field is required",
              })}
              placeholder="**********"
              type="password"
              className="border w-full rounded-lg h-[40px] px-4 mt-2 focus:outline-2 outline-gray-300"
            />
            {errors.old_password && (
              <p className="text-sm text-red-500 pt-1">
                {errors.old_password.message}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          text={loading ? "Loading..." : "Update Password"}
          color="text-white"
          bgColor="bg-amber-700"
          bgHover="hover:bg-amber-800"
          extraClass="mt-5"
        />
      </form>
    </div>
  );
}
