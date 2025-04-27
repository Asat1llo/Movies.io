'use client';

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css";
import 'swiper/css/free-mode';
import 'swiper/css/mousewheel';
import Link from "next/link";
import { useCountStore } from "@/lib/store";
import { MovieSliderProps } from "@/types/props";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const MovieSlider = ({data,className}:MovieSliderProps) => {
  const { fetchData, count,  newDailys } = useCountStore((state) => state);

  const [activeButton,setActiveButton ]= useState<number | null>(null);

   
  useEffect(() => {
    if (data?.length) {
      count(data);
    }
  }, [data, count]);

  const handleClik = (index: number, id: string) => {
    setActiveButton(index); 
    fetchData?.(id); 
  };

  return (
    <Swiper
      modules={[Autoplay,Mousewheel,FreeMode]}
      freeMode={true}
      mousewheel={{
        forceToAxis: true,
        sensitivity:0.6
      }}
      spaceBetween={10}
      slidesPerView={1}
      speed={1000}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      className="w-full"
    >
      {data?.map((movie, index) => {
        const delay = newDailys[index];

        return (
          <SwiperSlide
            key={movie.id} 
            {...(delay ? { "data-swiper-autoplay": delay } : {})}
          >
            < div
              className={` ${className}`}
              onClick={() => handleClik(index, movie.id)}
            >
              <img
                src={movie.poster_url}
                alt={movie.title}
                className="w-full h-full object-cover rounded-lg border-2 border-yellow-500 transition duration-300"
              />

              {activeButton === index && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center space-x-4 transition-all duration-500 ease-in-out">
                  <Link href={`/movie/${movie.id}`}>
                    <button className="px-4 py-2 bg-yellow-500 text-black text-sm rounded-md font-semibold hover:bg-yellow-600 transition duration-300 cursor-pointer">
                      ▶ Watch
                    </button>
                  </Link>
                  <button className="px-4 py-2 bg-white/20 backdrop-blur text-white text-sm rounded-md font-semibold hover:bg-white/30 transition duration-300 cursor-pointer">
                    ❤️ Add to Favorites
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MovieSlider;
