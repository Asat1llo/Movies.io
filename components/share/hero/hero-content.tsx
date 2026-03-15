"use client";

import React from "react";
import localFont from "next/font/local";
import { Default } from "@/lib/default";
import { useCountStore } from "@/lib/store";
import Rating from "../slider/rating";

// Fontlar
const robotoRegular = localFont({
  src: "../../../public/fonts/Roboto-Regular.woff2",
  display: "swap",
});

const robotoBold = localFont({
  src: "../../../public/fonts/Roboto-Bold.woff2",
  display: "swap",
});

const HeroContent = () => {
  const { newData } = useCountStore((state) => state);

  const [hours = Default.time[0], minutes = Default.time[1]] =
    newData?.time?.toString().split(".").map((str: string) => Number(str.trim())) || [];

  const title = newData?.title || Default.title;
  const genres = newData?.genres || Default.genres;
  const rating = newData?.rating || Default.rating;
  const description = newData?.description || Default.description;

  return (
    <div className="relative z-10 max-w-7xl px-6 py-10 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-xl space-y-4">
        
        {/* Genres */}
        <p className={`${robotoRegular.className} text-xs text-white/70`}>
          {genres}
        </p>

        {/* Title */}
        <h1 className={`${robotoBold.className} text-white text-5xl sm:text-6xl font-extrabold tracking-tight drop-shadow-lg`}>
          {title}
        </h1>

        {/* Rating and Time */}
        <div className="flex items-center space-x-4 pt-2">
          <div className="flex items-center space-x-1 text-yellow-500 drop-shadow-md">
            <Rating rating={rating} />
          </div>
          <span className="text-sm font-medium text-white/90 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
            {hours}h {minutes}m
          </span>
        </div>

        {/* Description */}
        <p className={`${robotoRegular.className} text-lg text-white/80 leading-relaxed py-4 max-w-lg drop-shadow-md`}>
          {description.length >= 150? description.slice(0,150) + '...' :description}
        </p>
        
        {/* Call to Actions */}
        <div className="flex space-x-4 pt-2">
          <a
            href={`/movie/${newData?.id || '1'}`}
            className={`${robotoBold.className} px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] hover:-translate-y-0.5`}
          >
            Overview
          </a>
          <button className={`${robotoBold.className} px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/40`}>
            Add to List
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroContent;
