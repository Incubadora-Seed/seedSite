import Image from "next/image";
import Link from "next/link";

export default function LatestEvents() {
    return (
        <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl">
                Últimos Eventos
            </h1>
            <div className="flex justify-center max-w-md">
                <div className="m-auto p-4">
                    <Image
                        src='/evento1.jpg'
                        alt="Descrição da imagem 1"
                        width={500}
                        height={200}
                    />
                    <h2 className="text-xl font-bold">Título da imagem 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, aut neque enim deleniti aliquam rem illo, minima, voluptas officiis ipsam porro? Veritatis ducimus provident in sunt assumenda dolores, odit laudantium.</p>
                </div>
                <div className="m-auto p-4">
                    <Image
                        src='/evento2.jpg'
                        alt="Descrição da imagem 2"
                        width={500}
                        height={200}
                    />
                    <h2 className="text-xl font-bold">Título da imagem 2</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, tempora nesciunt! Aspernatur sint, quisquam natus rerum eos laudantium voluptas provident iusto voluptatibus deserunt quos magni ex delectus maxime ratione officiis.</p>
                </div>
            </div>
            <div className="text-center">
                <Link className="m-auto hover:underline" href=''>
                    Ver todos os eventos
                </Link>
            </div>
        </div>
    );
}
