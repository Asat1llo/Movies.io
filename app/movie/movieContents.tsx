"use client";

import { useFetch } from '@/lib/store';
import { useEffect } from 'react';
import localFont from "next/font/local";
import { Loader, MovieSlider } from '@/components/share';

const bold = localFont({
  src: '../../public/fonts/Roboto-Bold.woff2', 
});

const MovieContents = () => {
  const { fetch, filtredTop, filtredPas,error,loading } = useFetch((state) => state);

  useEffect(() => {
    const ger = "All"
    fetch(ger); 
  }, [fetch]);



  return (
    <div className="bg-gradient-to-r from-[#000000c0] to-[#1c1c1c] py-10 px-4 space-y-16">
      {
        loading ? (<Loader/>) : error ? (<p>Error: {error}</p> ):      
         (
          <>
           <div className='-mt-52'>
          <p className={`${bold.className}  relative  max-w-42 text-white text-2xl font-bold mb-4 border-b-2 border-blue-400`}>
            Top Picks
          </p>
          <MovieSlider
            data={filtredTop}
            time={0}
            className="relative group w-full h-60 rounded-lg overflow-hidden"
            />
        </div>
        
        <div>
          <p className={`${bold.className}  max-w-42 text-white text-2xl font-bold mb-4 border-b-2 border-blue-400`}>
            Other Picks
          </p>
          <MovieSlider
            data={filtredPas}
            time={300}
            className="relative group w-full h-[512px] rounded-lg overflow-hidden"
            />
           </div>
            </>
        )
      }
    </div>
     
  );
};

export default MovieContents;
