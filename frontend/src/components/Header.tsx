import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';

export default function Header() {  

  useEffect(() => {
    // Função para rolar suavemente para a seção correspondente
    const smoothScroll = (targetId: string) => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Ajuste o valor conforme necessário
          behavior: "smooth"
        });
      }
    }

    // Adiciona o evento de clique aos links
    const links = document.querySelectorAll('.smooth-scroll');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.currentTarget?.getAttribute('data-target');
        if (targetId) {
          smoothScroll(targetId);
        }
      });
    });
  }, []); // Executa este efeito apenas uma vez

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
          <Link href="#" className="group transition duration-300 smooth-scroll" data-target="whoWeAre">
            Eventos
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </Link>
          <Link href="/editais" className="group transition duration-300 smooth-scroll" data-target="networking">
            Editais
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </Link>
          <Link href="#" className="group transition duration-300 smooth-scroll" data-target="support">
            Network
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </Link>
          <Link href="#" className="group transition duration-300 smooth-scroll" data-target="support">
            Suporte
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </Link>
        </div>
      </header>
    </>
  );
}
