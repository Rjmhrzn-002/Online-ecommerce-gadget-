import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";

import { useState } from "react";

export default function Card(props) {
  const [fav, setFav] = useState(false);

  function favToggle() {
    setFav((fav) => !fav);
  }

  return (
    <div className=" shadow-xl bg-white  rounded-md overflow-hidden flex-col cursor-pointer relative  pb-6">
      <div className="h-52 w-full ">
        <img
          className="h-full w-full object-cover"
          src={props.item.image}
          alt="product"
        />
      </div>

      <div className="absolute flex space-x-1 bottom-2 right-2">
        <div className="rounded-full flex bg-red-100 p-2">
          <TiShoppingCart size={25} />
          <p className="text-md font-semibold text-gray-700">Buy now</p>
        </div>
      </div>
      <div className="p-4 text-gray-800 flex flex-col items-start">
        <div className="flex justify-between items-center  w-full">
          <h1 className="text-md font-semibold text-gray-900">
            {props.item.title}
          </h1>
          <div onClick={favToggle} className="rounded-full  p-2">
            {!fav ? (
              <IoIosHeartEmpty size={25} color="991B1B" />
            ) : (
              <IoMdHeart size={25} color="red" />
            )}
          </div>
        </div>
        <p className="leading-5 text-gray-500 text-left tracking-tighter">
          {props.item.description}
        </p>
        <p>{props.item.stats.reviewCount}</p>
      </div>
    </div>
  );
}
