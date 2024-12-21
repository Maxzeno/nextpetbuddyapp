import { Link } from "react-router-dom";
import petImage from "../../assets/hero-pet.png";

export default function PetCard({ title, breed, price, image, id, pet }) {
  let img;
  if (image) {
    img = image;
  } else {
    img = petImage;
  }
  return (
    <div
      className="border hover:border-amber-500 cursor-pointer inline-block rounded-lg"
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.12)" }}
    >
      <Link to={`/product/${id}`}>
        <img
          className="h-[300px] w-full object-cover rounded-t-lg"
          src={img}
          alt=""
        />
      </Link>
      <div className="p-3">
        <Link to={`/product/${id}`} className="font-medium text-lg mb-1">
          {title}
        </Link>
        <Link
          to={`product/?pet=${pet}`}
          className="font-normal text-sm text-amber-600 pb-3 mb-3 border-b-2 block"
        >
          {breed}
        </Link>
        <div className="flex justify-between">
          <div className="font-normal">{price}</div>
          <button className="border rounded-3xl py-2 px-3 border-amber-500 hover:bg-gray-100">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
