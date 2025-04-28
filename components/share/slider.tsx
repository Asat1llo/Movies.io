'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/mousewheel';
import Link from 'next/link';
import { useCountStore } from '@/lib/store';
import { MovieSliderProps } from '@/types/props';

const MovieSlider = ({ data, time,className }: MovieSliderProps) => {
  const { fetchData, count, newDailys } = useCountStore((state) => state);

  const [activeButton, setActiveButton] = useState<number | null>(null);

  // Count movie data once data is available.
  useEffect(() => {
    if (data?.length) {
      count(data);
    }
  }, [data, count]);

  // Handle click on a movie item
  const handleClick = (index: number, id: string) => {
    setActiveButton(index); 
    fetchData?.(id); 
  };

  return (
    <Swiper
      modules={[Autoplay, Mousewheel, FreeMode]}
      freeMode={true}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 0.7,
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
        delay: time,
        disableOnInteraction: false,
      }}
      loop
      loopAdditionalSlides={3}
      className="w-full"
    >
      {data?.map((movie, index) => {
        const delay = newDailys[index];

        return (
          <SwiperSlide
            key={movie.id}
            {...(delay ? { 'data-swiper-autoplay': delay } : {})}
          >
            <div
              className={`relative ${className}`}
              onMouseEnter={() => handleClick(index, movie.id)}
            >
              {/* Movie Poster */}
              <img
                src={movie.poster_url}
                alt={movie.title}
                className="w-full h-full object-cover rounded-lg border-2 border-yellow-500 transition duration-300 ease-in-out"
              />

              {/* Overlay when button is active */}
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
