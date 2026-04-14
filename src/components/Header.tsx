"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const MINI_BRACELET_COLORS = [
  "bg-pop-pink",
  "bg-pop-purple",
  "bg-pop-blue",
  "bg-pop-green",
  "bg-pop-yellow",
  "bg-pop-coral",
  "bg-pop-pink",
];

const NAV_ITEMS = [
  { href: "/", label: "Home", color: "bg-pop-pink text-white" },
  { href: "/about", label: "About", color: "bg-pop-purple text-white" },
  { href: "/publications", label: "Pubs", color: "bg-pop-blue text-white" },
  { href: "/media", label: "Media", color: "bg-pop-green text-text-primary" },
  { href: "/teaching", label: "Teach", color: "bg-pop-yellow text-text-primary" },
  { href: "/cv", label: "CV", color: "bg-pop-coral text-white" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [colourParty, setColourParty] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = (e: Event) => {
      const on = (e as CustomEvent).detail;
      setColourParty(on);
    };
    window.addEventListener("colour-party", handler);
    return () => window.removeEventListener("colour-party", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cream/80 border-b border-lavender/50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-2xl">✨</span>
          <div>
            <span className="font-bold text-xl text-text-primary group-hover:text-pop-purple transition-colors block leading-tight">
              Dr Jessica Morley
            </span>
            <div className="flex items-center justify-between w-full mt-1">
              {MINI_BRACELET_COLORS.map((color, i) => (
                <span
                  key={i}
                  className={`inline-block w-2 h-2 rounded-full mini-dot ${color}`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        </Link>

        <nav className={`hidden md:flex items-center gap-2 ${colourParty ? "colour-party" : ""}`}>
          <div className="bracelet-string">
            {NAV_ITEMS.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`bracelet-bead ${item.color} relative z-10 ${
                    isActive
                      ? "ring-2 ring-gold ring-offset-2 ring-offset-cream scale-110"
                      : "hover:brightness-110"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <button
            onClick={toggleTheme}
            className="bracelet-bead bg-gold text-text-primary relative z-10 theme-toggle-bead"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            title={theme === "light" ? "After dark ✦" : "Let there be light ☀"}
          >
            <span className="theme-toggle-icon">
              {theme === "light" ? "🌙" : "☀️"}
            </span>
          </button>
        </nav>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "✦"}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 animated-gradient">
          <div className="flex flex-wrap gap-2 justify-center">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`bracelet-bead ${item.color} ${
                    isActive ? "ring-2 ring-gold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={toggleTheme}
              className="bracelet-bead bg-gold text-text-primary"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
