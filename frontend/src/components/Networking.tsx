export default function Networking() {
  return (
    <div className="relative w-full h-full">
      <video autoPlay loop className="w-full h-full">
        <source src="/network.mp4" type="video/mp4" />
        Seu navegador não suporta a exibição de vídeos em HTML5.
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold">
          Networking é essencial para o sucesso
        </h2>
        <button className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-4 mt-12 bg-blue-500 rounded-lg bg-purple-500 hover:bg-purple-700 transition duration-300 cursor-pointer">
          Conectar-se
        </button>
      </div>
    </div>
  );
}
