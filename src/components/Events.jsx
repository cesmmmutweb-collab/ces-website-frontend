import React from "react";
import { MdEmojiEvents } from "react-icons/md";

export default function Events() {
  return (
    <div className="min-h-screen md:min-h-0 bg-[#fdf6fb] flex items-center py-12 md:py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full py-5">

        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-10 md:h-[15vh] gap-4 ">
          <div>
            <div className="inline-flex bg-white items-center mb-3 gap-2 border border-[#d5d9ff] text-[#5b56e8] px-4 py-1 rounded-full text-sm font-semibold">
              <MdEmojiEvents />
              EVENTS
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Make Events More Impactful <br /> With Smart Experiences
            </h1>
          </div>

          <p className="text-gray-500 max-w-sm text-sm">
            From seamless coordination to attendee engagement, our events
            transform how people connect.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 md:mt-0 md:gap-6 md:h-[45vh]">
          
          <div className="rounded-xl md:rounded-3xl overflow-hidden h-48 sm:h-56 md:h-full">
            <img
              src="https://images.unsplash.com/photo-1768488801582-3d05e9cd7c14?q=80&w=1170&auto=format&fit=crop"
              alt="event"
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>

          <div className="rounded-xl md:rounded-3xl overflow-hidden h-48 sm:h-56 md:h-full">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
              alt="event"
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-6 md:gap-4 md:h-[28vh]">
          <TemplateImage img="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" />
          <TemplateImage img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" />
          <TemplateImage img="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" />
        </div>

      </div>
    </div>
  );
}

function TemplateImage({ img }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm h-28 sm:h-36 md:h-full">
      <img
        src={img}
        alt="template"
        className="w-full h-full object-cover hover:scale-105 transition duration-300"
      />
    </div>
  );
}
