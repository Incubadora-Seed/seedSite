import React from "react";
import Footer from "@/components/Footer";
import Header from "../../components/Header";
import Image from "next/image";

export default function ObrigadoPage() {
    return (
        <div className="flex flex-col min-h-screen">

            <Header />

            <section className="flex-1 flex flex-col justify-center items-center p-4 text-center">
                <Image
                    src="/correct.png"
                    alt="correct-image"
                    width={300}
                    height={100}
                />
                <h1 className="text-4xl md:text-6xl mt-6 font-bold">
                    Obrigado por entrar em contato!
                </h1>
                <h2 className="text-3xl md:text-5xl mt-4">
                    Responderemos o mais rápido possível.
                </h2>
            </section>

            <Footer />
            
        </div>
    );
}
