import backgroundImage from "../../assets/jumbo.png";
import jumImage from "../../assets/newsletter.png";
import Button from "../button/button";

export default function Newsletter() {
  return (
    <div
      className="mt-5 "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-[70vw] mx-auto flex gap-20 p-20">
        <div className="flex-1">
          <div className="font-bold text-3xl mb-3">Get top deals and more.</div>
          <div className="font-normal text-lg mb-3">
            Join our email subscription now to get updateson offers.
          </div>
          <div className="flex gap-3">
            <input
              placeholder="Email Address"
              type="text"
              className="border w-[80%] rounded-lg h-[40px] px-4 focus:outline-none focus:border-2"
            />

            <Button
              text="Subscribe"
              color="text-white"
              bgColor="bg-green-500"
              bgHover="hover:bg-green-600"
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
