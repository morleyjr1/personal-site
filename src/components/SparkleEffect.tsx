"use client";

import { useEffect, useState, useCallback } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

const SPARKLE_COLORS = ["#FFD700", "#F15BB5", "#9B5DE5", "#00BBF9", "#FEE440", "#00F5D4"];

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function SparkleEffect() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const createSparkle = useCallback((x: number, y: number): Sparkle => {
    return {
      id: Date.now() + Math.random(),
      x: x + randomBetween(-30, 30),
      y: y + randomBetween(-30, 30),
      size: randomBetween(8, 20),
      color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
      delay: randomBetween(0, 0.5),
    };
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 80) return; // Throttle
      lastTime = now;

      const newSparkle = createSparkle(e.clientX, e.clientY);
      setSparkles((prev) => [...prev.slice(-15), newSparkle]);

      // Remove sparkle after animation
      timeoutId = setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, 1500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [createSparkle]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {sparkles.map((sparkle) => (
        <svg
          key={sparkle.id}
          className="sparkle-star absolute"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            animationDelay: `${sparkle.delay}s`,
          }}
          viewBox="0 0 24 24"
          fill={sparkle.color}
        >
          <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
        </svg>
      ))}
    </div>
  );
}
