import emptyImage from "../../assets/empty.png";

export default function EmptyCard({ name = "Nothing Here" }) {
  return (
    <div className="flex justify-center items-center flex-col h-[50vh]">
      <img src={emptyImage} alt="Empty Card" className="w-[100px] h-[100px]" />
      {name}
    </div>
  );
}
