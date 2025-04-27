'use client';

import { HeroContent } from '@/components/share';
import { Default } from '@/lib/default';
import { useCountStore } from '@/lib/store';

export default function Hero() {
  const {newData} = useCountStore((state) => state);
 
  return (
    <div className="min-h-screen bg-cover bg-center relative flex items-center-safe transition-all duration-1000 ease-in-out"
    style={{
      backgroundImage: `url(${newData?.poster_url || Default.poster_url })`, 
    }}
  >
    {/* Overlay  */}
    <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <HeroContent/>
    </div>
  );
}
