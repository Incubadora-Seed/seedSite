import Image from "next/image";
import Link from "next/link";

export default function Header() {  
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
                <div className="flex ml-auto mr-4 gap-14 items-center">
                    <Link href="#" className="group transition duration-300">
                        Eventos
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                    </Link>
                    <Link href="/editais" className="group transition duration-300">
                        Editais
                         <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                    </Link>
                    <Link href="#" className="group transition duration-300">
                        Network
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                    </Link>
                    <Link href="#" className="group transition duration-300">
                        Suporte
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                    </Link>
                    <Link 
                        href="/login"
                        className="flex bg-purple-500 pb-4 pt-4 pr-16 pl-16 rounded text-white font-bold
                        hover:bg-purple-700 transition duration-300 cursor-pointer"
                    >
                        Log In
                    </Link>
                </div>
            </header>
        </>
    );
}