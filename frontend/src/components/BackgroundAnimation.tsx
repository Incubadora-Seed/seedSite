'use client'

import React, { useRef, useEffect } from 'react';
import '../styles/animation.css'

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    let t = 0;

    const col = (x: number, y: number, r: number, g: number, b: number) => {
      if (!ctx) return;
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(x, y, 1, 1);
    };

    const R = (x: number, y: number, t: number) => {
      return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
    };

    const G = (x: number, y: number, t: number) => {
      return 0;
    };

    const B = (x: number, y: number, t: number) => {
      return Math.floor(
        192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)
      );
    };

    const run = () => {
      if (!ctx) return;

      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }

      t = t + 0.02;
      window.requestAnimationFrame(run);
    };

    run();
  }, []);

  return (
    <div className='relative'>
      <canvas
        className=''
        width={20}
        height='10%'
        ref={canvasRef}
        id='canvas'
      />
    </div>
  );
};

export default BackgroundAnimation;