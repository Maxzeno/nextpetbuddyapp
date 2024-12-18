import petImage from "../../assets/next-pet-nobg.png";

export default function PetsCategory() {
  return (
    <div className="p-5 border hover:border-green-300 cursor-pointer rounded mr-5 flex-grow-0 flex-shrink-0">
      <div className="mb-5">
        <img
          className="h-[150px] w-[150px] object-contain"
          src={petImage}
          alt=""
        />
      </div>
      <div className="text-center">text</div>
    </div>
  );
}
