import React from "react";
import PetCard from "../components/card/petsCard.jsx";
import Navbar from "../components/nav/navbar.jsx";
import CategoryDrop from "../components/section/categoryDrop.jsx";
import Footer from "../components/section/footer.jsx";

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="mx-auto pt-5 w-[80vw] mb-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="md:col-span-1">
            <div className="font-medium text-lg">Pet Categories</div>
            <CategoryDrop />
            <CategoryDrop />
          </div>
          <div className="md:col-span-3">
            <div className="font-medium text-3xl bg-gray-200 rounded p-10">
              Products
            </div>
            <div className="text-sm py-5">10 Products found</div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
              <PetCard />
              <PetCard />
              <PetCard />
              <PetCard />
            </div>
            <ul class="flex items-center space-x-2 py-3">
              <li>
                <a
                  class="px-3 py-2 text-gray-400 bg-gray-200 rounded cursor-default"
                  href="?page=1"
                >
                  Previous
                </a>
              </li>

              <li>
                <a
                  class="px-3 py-2 text-white bg-amber-500 rounded"
                  href="?page=1"
                >
                  1
                </a>
              </li>

              <li>
                <a
                  class="px-3 py-2 text-gray-400 bg-gray-200 rounded cursor-default"
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
