import backgroundImage from "../../assets/jumbo.png";
import jumImage from "../../assets/newsletter.png";
import Button from "../button/button";

export default function Newsletter() {
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
          <div className="flex gap-3">
            <input
              placeholder="Email Address"
              type="text"
              className="border w-[80%] rounded-lg h-[40px] px-4 focus:outline-2 outline-gray-300"
            />

            <Button
              text="Subscribe"
              color="text-white"
              bgColor="bg-amber-700"
              bgHover="hover:bg-amber-800"
            />
          </div>
        </div>
        <div className="flex-1 hidden lg:block">
          <img className="object-fill h-[35vh]" src={jumImage} alt="" />
        </div>
      </div>
    </div>
  );
}
