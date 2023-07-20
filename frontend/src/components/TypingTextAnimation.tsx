'use client'

import { TypeAnimation } from 'react-type-animation';

export default function TypingTextAnimation() {
    return (
            <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'O fracasso aprimora',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'A persistência vence desafios',
                1000,
                'Networking abre portas',
                1000,
                'A sorte favorece os corajosos',
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
        />
    )
}