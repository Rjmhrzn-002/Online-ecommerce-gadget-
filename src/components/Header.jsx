import { MdMenu, MdClose } from "react-icons/md";
import { FaSearch, FaRegUser } from "react-icons/fa";

import { useState } from "react";

export default function Header() {
  const [nav, setNav] = useState(false);

  const ToggleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div
        id="home"
        className="w-full bg-white border-b-2 border-gray-200 shadow-xl"
      >
        <div className="max-w-[1240px] mx-auto px-2">
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

                  <button className="bg-red-800 px-6 py-3.5 rounded-lg text-white ml-4">
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
                  ? "fixed -left-[100%]"
                  : "w-3/4  h-screen flex flex-col  bg-gray-50 text-black  border-gray-300 border-r-2 py-4 fixed top-0 left-0 z-20 duration-700 ease-in-out"
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
                <li className="border-b-2 hover:bg-gray-300 py-4 cursor-pointer px-4 ">
                  <a
                    href="#"
                    className="text-md md:text-lg font-semibold uppercase 
                    "
                  >
                    All
                  </a>
                </li>
              </ul>
            </div>
            {/* {mobile-search-div} */}
            <div className="flex items-center md:hidden pb-4">
              <input
                type="email"
                placeholder="Search products"
                className="border-2 px-4 py-1 rounded-lg flex-1"
              />

              <button className="bg-red-800  px-6 py-2.5 rounded-lg text-white ml-4">
                <FaSearch />
              </button>
            </div>
            {/* {desktop-nav} */}
            <div className="py-2 hidden md:flex border-t-2 border-gray-200">
              <ul className="flex uppercase w-full">
                <li className="px-6 py-2 font-semibold cursor-pointer hover:bg-gray-200 ">
                  Laptop
                </li>
                <li className="px-6 py-2 font-semibold cursor-pointer hover:bg-gray-200 ">
                  Mobile
                </li>
                <li className="px-6 py-2 font-semibold cursor-pointer hover:bg-gray-200 ">
                  Pc builds
                </li>
                <li className="px-6 py-2 font-semibold cursor-pointer hover:bg-gray-200 ">
                  Accessories
                </li>
                <li className="px-6 py-2 font-semibold cursor-pointer hover:bg-gray-200 ">
                  All
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
