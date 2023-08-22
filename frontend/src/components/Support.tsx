import Link from "next/link";

export default function Support() {
  return (
    <div className="h-[50vh] px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="mt-16 md:mt-24 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Precisa de suporte ou quer nos deixar uma mensagem?
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-12 md:mt-16">
        <div className="flex justify-center group transition duration-300 text-center">
          <Link href='/formulario' className="cursor-pointer hover:underline text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl line-clamp-3">
            Acesse a página do formulário de contato
          </Link>
        </div>
        <div className="flex justify-center group transition duration-300 text-center">
          <Link href='/faqs' className="cursor-pointer hover:underline text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl line-clamp-3">
            Acesse a página dos nossos FAQs
          </Link>
        </div>
      </div>
    </div>
  );
}
