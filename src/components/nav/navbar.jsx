import { useState } from "react";
import {
  CaretDownFill,
  GridFill,
  List,
  Search,
  XLg,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import logo from "../../assets/Next_Pet_buddy.png";
import Button from "../button/button";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileDropdown = (dropdown) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
  };

  const closeMobileSearchByOutsideClick = (event) => {
    if (event.target.id === "closeMobileSearchByOutsideClick") {
      toggleDropdown("search");
    }
  };

  return (
    <nav className="border-b-2">
      <div className="hidden md:block w-[80vw] mx-auto my-5">
        <div className="flex justify-between items-center mb-7">
          <div className="pt-2">
            <a href="/">
              <img src={logo} alt="" width={150} />
            </a>
          </div>
          <div className="relative">
            <input
              placeholder="search for pets"
              type="text"
              className="border w-[30vw] rounded-lg h-[40px] px-4 focus:outline-none focus:border-2"
            />
            <Search className="relative right-8 top-[-3px] inline text-gray-500" />
          </div>
          <div>
            <Button
              to="/login"
              text="login"
              color="text-black"
              bgColor="bg-gray-200"
              bgHover="hover:bg-gray-300"
              extraClass="mr-3"
            />
            <Button
              to="/signup"
              text="signup"
              color="text-white"
              bgColor="bg-amber-700"
              bgHover="hover:bg-amber-800"
            />
          </div>
        </div>
        <div className="flex items-center mb-5">
          <div
            className="mr-5 flex items-center  cursor-pointer"
            onClick={() => toggleDropdown("pets")}
          >
            <div className="bg-amber-700 px-5 py-3 text-white rounded">
              <GridFill className="inline mr-2" />
              <span>Pets</span>
            </div>
            {openDropdown === "pets" && (
              <div
                className="absolute z-10 bg-white text-black p-2 w-[200px] rounded top-[165px]"
                style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.12)" }}
              >
                <Link
                  to="#"
                  className="hover:bg-gray-200 rounded p-2 block my-2"
                >
                  one
                </Link>
                <Link
                  to="#"
                  className="hover:bg-gray-200 rounded p-2 block my-2"
                >
                  one
                </Link>
              </div>
            )}
          </div>
          <Link to="/" className="mr-5 hover:text-amber-500">
            home
          </Link>
          <Link to="/product" className="mr-5 hover:text-amber-500">
            product
          </Link>
          <Link to="/contact" className="mr-5 hover:text-amber-500">
            contact
          </Link>
          <div
            className="mr-5flex items-center cursor-pointer"
            onClick={() => toggleDropdown("drop")}
          >
            <div className="hover:text-amber-500 ">
              <span className="mr-2">drop</span>
              <CaretDownFill className="inline" />
            </div>
            {openDropdown === "drop" && (
              <div
                className="absolute z-10 bg-white p-2 w-[200px] rounded top-[165px]"
                style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.12)" }}
              >
                <Link
                  to="#"
                  className="hover:bg-gray-200 rounded p-2 block my-2"
                >
                  one
                </Link>
                <Link
                  to="#"
                  className="hover:bg-gray-200 rounded p-2 block my-2"
                >
                  one
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="block md:hidden px-5 py-3">
        <div className="flex justify-between">
          <div className="pt-2">
            <a href="/">
              <img src={logo} alt="" width={100} />
            </a>
          </div>
          <div className="flex items-center">
            <Search
              className="text-[1.5em] cursor-pointer leading-[0] inline text-black mr-3"
              onClick={() => toggleDropdown("search")}
            />
            <List
              className="text-[1.7em] cursor-pointer leading-[0] inline text-black"
              onClick={() => toggleDropdown("mobile")}
            />
          </div>
        </div>
        {openDropdown === "search" && (
          <div
            onClick={closeMobileSearchByOutsideClick}
            id="closeMobileSearchByOutsideClick"
            className="fixed z-20 w-full bg-black bg-opacity-50 left-0 top-0 h-full"
          >
            <div className="relative w-[80vw] bg-white mt-20 mx-auto rounded py-2 px-3">
              <div className="py-2 flex justify-between">
                <div>Search for pets</div>
                <div
                  className="cursor-pointer"
                  onClick={() => toggleDropdown("search")}
                >
                  <XLg className="text-[1.1em] leading-[0]" />
                </div>
              </div>
              <input
                placeholder="type"
                type="text"
                className="border w-full rounded-lg h-[40px] px-4 focus:outline-none focus:border-2"
              />
              <Search className="relative top-[-35px] left-[calc(80vw-50px)] inline text-gray-500" />
            </div>
          </div>
        )}

        {openDropdown === "mobile" && (
          <div className="w-full h-full bg-white fixed top-0 left-0 flex justify-between flex-col">
            <div className="py-3 px-5">
              <div className="flex justify-between mb-5 pt-2">
                <div>
                  <img src={logo} alt="" width={100} />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => toggleDropdown("mobile")}
                >
                  <XLg className="text-[1.5em] leading-[0]" />
                </div>
              </div>
              <div
                className="cursor-pointer mb-4"
                onClick={() => toggleMobileDropdown("pets")}
              >
                <div className="bg-amber-700 px-5 py-3 text-white rounded">
                  <GridFill className="inline mr-2" />
                  <span>Pets</span>
                </div>
                {openMobileDropdown === "pets" && (
                  <div className="bg-white text-black p-2 mt-2 rounded top-[165px] border">
                    <Link
                      to="#"
                      className="hover:bg-gray-200 rounded p-2 block my-2"
                    >
                      one
                    </Link>
                    <Link
                      to="#"
                      className="hover:bg-gray-200 rounded p-2 block my-2"
                    >
                      one
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/"
                className="mr-5 hover:text-amber-500 block py-3 border-b"
              >
                home
              </Link>
              <Link
                to="/product"
                className="mr-5 hover:text-amber-500 block py-3 border-b"
              >
                product
              </Link>
              <Link
                to="/contact"
                className="mr-5 hover:text-amber-500 block py-3 border-b"
              >
                contact
              </Link>
              <div
                className="mr-5flex items-center cursor-pointer"
                onClick={() => toggleMobileDropdown("drop")}
              >
                <div className="hover:text-amber-500 block py-3 border-b">
                  <span className="mr-2">drop</span>
                  <CaretDownFill className="inline" />
                </div>
                {openMobileDropdown === "drop" && (
                  <div
                    className="absolute z-10 bg-white p-2 w-[calc(100%-2.5rem)] rounded top-[330px]"
                    style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.12)" }}
                  >
                    <Link
                      to="#"
                      className="hover:bg-gray-200 rounded p-2 block my-2"
                    >
                      one
                    </Link>
                    <Link
                      to="#"
                      className="hover:bg-gray-200 rounded p-2 block my-2"
                    >
                      one
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="py-3 px-5">
              <Button
                to="/login"
                text="login"
                color="text-black"
                bgColor="bg-gray-200"
                bgHover="hover:bg-gray-300"
                extraClass="block w-full mb-3"
              />
              <Button
                to="/signup"
                text="signup"
                color="text-white"
                bgColor="bg-amber-700"
                bgHover="hover:bg-amber-800"
                extraClass="block w-full"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
