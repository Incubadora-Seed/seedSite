import Image from "next/image";

export default function Header() {  
    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-50 bg-white pl-4 flex border-b-4">
                <Image
                    src="/Logotipo-roxo (1).png"
                    alt="logo-incubaspace"
                    width={300}
                    height={100}
                />
                <div className="flex ml-14 gap-14 items-center">
                    <a href="#" className="group transition duration-300">
                        Eventos
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                    </a>
                    <a href="#" className="group transition duration-300">
                        Processos
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                    </a>
                    <a href="#" className="group transition duration-300">
                        Quem Somos
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                    </a>
                    <a href="#" className="group transition duration-300">
                        Networking
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                    </a>
                    <a href="#" className="group transition duration-300">
                        Suporte
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                    </a>
                    <div
                        className="flex bg-sky-500 pb-4 pt-4 pr-16 pl-16 rounded text-white font-bold
                        hover:bg-sky-600 transition duration-300 cursor-pointer"
                    >
                        <a href="http://localhost:3000/login">Log In</a>
                    </div>
                </div>
            </header>
            

        </>
    );
}