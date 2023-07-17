import Image from "next/image";

export default function Header() {  
    return (
        <>
            <header className="flex">
                <Image
                    src="/image-removebg-preview.png"
                    alt="logo-incubaspace"
                    width={300}
                    height={100}
                />
                <div className="flex ml-10 gap-14 items-center">
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
            <div
                className="bg-black w-full h-0.5 mt-0.5"
            />

        </>
    );
}