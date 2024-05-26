import Button from "../button/button";

export default function Account() {
  return (
    <div className="py-5 mb-2">
      <div>Name</div>

      <input
        placeholder="Name"
        type="text"
        className="border w-full rounded-lg h-[40px] px-4 mt-2 focus:outline-2 outline-gray-300"
      />

      <div className="pt-4">Number</div>

      <input
        placeholder="Number"
        type="text"
        className="border w-full rounded-lg h-[40px] px-4 mt-2 focus:outline-2 outline-gray-300"
      />

      <Button
        to=""
        text="Save Details"
        color="text-white"
        bgColor="bg-amber-700"
        bgHover="hover:bg-amber-800"
        extraClass="mt-5"
      />
    </div>
  );
}
