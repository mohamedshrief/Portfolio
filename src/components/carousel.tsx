import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import { experiences } from "@/Data/data";
import ExperienceCard from "./ExperienceCard";

// Swiper styles (you can keep them here or import them once in index.css / main.tsx)
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

interface Slide {
  id: string;
  title?: string;
  subtitle?: string;
  img?: string;
  bg?: string; // optional inline background (css value)
  content?: React.ReactNode;
}

interface VerticalCarouselProps {
  slides?: Slide[];
  loop?: boolean;
  heightClass?: string; // tailwind height class, e.g. 'h-screen' or 'h-[600px]'
}

export default function VerticalCarousel({
  // loop = true,
  heightClass = "h-[700px]",
}: VerticalCarouselProps) {
  const [swiperInstance, setSwiperInstance] =
    React.useState<SwiperClass | null>(null);

  return (
    <div
      className={`relative w-full ${heightClass} select-none overflow-hidden rounded-[20px]`}
    >
      <div className="absolute inset-0 rounded-[20px] p-[4px] bg-gradient-to-b from-cyan-600 via-cyan-700 to-violet-700 shadow-[0_0_30px_#FFD700]">
        <div className="absolute inset-[4px] bg-gradient-to-b from-[#fff9e6]/20 to-[#000]/60 rounded-[16px]" />
      </div>
      <Swiper
        direction="vertical"
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        onSwiper={setSwiperInstance}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        mousewheel={{ forceToAxis: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        // loop={loop}
        className="w-full h-full absolute inset-0"
      >
        {experiences.map((exp, index) => (
          <SwiperSlide key={exp.id}>
            <div className="flex items-center justify-center w-full h-full px-4 md:px-8">
              <ExperienceCard exp={exp} index={index} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom vertical controls (up / down) */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-30">
        <button
          type="button"
          onClick={() => swiperInstance?.slidePrev()}
          aria-label="السابق"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 shadow-lg hover:scale-105 transition-transform"
        >
          {/* Up arrow SVG */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 15L12 9L18 15"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => swiperInstance?.slideNext()}
          aria-label="التالى"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 shadow-lg hover:scale-105 transition-transform"
        >
          {/* Down arrow SVG */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 9L12 15L6 9"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Small hint/keyboard help (optional) */}
      <div className="absolute left-4 bottom-4 text-xs text-white/90 z-20">
        <div>Use mouse wheel / touch / ↑ ↓ / pagination</div>
      </div>
    </div>
  );
}
