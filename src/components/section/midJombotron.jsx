import jumImage from "../../assets/mid-nobg.png";
import Button from "../button/button";

export default function MidJumbotron() {
  return (
    <div className="bg-gray-200 rounded-lg my-5 flex p-8">
      <div className="flex-1">
        <div className="font-bold text-4xl mb-3">Get the best pets</div>
        <div className="font-normal text-xl mb-3">
          Every pet you want at your finger tips. find your buddy.
        </div>
        <Button
          to="/login"
          text="Start Shopping"
          color="text-white"
          bgColor="bg-amber-700"
          bgHover="hover:bg-amber-800"
        />
      </div>
      <div className="flex-1 hidden lg:block">
        <img className="h-[30vh] float-end" src={jumImage} alt="" />
      </div>
    </div>
  );
}
