import { ArrowRight } from "react-bootstrap-icons";
import backgroundImage from "../../assets/hero-pet.png";
import Button from "../button/button";

export default function Hero() {
  return (
    <div
      className="bg-cover bg-center h-[70vh] flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="px-[10%] lg:px-[15%]">
        <div className="bg-yellow-300 py-1 px-2 rounded text-xs font-semibold inline-block mb-5">
          Shop pets at an affordable price
        </div>
        <div className="font-semibold text-5xl mb-4">Buy the cool pets</div>
        <div className="font-normal text-xl mb-5">
          Buy the pet you want and get it fast at an affordable rate.
        </div>
        <Button
          to="/signup"
          text="Shop Now"
          color="text-white"
          bgColor="bg-amber-700"
          bgHover="hover:bg-amber-800"
          extraClass="mr-3"
          trailingIcon={<ArrowRight className="inline" />}
        />
      </div>
    </div>
  );
}
