import Button from "../button/button";

export default function ChangePassword() {
  return (
    <div className="pt-5 border-t-2">
      <div className="font-semibold text-2xl pb-5">Password</div>
      <div className="lg:flex lg:gap-5">
        <div>
          <div>New Password</div>

          <input
            placeholder="**********"
            type="password"
            className="border w-full rounded-lg h-[40px] px-4 mt-2 focus:outline-none focus:border-2"
          />
        </div>

        <div>
          <div>Current Password</div>

          <input
            placeholder="**********"
            type="password"
            className="border w-full rounded-lg h-[40px] px-4 mt-2 focus:outline-none focus:border-2"
          />
        </div>
      </div>

      <Button
        to=""
        text="Update Password"
        color="text-white"
        bgColor="bg-amber-700"
        bgHover="hover:bg-amber-800"
        extraClass="mt-5"
      />
    </div>
  );
}
