import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full my-4">
      <div className="max-w-[1240px] mx-auto px-4 xl:px-0 flex items-center space-x-2">
        <input
          className="w-full md:w-1/2 px-2 py-4 border-2 border-gray-300 placeholder:text-gray-500 outline-none focus:border-gray-400 rounded-lg"
          type="email"
          placeholder="Get notified for Deals & Discounts"
        />
        <button className="uppercase p-4 text-white rounded-lg bg-red-800 font-semibold active:bg-red-900 transform-none">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
