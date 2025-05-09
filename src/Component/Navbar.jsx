import React from 'react'
import { FaArrowRight, FaCode, FaDollarSign } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { IoIosRocket } from 'react-icons/io';

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between container mx-auto py-4 items-center">
        {/* logo */}
        <div>
          <h2>
            <a href="/" className="text-4xl font-bold">
              rune
            </a>
          </h2>
        </div>
        {/* menu icon */}
        <div className="flex gap-8 text-3xl bg-gray-400 px-6 py-2 rounded-full text-white">
          <HiHome />
          <FaCode />
          <IoIosRocket />
          <FaDollarSign />
        </div>
        {/* button */}
        <div className="flex gap-2">
          <button className="text-3xl font-bold bg-black text-white py-2 px-4 rounded-xl">
            <a href="/">start</a>
          </button>
          <button className="text-2xl font-bold bg-black text-white py-2 px-6 rounded-xl">
            <FaArrowRight className="rotate-320 hover:rotate-360 duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar