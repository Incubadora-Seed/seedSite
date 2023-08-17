'use client'

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <Image
            width={300}
            height={100}
            className="h-10 inline"
            src="/logo-roxa.png"
            alt="logo"
          />
        </span>

        <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={toggleMenu}
        >
          <ChevronLeft name={isMenuOpen ? "close" : "menu"} />
        </span>
      </div>

      <ul
        className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
          isMenuOpen ? "opacity-100 top-[80px]" : "opacity-0 top-[-400px]"
        } transition-all ease-in duration-500`}
      >
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            HOME
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            HOME
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            HOME
          </a>
        </li>
        
        <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded">
          Log in
        </button>
        <h2 className=""></h2>
      </ul>
    </nav>
  );
}
