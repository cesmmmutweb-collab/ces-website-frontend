// Team.js
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiLinkedinFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";



const teamMembers = [
  {
    name: "Davis Bator",
    role: "CEO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80",
    linkedin: "#",
  },
  {
    name: "Davis Bator",
    role: "CEO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80",
    linkedin: "#",
  },
  {
    name: "Gustavo Kenter",
    role: "CTO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80",
    linkedin: "#",
  },
  {
    name: "Alfonso Donin",
    role: "Chief Commercial Officer",
    image:
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80",
    linkedin: "#",
  },
  {
    name: "Jakob Botosh",
    role: "Chief Financial Officer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80",
    linkedin: "#",
  },
  {
    name: "Davis Bator",
    role: "CEO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80",
    linkedin: "#",
  },
  {
    name: "Gustavo Kenter",
    role: "CTO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80",
    linkedin: "#",
  },
  {
    name: "Alfonso Donin",
    role: "Chief Commercial Officer",
    image:
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80",
    linkedin: "#",
  },
  {
    name: "Jakob Botosh",
    role: "Chief Financial Officer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80",
    linkedin: "#",
  },
  {
    name: "Davis Bator",
    role: "CEO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80",
    linkedin: "#",
  },
  {
    name: "Gustavo Kenter",
    role: "CTO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80",
    linkedin: "#",
  },
  {
    name: "Davis Bator",
    role: "CEO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80",
    linkedin: "#",
  },
  {
    name: "Davis Bator",
    role: "CEO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80",
    linkedin: "#",
  },
  {
    name: "Gustavo Kenter",
    role: "CTO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80",
    linkedin: "#",
  },
  {
    name: "Alfonso Donin",
    role: "Chief Commercial Officer",
    image:
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80",
    linkedin: "#",
  },
  {
    name: "Jakob Botosh",
    role: "Chief Financial Officer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80",
    linkedin: "#",
  },
  {
    name: "Davis Bator",
    role: "CEO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80",
    linkedin: "#",
  },
  {
    name: "Gustavo Kenter",
    role: "CTO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80",
    linkedin: "#",
  },
  {
    name: "Alfonso Donin",
    role: "Chief Commercial Officer",
    image:
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80",
    linkedin: "#",
  },
  {
    name: "Jakob Botosh",
    role: "Chief Financial Officer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80",
    linkedin: "#",
  },
  {
    name: "Davis Bator",
    role: "CEO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80",
    linkedin: "#",
  },
  {
    name: "Gustavo Kenter",
    role: "CTO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80",
    linkedin: "#",
  },

];

const useCardsPerSlide = () => {
  const [cards, setCards] = useState(1);

  const updateCards = () => {
    if (window.innerWidth >= 1024) setCards(8);
    else if (window.innerWidth >= 768) setCards(6);
    else setCards(1);
  };

  useEffect(() => {
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  return cards;
};

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 w-full h-full flex flex-col">
      <div className="w-full h-48 bg-[#f6f8ff] rounded-xl overflow-hidden flex justify-center">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover object-top"
        />
      </div>

    
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="font-montserrat font-semibold text-gray-900 text-lg">
            {member.name}
          </h3>
          <p className="font-roboto text-gray-500 text-sm">
            {member.role}
          </p>
        </div>

        
          <Link
            onClick={(e) => {
              e.preventDefault();
              window.open(member.linkedin, "_blank");
            }}
          >
            <RiLinkedinFill className="text-gray-900 text-3xl hover:text-black cursor-pointer p-1 border border-1 rounded-full" />
          </Link>

        
      </div>


    </div>
  );
};

const Team = () => {
  const cardsPerSlide = useCardsPerSlide();

  const chunkedSlides = Array.from(
    { length: Math.ceil(teamMembers.length / cardsPerSlide) },
    (_, i) => teamMembers.slice(i * cardsPerSlide, i * cardsPerSlide + cardsPerSlide)
  );

  return (
    <section className="w-full py-7 md:py-20 px-6 md:px-20">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 border border-[#d5d9ff] text-[#5b56e8] px-4 py-1 rounded-full font-satoshi text-sm font-semibold">
          <HiMiniUserGroup />
          OUR TEAM
        </div>

        <h1 className="text-3xl md:text-5xl font-satoshi font-bold mt-5">
          The People Behind The Magic
        </h1>

        <p className="font-roboto text-gray-500 max-w-2xl mx-auto mt-3">
          A forward-thinking team of developers, designers, and AI enthusiasts shaping ideas into real-world technology.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="custom-prev">‹</div>
        <div className="custom-next">›</div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          className="pb-16 bg-violet-100 rounded-2xl  "
        >
          {chunkedSlides.map((group, idx) => (
            <SwiperSlide key={idx}>
              <div className={`grid gap-8 justify-items-center
                   ${cardsPerSlide === 1 ? "grid-cols-1" : ""}
                   ${cardsPerSlide === 6 ? "grid-cols-3 md:grid-cols-3" : ""}
                    ${cardsPerSlide === 8 ? "grid-cols-4 lg:grid-cols-4" : ""}
                `}>
                {group.map((member, i) => (
                  <TeamMemberCard key={i} member={member} />
                ))}
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </section>
  );
};


export default Team;
