import React, { useState } from "react";
import { Filter, XLg } from "react-bootstrap-icons";
import PetCard from "../components/card/petsCard.jsx";
import Navbar from "../components/nav/navbar.jsx";
import CategoryDrop from "../components/section/categoryDrop.jsx";
import Footer from "../components/section/footer.jsx";
import useScreenWidth from "../hooks/useScreenWidth.js";

export default function Products() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const screenWidth = useScreenWidth();

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
  return (
    <>
      {openDropdown === "mobile" && screenWidth < 768 ? (
        <div className="flex justify-between lg:w-[80vw] w-[90vw] mx-auto pt-5">
          <div className="text-2xl font-semibold">Filter</div>
          <div>
            <XLg
              className="text-[1.1em] leading-[0]"
              onClick={() => toggleDropdown("mobile")}
            />
          </div>
        </div>
      ) : (
        <Navbar />
      )}
      <div className="mx-auto pt-5 w-[80vw] mb-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div
            className={`md:col-span-1 ${
              screenWidth < 768
                ? openDropdown !== "mobile"
                  ? "hidden"
                  : "absolute z-20 bg-white h-screen top-[60px] left-0 w-full px-5 pt-3"
                : "block"
            }`}
          >
            <div className="font-medium text-lg">Pet Categories</div>
            <CategoryDrop />
            <CategoryDrop />
          </div>
          <div className="md:col-span-3">
            <div className="font-medium text-3xl bg-gray-200 rounded p-10">
              Products
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm py-5">10 Products found</div>
              <div className="block md:hidden">
                <button
                  className="border px-2 py-1 rounded"
                  onClick={() => toggleDropdown("mobile")}
                >
                  <span>Filter</span>
                  <Filter className="inline text-[1.1em] leading-[0] ml-2" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
              <PetCard />
              <PetCard />
              <PetCard />
              <PetCard />
            </div>
            <ul className="flex items-center space-x-2 py-3">
              <li>
                <a
                  className="px-3 py-2 text-gray-400 bg-gray-200 rounded cursor-default"
                  href="?page=1"
                >
                  Previous
                </a>
              </li>

              <li>
                <a
                  className="px-3 py-2 text-white bg-amber-600 rounded"
                  href="?page=1"
                >
                  1
                </a>
              </li>

              <li>
                <a
                  className="px-3 py-2 text-gray-400 bg-gray-200 rounded cursor-default"
                  href="?page=1"
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
