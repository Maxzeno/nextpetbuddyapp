import React, { useState } from "react";
import { Filter, XLg } from "react-bootstrap-icons";
import { useSearchParams } from "react-router-dom";
import PetCard from "../components/card/petsCard.jsx";
import Navbar from "../components/nav/navbar.jsx";
import CategoryDrop from "../components/section/categoryDrop.jsx";
import Footer from "../components/section/footer.jsx";
import Loading from "../components/section/loading.jsx";
import Pagination from "../components/section/pagination.jsx";
import useFetch from "../hooks/useFetch.js";
import useScreenWidth from "../hooks/useScreenWidth.js";

export default function Products() {
  const [searchParams] = useSearchParams();
  let page = searchParams.get("page") || 1;
  const offset = (page - 1) * 10;

  const search = searchParams.get("search") || "";
  const petId = searchParams.get("pet");
  const breedId = searchParams.get("breed");

  let urlAnimal = "";
  if (breedId) {
    urlAnimal = `/product/?breed=${breedId}&limit=12&offset=${offset}&search=${search}`;
  } else {
    if (petId) {
      urlAnimal = `/product/?breed__pet=${petId}&limit=12&offset=${offset}&search=${search}`;
    } else {
      urlAnimal = `/product/?limit=12&offset=${offset}&search=${search}`;
    }
  }

  const [petsData, petsLoading, petsError] = useFetch(urlAnimal, false);

  const [categoryData, categoryLoading, categoryError] = useFetch(
    "/pet",
    false
  );

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
            {!categoryLoading &&
              !categoryError &&
              categoryData.map((item, index) => (
                <CategoryDrop key={index} item={item} />
              ))}
          </div>
          <div className="md:col-span-3">
            <div className="font-medium text-3xl bg-gray-200 rounded p-10">
              Products
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm py-5">
                {" "}
                {!petsLoading && !petsError && petsData.count} Products found
              </div>
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
              {!petsLoading &&
                !petsError &&
                petsData.results.map((item, index) => (
                  <PetCard
                    key={index}
                    id={item.id}
                    image={item.image}
                    title={item.name}
                    price={item.price}
                    breed={item.breed.name}
                    pet={item.breed.pet.id}
                  />
                ))}
            </div>
            {petsLoading && (
              <Loading extraClass="flex justify-center item-center pb-5" />
            )}

            <Pagination
              currentPage={page}
              path={`/product/${
                breedId
                  ? `?breed=${breedId}&search=${search}&`
                  : petId
                  ? `?pet=${petId}&search=${search}&`
                  : `?search=${search}&`
              }page=`}
              itemsPerPage={10}
              totalItems={petsData?.count ?? 0}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
