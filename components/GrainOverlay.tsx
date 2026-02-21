'use client';

import { useEffect, useRef } from 'react';

export default function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let frame = 0;
    const draw = () => {
      frame++;
      if (frame % 3 !== 0) {
        animRef.current = requestAnimationFrame(draw);
        return;
      }
      const w = canvas.width;
      const h = canvas.height;
      const imageData = ctx.createImageData(w, h);
      const buf = imageData.data;
      for (let i = 0; i < buf.length; i += 4) {
        const v = Math.random() * 30;
        buf[i] = v;
        buf[i + 1] = v;
        buf[i + 2] = v;
        buf[i + 3] = 18;
      }
      ctx.putImageData(imageData, 0, 0);
      animRef.current = requestAnimationFrame(draw);
    };
    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10"
      style={{ mixBlendMode: 'overlay', opacity: 0.6 }}
    />
  );
}
