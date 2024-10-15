import React, { useEffect, useRef, useState, useCallback } from "react";
import Button from "./Button";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [animationEnabled, setAnimationEnabled] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = 500;
    }
    resizeCanvas();

    let gradientOffset = 0;
    let animationFrameId: number;

    function animate() {
      resizeCanvas();

      gradientOffset += 0.0005;
      if (gradientOffset > 1) gradientOffset = 0;

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(
        0,
        `hsl(200, 70%, ${50 + 20 * Math.sin(gradientOffset * Math.PI * 2)}%)`
      );
      gradient.addColorStop(
        1,
        `hsl(160, 70%, ${
          50 + 20 * Math.sin((gradientOffset + 0.5) * Math.PI * 2)
        }%)`
      );

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", resizeCanvas);
  }, []);

  const handleToggleAnimation = () => {
    setAnimationEnabled((prev) => !prev);
  };

  return (
    <div className="relative w-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        onClick={handleToggleAnimation}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-[500px] text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Welcome to Our Store
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center">
          Discover amazing products at great prices
        </p>
        <Button size="large">Shop Now</Button>
      </div>
    </div>
  );
}
