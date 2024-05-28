import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function Footer() {
  const [categoryData, categoryLoading, categoryError] = useFetch(
    "/pet/?limit=6",
    false
  );
  return (
    <div className="bg-gray-100 px-10 lg:px-24">
      <div className="py-5 text-center font-medium">Pets Category</div>
      <div className="border-b-2 pb-5 flex justify-center">
        <div className="flex gap-5">
          {!categoryLoading &&
            !categoryError &&
            categoryData.results.map((item, index) => (
              <Link
                key={index}
                to={`product/?pet=${item.id}`}
                className="hover:text-amber-600"
              >
                {item.name}
              </Link>
            ))}
        </div>
      </div>

      <div className="text-center text-sm py-5">
        Copyright 2024 © NextPetBuddy. All rights reserved.
      </div>
    </div>
  );
}
