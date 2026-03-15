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
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const MovieSlider = ({ data, time,scroll,className }: MovieSliderProps) => {
  const { fetchData, count, newDailys } = useCountStore((state) => state);

  const [activeButton, setActiveButton] = useState<number | null>(null);

  // Count movie data once data is available.
  useEffect(() => {
    if (data?.length) {
      count(data);
    }
  }, [data, count]);

  // Handle click on a movie item
  const handleClick = (index: number | null, id?: string) => {
    setActiveButton(index);
    if (id) fetchData?.(id);
  };
  
  return (
    <Swiper
      modules={[Autoplay, Mousewheel, FreeMode]}
      freeMode={true}
      mousewheel={{
        forceToAxis: scroll,
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
      {...(time > 0
        ? {
            autoplay: {
              delay: time,
              disableOnInteraction: false,
            },
          }
        : {})} 
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
            className='cursor-pointer'
          >
            <div
              className={`relative ${className}`}
              onClick={() => handleClick(index, movie.id)}
              onMouseLeave={()=>handleClick(null)}
            >
              {/* Movie Poster */}
              <div className="relative group/poster w-full h-full rounded-xl overflow-hidden shadow-lg ring-1 ring-white/10 hover:ring-2 hover:ring-blue-500 hover:shadow-blue-500/20 transition-all duration-300">
                <Image
                  src={movie.poster_url}
                  alt={movie.title}
                  width={300} 
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/poster:scale-105"
                />

                {/* Overlay when button is active */}
                {activeButton === index && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 backdrop-blur-[2px] flex flex-col items-center justify-center space-y-3 transition-opacity duration-300 opacity-100">
                    <Link href={`/movie/${movie?.id}`}>
                      <Button className="w-36 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg font-bold shadow-lg shadow-blue-600/30 transition-all hover:scale-105">
                        ▶ Watch Trailer
                      </Button>
                    </Link>
                    <Button className="w-36 py-2.5 bg-white/20 hover:bg-white/30 text-white text-sm rounded-lg font-semibold backdrop-blur-md border border-white/10 transition-all hover:scale-105">
                      + Add to List
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MovieSlider;
