import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaReddit,
  FaFacebookMessenger,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" bg-[#1B1B1B] w-full ">
      <div className="max-w-[1240px] mx-auto text-white grid grid-cols-1 md:grid-cols-3">
        {/* div 1 */}
        <div className="px-4 space-y-3  text-center ">
          <div className="space-y-4">
            <h1 className="font-bold text-4xl md:text-3xl tracking-wide p-8">
              Logo.
            </h1>

            <h2 className="text-gray-400 text-md hover:text-gray-300">
              Email :
              <a className="underline" href="https://mail.google.com">
                Ecommerce@gmail.com
              </a>
            </h2>
            <h3 className="text-gray-400 text-md ">
              Help-center: +977 01-5552225
            </h3>
            <ul className="md:flex space-x-8 flex justify-center py-4 ">
              <li>
                <FaInstagram size={25} color="gray" />
              </li>
              <li>
                <FaFacebook size={25} color="gray" />
              </li>
              <li>
                <FaTwitter size={25} color="gray" />
              </li>
              <li>
                <FaLinkedin size={25} color="gray" />
              </li>
              <li>
                <FaReddit size={25} color="gray" />
              </li>
              <li>
                <FaFacebookMessenger size={25} color="gray" />
              </li>
            </ul>
          </div>
        </div>
        {/* div 2 */}
        <div className=" md:col-span-2 px-4  py-8 ">
          <ul className="flex justify-around items-start w-full md:text-lg">
            <li>
              <h1 className="font-bold text-xl md:text-lg tracking-wider  pb-4">
                Brands
              </h1>
              <ul className="text-gray-400">
                <li className="underline tracking-tight pb-1 cursor-pointer">
                  Samsung
                </li>
                <li className="underline tracking-tight pb-1 cursor-pointer">
                  Apple
                </li>
                <li className="underline tracking-tight pb-1 cursor-pointer">
                  Lenovo
                </li>
                <li className="underline tracking-tight pb-1 cursor-pointer">
                  Sony
                </li>
                <li className="underline tracking-tight pb-1 cursor-pointer">
                  Asus
                </li>
                <li className="underline tracking-tight pb-1 cursor-pointer">
                  Hp
                </li>
              </ul>
            </li>
            <li>
              <h1 className="font-bold text-xl md:text-lg tracking-wider  pb-4">
                Payment Methods
              </h1>
              <ul className="text-gray-400">
                <li className="underline tracking-tight pb-1 cursor-pointer">
                  Esewa
                </li>
                <li className="underline tracking-tight pb-1 cursor-pointer">
                  Ime Pay
                </li>
                <li className="underline tracking-tight pb-1 cursor-pointer">
                  Khalti
                </li>
                <li className="underline tracking-tight pb-1 cursor-pointer">
                  Mobile Banking
                </li>
              </ul>
            </li>
            <li>
              <h1 className="font-bold text-xl  md:text-lg  tracking-wider pb-4">
                Customer Care
              </h1>
              <ul className="text-gray-400">
                <li className="underline tracking-tight pb-1 cursor-pointer">
                  Help center
                </li>
                <li className="underline tracking-tight pb-1 cursor-pointer">
                  How to buy
                </li>
                <li className="underline tracking-tight pb-1 cursor-pointer">
                  Returns & Refunds
                </li>
                <li className="underline tracking-tight pb-1 cursor-pointer">
                  Terms and Condition
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* div 3 */}
        <div className="w-full md:col-span-3 border-t-2 border-t-red-200 py-6">
          <h1 className="text-center text-gray-300">
            Ecommerce website &copy; 2023
          </h1>
        </div>
      </div>
    </div>
  );
}
