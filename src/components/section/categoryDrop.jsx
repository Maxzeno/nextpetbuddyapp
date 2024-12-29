import React, { useEffect, useState } from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";

export default function CategoryDrop({ item }) {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get("page");
  const petId = queryParams.get("pet");
  const breedId = queryParams.get("breed");

  const [openDropdown, setOpenDropdown] = useState(
    petId == item.id ? "category-drop" : null
  );
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    for (let index = 0; index < item.breeds.length; index++) {
      const element = item.breeds[index];
      if (element.id == breedId) {
        setOpenDropdown("category-drop");
      }
    }
  }, [queryParams]);

  return (
    <>
      <div
        className=" border-b pb-3 my-3"
        onClick={() => toggleDropdown("category-drop")}
      >
        <div
          className={`flex justify-between cursor-pointer hover:text-amber-500 ${
            openDropdown === "category-drop" && "text-amber-500"
          }`}
        >
          <div>{item.name}</div>
          <div>
            <ChevronRight className="inline" />
          </div>
        </div>
        {openDropdown === "category-drop" && (
          <div className="bg-white text-black p-2 w-full rounded">
            {item.breeds.map((breed, index) => (
              <Link
                replace={true}
                key={index}
                to={`/product/?breed=${breed.id}${page ? "&page=" + page : ""}`}
                className="hover:bg-gray-200 rounded p-2 block my-2"
              >
                {breed.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
