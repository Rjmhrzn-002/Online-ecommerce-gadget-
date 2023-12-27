import { MdMenu, MdClose } from "react-icons/md";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import { useState } from "react";

export default function Header() {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState("All");

  const ToggleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div id="home" className="w-full bg-white  border-gray-200 shadow-xl">
        <div className="max-w-[1240px] mx-auto px-4">
          <div>
            <div className=" py-4 flex justify-between  ">
              {/* first div */}
              <div className="flex items-center">
                <FaRegUser size={20} />
                <p className=" px-2 text-sm border-r-2 border-gray-200 md:text-md lg:text-lg font-semibold cursor-pointer ">
                  login
                </p>
                <p className="px-2 text-sm md:text-md lg:text-lg font-semibold cursor-pointer">
                  signup
                </p>
              </div>
              {/* ( second div ) */}
              <div className="text-2xl md:text-3xl font-bold">
                <a href="#">Logo.</a>
              </div>
              <div>
                {/* ( third div ) */}
                <div className="md:flex items-center hidden ">
                  <input
                    type="email"
                    placeholder="Search products"
                    className="border-2 px-2 py-2 rounded-lg flex-1 font-semibold border-gray-200 decoration-none focus:outline-red-800"
                  />

                  <button className="bg-red-600 px-6 py-3.5 rounded-lg text-white ml-4 hover:bg-red-800">
                    <FaSearch />
                  </button>
                </div>
                {/* (menu/close icon) */}
                <div className="md:hidden cursor-pointer pl-14">
                  {!nav ? (
                    <MdMenu
                      className="cursor-pointer"
                      size={30}
                      color="black"
                      onClick={ToggleNav}
                    />
                  ) : (
                    <MdClose
                      className="cursor-pointer"
                      size={30}
                      color="black"
                      onClick={ToggleNav}
                    />
                  )}
                </div>
              </div>
            </div>
            {/*(mobile-nav)*/}
            <div
              className={
                !nav
                  ? "fixed -left-[100%] top-0 duration-1000 ease-in h-full z-50 "
                  : "w-3/4  h-screen flex flex-col  bg-gray-50 text-black  border-gray-300 border-r-2 py-4 fixed top-0 left-0  duration-700 ease-out z-50 "
              }
            >
              <h1>
                <a href="home" className="text-3xl font-bold px-4 text-red-800">
                  Logo.
                </a>
              </h1>
              <ul className=" py-8">
                <li className="border-b-2 hover:bg-gray-300 py-4 cursor-pointer px-4 ">
                  <a
                    href="#"
                    className="text-md md:text-lg font-semibold uppercase 
                    "
                  >
                    All
                  </a>
                </li>
                <li className="border-b-2 hover:bg-gray-300 py-4 cursor-pointer px-4 ">
                  <a
                    href="#"
                    className="text-md md:text-lg font-semibold uppercase 
                    "
                  >
                    laptops
                  </a>
                </li>
                <li className="border-b-2 hover:bg-gray-300 py-4 cursor-pointer px-4 hover:duration-200">
                  <a
                    href="#"
                    className="text-md md:text-lg font-semibold uppercase 
                    "
                  >
                    Mobiles
                  </a>
                </li>
                <li className="border-b-2 hover:bg-gray-300 py-4 cursor-pointer px-4 ">
                  <a
                    href="#"
                    className="text-md md:text-lg font-semibold uppercase 
                    "
                  >
                    PC builds
                  </a>
                </li>
                <li className="border-b-2 hover:bg-gray-300 py-4 cursor-pointer px-4 ">
                  <a
                    href="#"
                    className="text-md md:text-lg font-semibold uppercase 
                    "
                  >
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            {/* {mobile-search-div} */}
            <div className="flex items-center md:hidden pb-4">
              <input
                type="email"
                placeholder="Search products"
                className="border-2 px-4 py-1 rounded-lg flex-1 focus:outline-red-800"
              />

              <button className="bg-red-800  px-6 py-2.5 rounded-lg text-white ml-4">
                <FaSearch />
              </button>
            </div>
            {/* {desktop-nav} */}
            <div className="py-2 hidden md:flex border-t-2 border-gray-200">
              <ul className="flex w-full uppercase">
                <li
                  className={`${
                    active === "All" ? "bg-red-700 text-white rounded-xl" : ""
                  }  ${
                    active === "All" ? "" : "nav-hover"
                  } px-6 py-2 font-semibold cursor-pointer relative`}
                  onClick={() => setActive("All")}
                >
                  <button> All</button>
                </li>
                <li
                  className={`${
                    active === "Laptop"
                      ? "bg-red-700 text-white rounded-xl"
                      : ""
                  } ${
                    active === "Laptop" ? "" : "nav-hover"
                  } px-6 py-2 font-semibold cursor-pointer relative`}
                  onClick={() => setActive("Laptop")}
                >
                  <button>Laptop</button>
                </li>
                <li
                  className={`${
                    active === "Mobile"
                      ? "bg-red-700 text-white rounded-xl"
                      : ""
                  } ${
                    active === "Mobile" ? "" : "nav-hover"
                  } px-6 py-2 font-semibold cursor-pointer relative`}
                  onClick={() => setActive("Mobile")}
                >
                  <button>Mobile</button>
                </li>
                <li
                  className={`${
                    active === "Pc builds"
                      ? "bg-red-700 text-white rounded-xl"
                      : ""
                  } 
                  ${
                    active === "Pc builds" ? "" : "nav-hover"
                  } px-6 py-2 font-semibold cursor-pointer relative`}
                  onClick={() => setActive("Pc builds")}
                >
                  <button>Pc builds</button>
                </li>
                <li
                  className={`${
                    active === "Accessories"
                      ? "bg-red-700 text-white rounded-xl"
                      : ""
                  } ${
                    active === "Accessories" ? "" : "nav-hover"
                  } px-6 py-2 font-semibold cursor-pointer relative`}
                  onClick={() => setActive("Accessories")}
                >
                  <button>Accessories</button>
                </li>
              </ul>
              <button className="flex items-center px-4 py-1 bg-gray-200 rounded-md hover:bg-gray-300">
                <p className="w-max pr-4 text-lg font-semibold">Add to Cart</p>
                <IoCartOutline size={30} color="black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
