"use client";

import { useState, useEffect } from "react";

export default function SpeakNowOverlay() {
  const [phase, setPhase] = useState<"waiting" | "visible" | "fading" | "gone">("waiting");

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setPhase("visible");
    }, 10000);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (phase === "visible") {
      const fadeTimer = setTimeout(() => {
        setPhase("fading");
      }, 4000);
      return () => clearTimeout(fadeTimer);
    }
    if (phase === "fading") {
      const removeTimer = setTimeout(() => {
        setPhase("gone");
      }, 800);
      return () => clearTimeout(removeTimer);
    }
  }, [phase]);

  if (phase === "waiting" || phase === "gone") return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        phase === "fading" ? "teapot-fade-out" : "teapot-fade-in"
      }`}
      style={{ backgroundColor: "rgba(255, 248, 240, 0.93)", cursor: "pointer" }}
      onClick={() => setPhase("fading")}
    >
      <div className="flex flex-col items-center text-center px-8">
        <p className="text-lg md:text-xl text-text-light mb-3" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
          and they said...
        </p>
        <p
          className="text-5xl md:text-7xl lg:text-8xl font-bold shimmer-text"
          style={{ lineHeight: 1.1 }}
        >
          speak now
        </p>
        <div className="flex gap-2 mt-6">
          {["bg-pop-pink", "bg-pop-purple", "bg-pop-blue", "bg-pop-green", "bg-pop-yellow", "bg-pop-coral", "bg-pop-pink"].map((color, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${color} mini-dot`}
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
        <p className="mt-6 text-sm text-text-light">click anywhere to continue</p>
      </div>
    </div>
  );
}
