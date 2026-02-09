
import React from "react";
import { RiLinkedinFill } from "react-icons/ri";
import { HiMiniUserGroup } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";

const teamMembers = [
  {
    name: "Davis Bator",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80",
    linkedin: "#",
  },
  {
    name: "Gustavo Kenter",
    role: "CTO & Co-Founder",
    image: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80",
    linkedin: "#",
  },
  {
    name: "Alfonso Donin",
    role: "Chief Commercial Officer",
    image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80",
    linkedin: "#",
  },
  {
    name: "Jakob Botosh",
    role: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80",
    linkedin: "#",
  },
];

const TeamMemberCard = ({ member }) => (
  <div className="
    bg-white rounded-2xl shadow-sm hover:shadow-md transition-all
    border border-gray-100
    p-3 sm:p-4
    flex flex-col
    w-full sm:w-[80%] md:w-[32%] lg:w-[23%]
  ">
  
    <div className="
      w-full
      h-40 sm:h-56 md:h-60
      bg-[#f6f8ff]
      rounded-xl overflow-hidden
      flex justify-center
    ">
      <img
        src={member.image}
        alt={member.name}
        className="h-full w-full object-cover object-top"
      />
    </div>

    <div className="mt-3 sm:mt-4 flex items-center justify-between">
      <div>
        <h3 className="font-semibold text-gray-900 text-xs sm:text-lg">
          {member.name}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm">
          {member.role}
        </p>
      </div>

      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-gray-900
          text-l sm:text-3xl
          hover:text-black
          cursor-pointer
          p-1
          border rounded-full
        "
      >
        <RiLinkedinFill />
      </a>
    </div>
  </div>
);

const TeamMembers = () => {
  return (
    <section className="relative w-full py-14 md:py-20 px-4 sm:px-6 md:px-20 flex flex-col items-center justify-center overflow-hidden">

      <div className="absolute inset-0 -z-10 pointer-events-none hidden md:block">
        <div className="absolute top-8 left-10 w-3 h-3 bg-[#cfe1ff] rounded-full"></div>
        <div className="absolute top-24 right-16 w-3 h-3 bg-[#ffd978] rounded-full"></div>
        <div className="absolute top-[240px] left-0 w-20 h-14 bg-[#d7e8ff] rounded-r-[80px]"></div>
        <div className="absolute top-[180px] right-10 w-20 h-10 bg-[#ffce4d] rounded-tl-full"></div>
        <div className="absolute top-[360px] right-8 w-3 h-3 bg-[#e5d2ff] rounded-full"></div>
        <div className="absolute top-[520px] left-10 w-14 h-14 bg-[#ffd45b] rounded-full border-8 border-white"></div>
        <div className="absolute bottom-6 right-6 w-14 h-14 bg-[#ffce4d] rounded-full border-8 border-white rotate-45"></div>
      </div>

      <div className="text-center mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 border border-[#d5d9ff] text-[#5b56e8] px-4 py-1 rounded-full text-sm font-semibold">
          <HiMiniUserGroup />
          OUR TEAM
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-5">
          The People Behind The Magic
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto mt-4">
          A passionate team of engineers, designers, and AI specialists committed
          to reshaping how modern businesses operate.
        </p>
      </div>

      
      <div className="relative w-full max-w-7xl flex flex-col gap-8 z-10">

      
        <div className="grid grid-cols-2 gap-6 md:flex md:items-center md:justify-center lg:justify-start lg:gap-10">
          <TeamMemberCard member={teamMembers[0]} />
          <TeamMemberCard member={teamMembers[1]} />

        
                    <div className=" hidden relative flex md:flex flex-1 h-24 md:h-64 opacity-40 md:opacity-100">
    
    <span className="absolute w-3 h-3 bg-purple-500 rounded-full opacity-70 animate-bubble" style={{ top: '10%', left: '20%' }}></span>
    <span className="absolute w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bubble2" style={{ top: '50%', left: '60%' }}></span>
    <span className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-bubble" style={{ top: '30%', left: '40%' }}></span>
    <span className="absolute w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-bubble2" style={{ top: '70%', left: '30%' }}></span>
    <span className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-50 animate-bubble" style={{ top: '20%', left: '70%' }}></span>
  </div>
        </div>

        
        <div className="grid grid-cols-2 gap-6 md:flex md:items-center md:justify-center lg:justify-start lg:gap-10">
                    <div className="hidden relative flex md:flex flex-1 h-24 md:h-64 opacity-40 md:opacity-100">
    
    <span className="absolute w-3 h-3 bg-purple-500 rounded-full opacity-70 animate-bubble" style={{ top: '10%', left: '20%' }}></span>
    <span className="absolute w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bubble2" style={{ top: '50%', left: '60%' }}></span>
    <span className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-bubble" style={{ top: '30%', left: '40%' }}></span>
    <span className="absolute w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-bubble2" style={{ top: '70%', left: '30%' }}></span>
    <span className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-50 animate-bubble" style={{ top: '20%', left: '70%' }}></span>
  </div>

          <TeamMemberCard member={teamMembers[2]} />
          <TeamMemberCard member={teamMembers[3]} />
        </div>

      </div>

      
      <Link
        to="/team"
        className="group inline-flex items-center mt-10 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-xl shadow-lg hover:from-purple-600 hover:to-purple-800 transition font-medium z-10"
      >
        View Full Team
        <HiOutlineChevronRight className="ml-2 w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1" />
      </Link>

    </section>
  );
};

export default TeamMembers;
