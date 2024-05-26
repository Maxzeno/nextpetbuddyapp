import React, { useState } from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function CategoryDrop() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <div
        className=" border-b pb-3 my-3"
        onClick={() => toggleDropdown("category-drop")}
      >
        <div className="flex justify-between cursor-pointer hover:text-amber-500">
          <div>Dog</div>
          <div>
            <ChevronRight className="inline" />
          </div>
        </div>
        {openDropdown === "category-drop" && (
          <div className="bg-white text-black p-2 w-full rounded">
            <Link to="#" className="hover:bg-gray-200 rounded p-2 block my-2">
              one
            </Link>
            <Link to="#" className="hover:bg-gray-200 rounded p-2 block my-2">
              one
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
