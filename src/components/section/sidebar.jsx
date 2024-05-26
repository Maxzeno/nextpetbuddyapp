import { useState } from "react";
import { Cart, MenuButton, XLg } from "react-bootstrap-icons";
import Navbar from "../../components/nav/navbar";
import useScreenWidth from "../../hooks/useScreenWidth";

export default function Sidebar({ head, body }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const screenWidth = useScreenWidth();

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <div
        className={`${
          openDropdown === "mobile" &&
          "absolute w-screen h-screen top-0 left-0 z-50 bg-white"
        }`}
      >
        {openDropdown === "mobile" && screenWidth < 1024 ? (
          <div className="flex justify-between lg:w-[80vw] w-[90vw] mx-auto pt-5">
            <div>Menu</div>
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

        <div className="mx-auto w-[90vw] lg:w-[80vw] pb-5">
          <div className="lg:flex lg:shrink-0 lg:grow-0">
            <div
              className={`pt-5 lg:pt-10 w-full lg:w-[25vw] lg:border-r-2 ${
                screenWidth < 1024
                  ? openDropdown !== "mobile" && "hidden"
                  : "block"
              }`}
            >
              <div className="pb-5 mb-5 border-b-2 pr-auto lg:mr-10">
                <div className="flex gap-3 items-center bg-gray-950 text-white rounded-md py-2 px-4">
                  <Cart className="text-[1.1em] leading-[0]" />
                  <span>Cart</span>
                </div>
                <div className="flex gap-3 items-center text-black rounded-m py-2 px-4">
                  <Cart className="text-[1.1em] leading-[0]" />
                  <span>Cart</span>
                </div>
              </div>
              <div className="flex gap-3 items-center text-black rounded-m py-2 px-4">
                <Cart className="text-[1.1em] leading-[0]" />
                <span>Log out</span>
              </div>
            </div>

            {openDropdown !== "mobile" && (
              <div className="pl-auto lg:pl-10 pt-3">
                <div className="flex justify-between">
                  <div>{head}</div>

                  <span
                    className="cursor-pointer lg:hidden"
                    onClick={() => toggleDropdown("mobile")}
                  >
                    <MenuButton className="text-[1.6em] leading-[0] inline bg-gray-200 hover:bg-gray-300 py-1 rounded" />
                  </span>
                </div>
                <div>{body}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
