import petImage from "../../assets/mid-nobg.png";

export default function PetsCategory({ text, image }) {
  let img;
  if (image) {
    img = image;
  } else {
    img = petImage;
  }
  return (
    <div className="p-5 border hover:border-amber-500 cursor-pointer rounded mr-5 flex-grow-0 flex-shrink-0">
      <div className="mb-5">
        <img className="h-[150px] w-[150px] object-contain" src={img} alt="" />
      </div>
      <div className="text-center">{text}</div>
    </div>
  );
}
