import Link from "next/link"
import Header from "./Header"
import Image from 'next/image'

export default function Editals() {
    return (
        <>
            <Header />
            <div className="flex ms-[20vh] items-end mt-[20vh]">
                <Image
                    src="/editals.png"
                    alt="Editais-image"
                    width={50}
                    height={100}
                    title="Editais"
                />  
                <h1 className="text-xl">
                    Editais
                </h1>
            </div>
        </>
    )
}