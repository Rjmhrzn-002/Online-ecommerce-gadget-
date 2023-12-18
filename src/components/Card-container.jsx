import React from "react";

export default function Container(children) {
  return (
    <div className="w-full bg-white px-2">
      <div className="max-w-[1240px] mx-auto  py-4  ">
        <h1 className="font-bold text-2xl md:text-3xl text-gray-600 pb-8">
          Latest releases !
        </h1>
        <div className="grid gap-4 grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-6">
          {children}
        </div>
      </div>
    </div>
  );
}
