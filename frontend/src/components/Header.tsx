'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';

export default function Header() {  

  //smooth scroll function
  useEffect(() => {
    const smoothScroll = (targetId: string) => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, //Speed = If higher, slower. If lower, faster
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
  }, []); // Empty array ensures that effect is only run on mount

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
        <div className="flex ml-auto mr-8 gap-14 items-center">
          <Link href="/editais" className="group transition duration-300 smooth-scroll text-sm md:text-base lg:text-lg">
            Editais
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </Link>
          <Link href="/#networking" passHref className="group transition duration-300 smooth-scroll text-sm md:text-base lg:text-lg" data-target="networking">
            Network
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </Link>
          <Link href="/#support" passHref className="group transition duration-300 smooth-scroll text-sm md:text-base lg:text-lg" data-target="support">
            Suporte
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </Link>
        </div>
      </header>

      <style jsx>{`
        .group-hover\:max-w-full:hover {
          max-width: 100%;
        }
      `}</style>
    </>
  );
}