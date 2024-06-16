import React from "react";
import PetCard from "../components/card/petsCard.jsx";
import PetsCategory from "../components/card/petsCategory.jsx";
import Navbar from "../components/nav/navbar.jsx";
import Footer from "../components/section/footer.jsx";
import Hero from "../components/section/hero.jsx";
import Loading from "../components/section/loading.jsx";
import MidJumbotron from "../components/section/midJombotron.jsx";
import Newsletter from "../components/section/newsletter.jsx";
import useFetch from "../hooks/useFetch.js";

const Home = () => {
  const [categoryData, categoryLoading, categoryError] = useFetch(
    "/pet/",
    false
  );
  const [petsData, petsLoading, petsError] = useFetch(
    "/product/?limit=12",
    true
  );
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-5 lg:px-24 pb-7">
        <div className="font-semibold text-2xl my-5">Pets Category</div>
        <div className="overflow-x-auto flex pb-5">
          {!categoryLoading &&
            !categoryError &&
            categoryData.map((item, index) => (
              <PetsCategory
                key={index}
                image={item.image}
                text={item.name}
                pet={item.id}
              />
            ))}
        </div>
        {categoryLoading && (
          <Loading extraClass="flex justify-center item-center pb-5" />
        )}
        {categoryError && <div>Failed to fetch</div>}
        <MidJumbotron />
        <div className="font-semibold text-2xl my-5">Popular Pets</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                orderitem={item.orderitem}
              />
            ))}
        </div>
        {petsLoading && (
          <Loading extraClass="flex justify-center item-center pb-5" />
        )}
        {petsError && <div>Failed to fetch</div>}
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
