"use client";

import { useState } from "react";

interface StickerProps {
  src: string;
  alt: string;
  position?: "left" | "right" | "center";
  rotate?: number;
}

export default function Sticker({
  src,
  alt,
  position = "right",
  rotate = 0,
}: StickerProps) {
  const [hovered, setHovered] = useState(false);

  const positionClasses = {
    left: "mr-auto",
    right: "ml-auto",
    center: "mx-auto",
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = src;
    link.download = src.split("/").pop() || "sticker.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`relative inline-block ${positionClasses[position]}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <img
        src={src}
        alt={alt}
        className="w-36 md:w-44 drop-shadow-md transition-transform duration-300 hover:scale-110 hover:drop-shadow-xl cursor-pointer"
        style={{ borderRadius: "12px" }}
      />
      {hovered && (
        <button
          onClick={handleDownload}
          className="absolute bottom-1 right-1 bg-pop-purple text-white text-xs px-2 py-1 rounded-full shadow-md hover:bg-pop-pink transition-colors flex items-center gap-1"
          title="Download sticker"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1v7M3 6l3 3 3-3M2 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Save
        </button>
      )}
    </div>
  );
}
