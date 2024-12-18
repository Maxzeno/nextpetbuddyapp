import React, { useState } from "react";
import { Plus } from "react-bootstrap-icons";
import image1 from "../assets/hero-pet.png";
import image2 from "../assets/message.png";
import PetCard from "../components/card/petsCard.jsx";
import Navbar from "../components/nav/navbar";
import Footer from "../components/section/footer.jsx";

export default function ProductDetail() {
  const [currentImage, setCurrentImage] = useState(image1);

  return (
    <>
      <Navbar />
      <div className="mx-auto pt-5 w-[80vw] mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <div>
              <img
                className="h-[400px] w-full object-cover rounded-lg"
                src={currentImage}
                alt=""
              />

              <div className="flex gap-6 mt-24">
                <img
                  className="h-[80px] w-[80px] object-cover rounded-lg border-2 hover:border-amber-400 cursor-pointer"
                  src={image1}
                  alt=""
                  onClick={() => setCurrentImage(image1)}
                />
                <img
                  className="h-[80px] w-[80px] object-cover rounded-lg border-2 hover:border-amber-400 cursor-pointer"
                  src={image2}
                  alt=""
                  onClick={() => setCurrentImage(image2)}
                />
                <img
                  className="h-[80px] w-[80px] object-cover rounded-lg border-2 hover:border-amber-400 cursor-pointer"
                  src={image1}
                  alt=""
                  onClick={() => setCurrentImage(image1)}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="border-b-2 pb-5">
              <div className="font-medium text-4xl mb-3">story</div>
              <div className="font-semibold text-xl mb-3">₦541.93</div>
              <button className="rounded-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-20">
                <Plus className="inline text-[1.1em] leading-[0]" />
                <span>add</span>
              </button>
            </div>
            <div className="flex pt-5">
              <div className="flex-1">Product Code</div>
              <div className="flex-1">RfrpWLjR</div>
            </div>
            <div className="flex pt-5">
              <div className="flex-1">Product Code</div>
              <div className="flex-1">RfrpWLjR</div>
            </div>
            <div className="flex pt-5">
              <div className="flex-1">Product Code</div>
              <div className="flex-1">RfrpWLjR</div>
            </div>
          </div>
        </div>
        <div>
          <div className="font-medium text-xl mb-3 mt-5">Description</div>
          <div>
            Be along sign indicate. Sort several movie teach pull. Five yes
            scientist skill trade parent whom. My explain drive agree game.
          </div>
        </div>

        <div>
          <div className="font-medium text-xl mb-3 mt-5">Related Items</div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            <PetCard />
            <PetCard />
            <PetCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
