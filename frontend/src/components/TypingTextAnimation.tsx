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
                    1000
                ]}
                wrapper="span"
                speed={10}
                style={{
                    fontSize: '3rem',
                    display: 'inline-block',
                    marginTop: '50vh',
                    marginBottom: '50vh'
                }}
                repeat={Infinity}
                className=''
            />
        </div>
    )
}