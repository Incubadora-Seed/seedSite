import Image from 'next/image'

export default function TargetHit() {
    return (
        <div className="inline-block">
            <div>
                <Image
                    width={400}
                    height={400}
                    src='/target-purple.png'
                    alt='target-image'
                />
            </div>
            <div
                className='inline-block'>
                <h1
                    className='text-6xl font-bold text-left'>
                    Escolha Seed e Acerte no Alvo
                </h1>  
            </div>
        </div>
    )
}