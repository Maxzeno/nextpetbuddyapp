import React from "react";
import PetCard from "../components/card/petsCard.jsx";
import PetsCategory from "../components/card/petsCategory.jsx";
import Navbar from "../components/nav/navbar.jsx";
import Footer from "../components/section/footer.jsx";
import Hero from "../components/section/hero.jsx";
import MidJumbotron from "../components/section/midJombotron.jsx";
import Newsletter from "../components/section/newsletter.jsx";
import useFetch from "../hooks/useFetch.js";

const Home = () => {
  const [petData, petLoading, petError] = useFetch("/pet", false);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-5 lg:px-24 pb-7">
        <div className="font-semibold text-2xl my-5">Pets Category</div>
        <div className="overflow-x-auto flex pb-5">
          {!petLoading &&
            petData.map((item, index) => (
              <PetsCategory key={index} image={item.image} text={item.name} />
            ))}
        </div>
        <MidJumbotron />
        <div className="font-semibold text-2xl my-5">Popular Pets</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
