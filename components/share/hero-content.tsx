"use client";

import React from "react";
import localFont from "next/font/local";
import Rating from "./rating";
import { Default } from "@/lib/default";
import { useCountStore } from "@/lib/store";

// Fontlar
const robotoRegular = localFont({
  src: "../../public/fonts/Roboto-Regular.woff2",
  display: "swap",
});

const robotoBold = localFont({
  src: "../../public/fonts/Roboto-Bold.woff2",
  display: "swap",
});

const HeroContent = () => {
  const { newData } = useCountStore((state) => state);

  const [hours = Default.time[0], minutes = Default.time[1]] =
    newData?.time?.toString().split(".").map((str: string) => Number(str.trim())) || [];

  const title = newData?.title || Default.title;
  const genres = newData?.genres || Default.geners;
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
        <h1 className={`${robotoBold.className} text-white text-4xl font-extrabold`}>
          {title}
        </h1>

        {/* Rating and Time */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 text-yellow-400">
            <Rating rating={rating} />
          </div>
          <span className="text-xs text-white/70">
            {hours}h {minutes}m
          </span>
        </div>

        {/* Overview Link */}
        <a
          href="#"
          className={`${robotoBold.className} text-lg text-blue-500 hover:underline inline-block`}
        >
          Overview
        </a>

        {/* Description */}
        <p className={`${robotoRegular.className} text-base text-white/70 leading-relaxed`}>
          {description.length >= 150? description.slice(0,150) + '...' :description}
        </p>

      </div>
    </div>
  );
};

export default HeroContent;
