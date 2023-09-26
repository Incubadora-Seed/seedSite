'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Header() {  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //smooth scroll function
  useEffect(() => {
    const smoothScroll = (targetId: any) => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth"
        });
      }
    }

    // Add smooth scrolling to all links
    const links = document.querySelectorAll('.smooth-scroll');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target?.getAttribute('data-target');
        smoothScroll(targetId);
      });
    });
  }, []); 

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white pl-4 flex border-b-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-roxa.png"
            alt="logo-seed"
            className="cursor-pointer"
            width={300}
            height={100}
          />
        </Link>
        <div className="hidden lg:flex ml-auto mr-8 gap-14 items-center">
          <Link href="/editais" className="group transition duration-300 smooth-scroll text-sm sm:text-base md:text-lg lg:text-xl">
            Editais
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </Link>
          <Link href="/#networking" passHref className="group transition duration-300 smooth-scroll text-sm sm:text-base md:text-lg lg:text-xl" data-target="networking">
            Network
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </Link>
          <Link href="/#support" passHref className="group transition duration-300 smooth-scroll text-sm sm:text-base md:text-lg lg:text-xl" data-target="support">
            Suporte
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </Link>
        </div>
        <div className="ml-auto mr-4 lg:hidden">
          <button
            className="text-2xl mt-6 ml-4 mx-right text-black hover:text-purple-500 focus:outline-none"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg mt-2">
              <ul className="py-2 px-4">
                <li>
                <Link href="/editais" passHref
                    onClick={() => setMenuOpen(false)}
                    className="text-sm lg:text-base"
                  >
                      Editais
                  </Link>
                </li>
                <li>
                  <Link href="/#networking" passHref
                    onClick={() => setMenuOpen(false)}
                    className="text-sm lg:text-base"
                    data-target="networking"
                  >
                      Network
                  </Link>
                </li>
                <li>
                <Link href="/#support" passHref
                    onClick={() => setMenuOpen(false)}
                    className="text-sm lg:text-base"
                    data-target="support"
                  >
                      Suporte
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
}