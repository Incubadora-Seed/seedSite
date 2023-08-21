import Image from "next/image";

export default function WhoWeAre() {
  const contributors = [
    {
        src: "/alessandra-1.jpg",
        alt: "Imagem Alessandra",
        title: "Alessandra Cristina Santos Akkari",
        description: "Engenheira de Produção e Pesquisadora",
        linkedin: "https://www.linkedin.com/in/alessandra-akkari-ph-d-158733b6/",
    },
    {
        src: "/zortea.jpg",
        alt: "Imagem Zortea",
        title: "Rafael Zortea",
      description: "Engenheiro de Ambiente e Pesquisador",
      linkedin: "https://www.linkedin.com/in/rafael-zortea-%E9%82%B9%E5%BF%97%E5%9D%9A-74239948/",
    },
    {
        src: "/rafael.jpg",
        alt: "Imagem Rafael",
        title: "Rafael Rodrigues Macedo",
      description: "Bolsista e Programador",
      linkedin: "https://www.linkedin.com/in/rafael-macedo-656057216/",
    },
    {
        src: "/ronise.jpg",
        alt: "Imagem Ronise",
        title: "Ronise Ferreira dos Santos",
      description: "Doutora em Design e Engenheira de Produção",
      linkedin: "https://www.linkedin.com/in/ronise-ferreira-dos-santos-a69192240/",
    },
    {
        src: "/eduardo.jpg",
        alt: "Imagem Eduardo",
        title: "Eduardo Schmidt Fernandes dos Santos",
      description: "Engenheiro Elétrico e Gestor Empresarial",
      linkedin: "https://www.linkedin.com/in/eduardosfsantos/",
    },
    {
        src: "/sandra.jpg",
        alt: "Imagem Sandra",
        title: "Sandra Veronica Bereta",
      description: "Coordenadora Comercial e Analista de Produto",
      linkedin: "https://www.linkedin.com/in/sandra-bereta/",
    },
    {
        src: "/edilaine.jpg",
        alt: "Imagem Edilaine",
        title: "Edilaine Vieira Lopes",
      description: "Mentora de Inovação e Pesquisadora",
      linkedin: "https://www.linkedin.com/in/edilaine-vieira-lopes-071510128/",
    },
    {
        src: "/valter.jpg",
        alt: "Imagem Valter",
        title: "Valter Lenine Fernandes",
      description: "Chefe do Departamento de Ensino e Pesquisador",
         linkedin: "https://www.linkedin.com/in/valter-lenine-5b13554b/",
    },
    {
        src: "/marta.jpg",
        alt: "Imagem Marta",
        title: "Marta Helena Blank Tessman",
        description: "Diretora Geral e Pesquisadora",
        linkedin: "https://www.linkedin.com/in/marta-tessmann-09858743/",
    }
  ];

  return (
    <div className="text-center">
      <h1 className="text-4xl m-auto font-bold">Quem Somos</h1>
      <div className="grid gap-12 md:grid-cols-1 xl:grid-cols-3 w-full mx-auto my-12 p-4">
        {contributors.map((contributor, index) => (
          <div key={index} className="m-auto text-left flex items-center">
            <div className="flex items-center justify-start">
              <Image
                src={contributor.src}
                alt={contributor.alt}
                width={200}
                height={150}
                className="rounded-full mt-0" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-bold">{contributor.title}</h2>
              <p className="text-left">{contributor.description}</p>
              <div className="flex items-center mt-2">
                <a
                  href={contributor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Image
                    src="/linkedin-logo.png"
                    alt="LinkedIn Image"
                    width={24}
                    height={24}
                    className="mr-2 transition-transform hover:scale-110"
                  />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
