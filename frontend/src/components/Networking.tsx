import Link from 'next/link';
import Image from 'next/image';

export default function Networking() {
  return (
    <>
    <div className="mt-12 relative w-full h-full">
      <video autoPlay loop className="w-full h-full">
        <source src="/network.mp4" type="video/mp4" />
        Seu navegador não suporta a exibição de vídeos em HTML5.
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold">
          Networking é essencial para o sucesso
        </h2>
        <button className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-8 mt-12 bg-blue-500 rounded-lg bg-purple-500 hover:bg-purple-700 transition duration-300 cursor-pointer">
          <Link href='/network'>
            Conectar-se
          </Link>
        </button>
      </div>
    </div>
      <div className="flex items-center justify-center p-10">
        <div className="flex-1">
            <h2 className="sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
                Engage com outras empresas do Brasil todo
            </h2>
            <p className="sm:text-md md:text-lg lg:text-xl xl:text-2xl text-gray-600">
                Esteja você procurando construir sua comunidade local de startups, interagir com as principais startups
                do sul do Brasil ou investir em startups que estão causando impacto em seu setor, Seed tem esses contatos
                para você se envolver com startups que se alinham aos seus objetivos de negócios.
            </p>
        </div>
        <div className="flex-1">
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
