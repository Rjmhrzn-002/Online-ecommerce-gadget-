import React from "react";

export default function Container({ children }) {
  // *Fetch API Data and bring in multiple props and render it on basis of multiple children

  return (
    <div className="w-full  px-4 z-0">
      <div className="max-w-[1240px] mx-auto  py-4  ">
        <h1 className=" uppercase font-semibold text-2xl md:text-3xl text-gray-700  my-5 flex justify-start items-center">
          Flash Sale !! ( <span className="text-xl md:text-2xl">upto 30%</span>{" "}
          )
        </h1>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {children}
        </div>
        <h1 className=" uppercase font-semibold text-2xl md:text-3xl text-gray-700 inline-block  my-10">
          Latest Releases !!
        </h1>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {children}
        </div>
      </div>
    </div>
  );
}
