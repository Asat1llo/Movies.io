'use client';

import { useEffect } from 'react';
import { useFetch } from '@/lib/store';
import { Loade, MovieSlider } from '@/components/share';
import localFont from 'next/font/local';

const bold = localFont({
  src: '../../public/fonts/Roboto-Bold.woff2',
});

const MovieContents = () => {
  const { fetch, filtredTop, filtredPas, error, loading } = useFetch((state) => state);

  useEffect(() => {
    fetch('All');
  }, [fetch]);

  if (loading) {
    return (
      <div className="bg-black flex items-center justify-center h-[60vh]">
        <Loade />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p className="text-red-500 text-xl font-semibold">Error: {error}</p>
      </div>
    );
  }

  console.log(filtredPas)

  return (
    <div className="bg-gradient-to-r from-[#000000c0] to-[#1c1c1c] py-10 px-4 space-y-20">
      <section className="-mt-56 space-y-6">
        <MovieSlider
          data={filtredTop}
          time={0}
          scroll={false}
          className="relative group w-full h-60 rounded-lg overflow-hidden"
        />
      </section>

      <section className="space-y-6">
        <h2 className={`${bold.className} text-white text-2xl font-bold border-b-2 border-blue-400 inline-block`}>
          Top Picks
        </h2>
        <MovieSlider
          data={filtredPas}
          time={300}
          scroll={true}
          className="relative group w-full h-[512px] rounded-lg overflow-hidden"
        />
      </section>
    </div>
  );
};

export default MovieContents;
