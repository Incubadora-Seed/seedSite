import Link from "next/link";

export default function Support() {
  return (
    <div className="h-[80vh]">
      <div className="mt-[20vh] text-center">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Precisa de suporte ou quer nos deixar uma mensagem?
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center mt-8 md:mt-10 group transition duration-300">
          <Link href='/formulario' className="cursor-pointer hover:underline text-base sm:text-xl md:text-2xl lg:text-4xl line-clamp-3">
            Acesse a página do formulário de contato
          </Link>
        </div>
        <div className="flex justify-center mt-8 md:mt-10 group transition duration-300">
          <Link href='/faqs' className="cursor-pointer hover:underline text-base sm:text-xl md:text-2xl lg:text-4xl line-clamp-3">
            Acesse a página dos nossos FAQs
          </Link>
        </div>
      </div>
    </div>
  );
}
