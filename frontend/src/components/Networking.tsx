import Image from 'next/image'

export default function Networking() {
    return (
        <div>
            <Image
                className="w-full h-full"
                src="/waves.png"
                alt="waves"
                width={0}
                height={0}
            />
        </div>
    )
}