"use client";

import { useEffect, useState, useCallback } from "react";

const KONAMI_CODE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "KeyB", "KeyA",
];

const TAYLOR_LYRICS = [
  "It's me, hi, I'm the problem, it's me",
  "Long story short, I survived",
  "In my era",
  "We never go out of style",
  "Shake it off, shake it off",
  "I'm a nightmare dressed like a daydream",
  "Band-aids don't fix bullet holes",
  "This is a new year, a new beginning",
  "You need to calm down",
  "Fearless",
  "We are never ever getting back together",
  "Look what you made me do",
  "I knew you were trouble when you walked in",
  "Welcome to New York",
  "Everything has changed",
];

const BRACELET_COLORS = [
  "#9B5DE5", "#F15BB5", "#FEE440", "#00BBF9",
  "#00F5D4", "#FF6F61", "#FFD700", "#E8D5F5",
  "#FFD6E0", "#C5F0E0",
];

const BRACELET_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ♡✦★♪".split("");

interface FallingBead {
  id: number;
  x: number;
  letter: string;
  color: string;
  delay: number;
  duration: number;
  size: number;
  wobble: number;
}

export default function KonamiEasterEgg() {
  const [triggered, setTriggered] = useState(false);
  const [inputIndex, setInputIndex] = useState(0);
  const [lyric, setLyric] = useState("");
  const [beads, setBeads] = useState<FallingBead[]>([]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (triggered) return;

      if (e.code === KONAMI_CODE[inputIndex]) {
        const next = inputIndex + 1;
        if (next === KONAMI_CODE.length) {
          setTriggered(true);
          setInputIndex(0);
        } else {
          setInputIndex(next);
        }
      } else {
        setInputIndex(e.code === KONAMI_CODE[0] ? 1 : 0);
      }
    },
    [inputIndex, triggered]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (!triggered) return;

    // Pick a random lyric
    setLyric(TAYLOR_LYRICS[Math.floor(Math.random() * TAYLOR_LYRICS.length)]);

    // Generate falling beads
    const newBeads: FallingBead[] = [];
    for (let i = 0; i < 60; i++) {
      newBeads.push({
        id: i,
        x: Math.random() * 100,
        letter: BRACELET_LETTERS[Math.floor(Math.random() * BRACELET_LETTERS.length)],
        color: BRACELET_COLORS[Math.floor(Math.random() * BRACELET_COLORS.length)],
        delay: Math.random() * 2,
        duration: 2.5 + Math.random() * 2,
        size: 24 + Math.random() * 16,
        wobble: (Math.random() - 0.5) * 40,
      });
    }
    setBeads(newBeads);

    // Auto-dismiss after 5 seconds
    const timer = setTimeout(() => {
      setTriggered(false);
      setBeads([]);
    }, 5500);
    return () => clearTimeout(timer);
  }, [triggered]);

  if (!triggered) return null;

  return (
    <div
      className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
      style={{ perspective: "500px" }}
    >
      {/* Falling bracelet beads */}
      {beads.map((bead) => (
        <div
          key={bead.id}
          className="absolute rounded-full flex items-center justify-center font-bold text-white shadow-lg"
          style={{
            left: `${bead.x}%`,
            top: "-50px",
            width: `${bead.size}px`,
            height: `${bead.size}px`,
            backgroundColor: bead.color,
            fontSize: `${bead.size * 0.45}px`,
            animation: `bead-fall ${bead.duration}s ease-in ${bead.delay}s forwards`,
            "--wobble": `${bead.wobble}px`,
          } as React.CSSProperties}
        >
          {bead.letter}
        </div>
      ))}

      {/* Lyric overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="text-center px-8 py-6 rounded-2xl max-w-lg"
          style={{
            animation: "lyric-appear 0.8s ease-out 0.5s both",
            background: "rgba(155, 93, 229, 0.9)",
            backdropFilter: "blur(10px)",
          }}
        >
          <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
            &ldquo;{lyric}&rdquo;
          </p>
          <p className="text-sm text-white/70 mt-2">— Taylor Swift 🎸</p>
        </div>
      </div>
    </div>
  );
}
