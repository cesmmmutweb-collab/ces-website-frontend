import React, { useState } from "react";

export default function TemplateCarousel() {
  const images = [
    "https://images.unsplash.com/photo-1768663319852-d2a2648f3950",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent(current === 0 ? images.length - 1 : current - 1);

  const nextSlide = () =>
    setCurrent(current === images.length - 1 ? 0 : current + 1);

  return (
    <div className=" flex items-center justify-center px-4 py-4 md:py-15">
      <div className="relative max-w-6xl w-full h-[44vh] sm:h-[58vh] md:h-[80vh] rounded-xl md:rounded-3xl overflow-hidden shadow-xl">

        {/* IMAGE */}
        <img
          src={images[current]}
          alt="template"
          className="w-full h-full object-cover transition-all duration-500"
        />

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide} className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-8 h-8 md:w-10 md:h-10 rounded-full shadow flex items-center justify-center text-lg md:text-xl">
          ‹
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide} className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-8 h-8 md:w-10 md:h-10 rounded-full shadow flex items-center justify-center text-lg md:text-xl">
          ›
        </button>
      </div>
    </div>
  );
}
