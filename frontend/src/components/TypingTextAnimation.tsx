'use client'

import { TypeAnimation } from 'react-type-animation';

export default function TypingTextAnimation() {
    return (
        <> 
            <TypeAnimation
                sequence={[
                    'O fracasso aprimora o sucesso',
                    1000,
                    'A persistência vence desafios',
                    1000,
                    'Networking fortalece vinculos',
                    1000,
                    'A sorte favorece os corajosos',
                    1000
                ]}
                wrapper="span"
                speed={10}
                style={{ fontSize: '4rem', display: 'inline-block' , marginLeft: '30vh', marginTop: '50vh', marginBottom: '50vh'}}
                repeat={Infinity}
            />
        </>
    )
}