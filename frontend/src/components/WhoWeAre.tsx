import Image from "next/image";

export default function WhoWeAre() {
  const images = [
    {
        src: "/alessandra-1.jpg",
        alt: "Imagem Alessandra",
        title: "Alessandra Cristina Santos Akkari",
        description: "Engenheira de Produção e Pesquisadora",
    },
    {
        src: "/zortea.jpg",
        alt: "Imagem Zortea",
        title: "Rafael Zortea",
        description: "Engenheiro de Ambiente e Pesquisador",
    },
    {
        src: "/rafael.jpg",
        alt: "Imagem Rafael",
        title: "Rafael Rodrigues Macedo",
        description: "Bolsista e Programador",
    },
    {
        src: "/ronise.jpg",
        alt: "Imagem Ronise",
        title: "Ronise Ferreira dos Santos",
        description: "Doutora em Design e Engenheira de Produção",
    },
    {
        src: "/eduardo.jpg",
        alt: "Imagem Eduardo",
        title: "Eduardo Schmidt Fernandes dos Santos",
        description: "Engenheiro Elétrico e Gestor Empresarial",
    },
    {
        src: "/sandra.jpg",
        alt: "Imagem Sandra",
        title: "Sandra Veronica Bereta",
        description: "Coordenadora Comercial e Analista de Produto",
    },
    {
        src: "/edilaine.jpg",
        alt: "Imagem Edilaine",
        title: "Edilaine Vieira Lopes",
        description: "Mentora de Inovação e Pesquisadora",
    },
    {
        src: "/valter.jpg",
        alt: "Imagem Valter",
        title: "Valter Lenine Fernandes",
        description: "Chefe do Departamento de Ensino e Pesquisador",
    },
    {
        src: "/marta.jpg",
        alt: "Imagem Marta",
        title: "Marta Helena Blank Tessman",
        description: "Diretora Geral e Pesquisadora",
    }
  ];

  return (
    <div className="text-center">
      <h1 className="text-4xl m-auto">Quem Somos</h1>
      <div className="grid gap-12 grid-cols-3 w-full mx-auto bg-gray-100 p-4">
        {images.map((image, index) => (
          <div key={index} className="m-auto text-center">
            <div className="flex items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={150}
                className="rounded-full"
              />
            </div>
            <h2 className="text-xl font-bold">{image.title}</h2>
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
