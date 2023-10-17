import Link from 'next/link';
import Image from 'next/image';

export default function Networking() {
  return (
    <>
      <div className="mt-12 relative w-full h-screen">
        <video autoPlay loop className="w-full h-full object-cover max-w-full">
          <source src="/net.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h2 className="mt-12 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-4xl font-bold">
            Networking é {}
            <span className='text-purple-400'>
              essencial
            </span>
            {} para o sucesso
          </h2>
          <button className="text-xl sm:text-3xl md:text-4xl lg:text-5xl p-8 mt-12 bg-blue-500 rounded-lg bg-purple-500 hover:bg-purple-700 transition duration-300 cursor-pointer">
            <Link href='/network'>
              Pesquisar
            </Link>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-10">
        <div className="max-w-4xl text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
            Engage com outras empresas incubadas
          </h2>
          <p className="text-md md:text-lg lg:text-xl xl:text-2xl text-gray-600">
            Esteja você procurando construir sua comunidade local de startups, interagir com as principais startups
            incubadas ou investir em startups que estão causando impacto em seu setor, Seed tem esses contatos
            para você se envolver com as empresas que se alinham aos seus objetivos de negócios.
          </p>
        </div>
        <div className="w-full max-w-md">
          <Image
            src="/speaking.png"
            alt="Imagem Responsiva"
            width={800}
            height={800}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}
