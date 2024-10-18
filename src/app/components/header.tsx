"use client";

import { useState } from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { Quicksand } from "next/font/google";
import { Lato } from "next/font/google";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

// Font imports
const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${quicksand.className}`}>
      {/* First Row */}
      <div className="flex flex-col md:flex-row justify-between items-center px-2 py-4 sm:p-4 space-y-4 md:space-y-0 mx-2 ">


        <div className="grid grid-cols-3 md:grid-cols-1 items-center gap-x-6 sm:gap-x-32 ">
          {/* Hamburger Icon for mobile */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-[#253D4E] text-sm sm:text-base">
              {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex justify-center flex-grow mr-4">
            <Image src="/images/logo.png" alt="Logo" width={120} height={120} />
          </div>

          {/* Wishlist and Cart for Mobile */}
          <div className="flex md:hidden space-x-2 justify-end text-xs sm:text-base">
            <p className="flex items-center cursor-pointer text-[#253D4E]">
              <FaRegHeart className="mr-1" />
              Wishlist
            </p>
            <p className="flex items-center cursor-pointer text-[#253D4E]">
              <FiShoppingCart className="mr-1" />
              Cart
            </p>
          </div>
        </div>


        {/* Search and Location */}
        <div className="flex items-center space-x-4 ml-4 w-full">
          {/* Combined Categories and Input Field */}
          <div className="flex border border-[#3BB77E] rounded-md overflow-hidden w-full">
            {/* Dropdown for categories */}
            <select className="p-1 border-r border-[#3BB77E] outline-none w-1/2 md:w-40 sm:w-1/3 text-xs sm:text-sm md:text-base">
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="home-appliances">Home Appliances</option>
            </select>

            {/* Search input */}
            <div className="relative w-full text-[#838383] overflow-hidden py-0 lg:py-1">
              <input
                type="text"
                placeholder="Search for items..."
                className={`${lato.className} p-2 pl-4 w-full border-[#3BB77E]  focus:outline-none  transition-all duration-300`} // Added focus and transition effects
              />

              <IoSearch className="text-base absolute right-2 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          {/* Location Button, visible only in desktop view */}
          <div className="hidden md:flex w-1/2 justify-end">
            <button className="flex items-center text-[#3BB77E] text-sm md:text-base shadow-md hover:shadow-lg transition-shadow duration-200 md:pl-0 md:py-1 lg:pl-1 lg:py-2 mx-3 border border-gray-400 hover:bg-gray-200">
              <CiLocationOn className="text-[#838383] text-xl mr-1" />
              <span className="text-[#3BB77E] md:text-xs lg:text-base">Your Location</span>
              <RiArrowDropDownLine className="text-[#838383] text-2xl" />
            </button>
          </div>
        </div>

        {/* Wishlist, Cart, and Account */}
        <div className={`hidden md:flex space-x-6 ${lato.className} text-[#253D4E]`}>
          <p className="flex items-center cursor-pointer">
            <FaRegHeart className="mr-1" />
            Wishlist
          </p>
          <p className="flex items-center cursor-pointer">
            <FiShoppingCart className="mr-1" />
            Cart
          </p>
          <p className="flex items-center cursor-pointer">
            <VscAccount className="mr-1" />
            Account
          </p>
        </div>
      </div>

      {/* Second Row: Navigation and Support */}
      <div className="hidden md:flex justify-between items-center p-4 bg-white shadow-md">
        {/* Browse Categories Button */}
        <div>
          <button className="flex items-center bg-[#3BB77E] text-white p-2 rounded-md">
            <Image
              src="/images/_before.png"
              width={16}
              height={16}
              alt="browse"
              className="mr-1"
            />
            Browse All Categories <RiArrowDropDownLine className="ml-1 text-3xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex space-x-8 text-[#253D4E] ">
            <li className="cursor-pointer hover:text-[#3BB77E]"><Link href="./">Home</Link></li>
            <li className="cursor-pointer hover:text-[#3BB77E]"><Link href="./about">About</Link></li>
            <li className="cursor-pointer hover:text-[#3BB77E]"><Link href="./blog">Blog</Link></li>
            <li className="cursor-pointer hover:text-[#3BB77E]"><Link href="./contact">Contact</Link></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="flex items-center space-x-2">
          <div>
            <Image
              src="/images/headphone.png"
              alt="headphone"
              width={36}
              height={38}
            />
          </div>
          <div>
            <h3 className="text-[#3BB77E] text-xl font-extrabold">
              1900 - 888
            </h3>
            <p className={`${lato.className} text-sm`}>24/7 Support Center</p>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="flex flex-col md:hidden bg-white p-4 shadow-md space-y-4 text-center">
          <ul className="flex flex-col space-y-4 text-[#253D4E]">
            <li className="cursor-pointer hover:text-[#3BB77E]"><Link href="./">Home</Link></li>
            <li className="cursor-pointer hover:text-[#3BB77E]"><Link href="./about">About</Link></li>
            <li className="cursor-pointer hover:text-[#3BB77E]"><Link href="./blog">Blog</Link></li>
            <li className="cursor-pointer hover:text-[#3BB77E]"><Link href="./contact">Contact</Link></li>
          </ul>

          {/* Location Button in Mobile Menu */}
          <div className="flex items-center justify-center">
            <button className="flex items-center text-[#3BB77E] text-sm md:text-base lg:text-lg">
              <CiLocationOn className="text-[#838383] text-2xl" />
              Your Location <RiArrowDropDownLine className="text-[#838383] text-3xl" />
            </button>
          </div>

          {/* Wishlist, Cart, and Account */}
          <div className={`space-y-2 text-[#253D4E] `}>
            <p className="flex items-center cursor-pointer justify-center">
              <VscAccount className="mr-1" />
              Account
            </p>
          </div>

          {/* Support Section */}
          <div className="flex items-center space-x-2 mt-4 justify-center">
            <div>
              <Image
                src="/images/headphone.png"
                alt="headphone"
                width={36}
                height={38}
              />
            </div>
            <div>
              <h3 className="text-[#3BB77E] text-xl font-extrabold">
                1900 - 888
              </h3>
              <p className={`${lato.className} text-sm`}>24/7 Support Center</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
