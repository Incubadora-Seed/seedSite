import Image from "next/image"

export default function LatestEvents() {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="flex flex-col">
                <h1 className="text-5xl">
                    Últimos Eventos
                </h1>
            </div>
            <div className="flex flex-col-1">
                <Image
                    src={'/evento1.jpg'}
                    className="w-full h-full p-8"
                    width={500}
                    height={200}
                    alt={'Evento 1'}
                />
                <Image
                    src={'/evento2.jpg'}
                    className="w-full h-full p-8"
                    width={500}
                    height={200}
                    alt={'Evento 2'}
                />
            </div>
            <div className="flex mx-auto">
                <span className="px-[40vh]">
                    Descrição do Evento 1
                </span>
                <span className="px-[40vh]">
                    Descrição do Evento 2
                </span>
            </div>
        </div>
    )
}