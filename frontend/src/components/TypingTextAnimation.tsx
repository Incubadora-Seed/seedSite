'use client'

import { TypeAnimation } from 'react-type-animation';

export default function TypingTextAnimation() {
    return (
        <div className='m-auto text-center'> 
            <TypeAnimation
                sequence={[
                    'O fracasso aprimora o sucesso',
                    1000,
                    'A persistência vence desafios',
                    1000,
                    'Networking abre portas',
                    1000,
                    'A sorte favorece os corajosos',
                    1000,
                    'Quer algo que nunca teve? Faça algo que nunca fez',
                    1000
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
                deletionSpeed={50}
                className='mt-[50vh] mb-[50vh] inline-block xl:text-5xl md:text-4xl sm:text-3xl text-2xl'
            />
        </div>
    )
}