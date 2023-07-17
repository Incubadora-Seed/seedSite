import Image from "next/image";

export default function Header() {  
    return (
        <header className="flex flex-col">
            <Image
                src="/../assets/logo.png"
                alt="logo-incubaspace"
                width={300}
                height={100}
            />
            <div className="flex gap-16 items-center">
                <a
                    href="#events-section"
                    className="flex items-center no-underline "
                >
                    Eventos
                </a>
                <a
                    href="#processes-section"
                    className="no-underline"
                >
                    Processos
                </a>
                <a
                    href="#about-section"
                    className="no-underline"
                >
                    Quem Somos</a>
                <a
                    href="#network-section"
                    className="no-underline">Networking</a>
                <a
                    href="#support-section"
                    className="no-underline"
                >
                    Suporte
                </a>
            </div>
        </header>
    );
}
