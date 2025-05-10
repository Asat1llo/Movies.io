'use client';
import { HeroContent } from '@/components/share';
import { Default } from '@/lib/default';
import { useCountStore } from '@/lib/store';

export default function Hero() {
  const {newData } = useCountStore((state) => state);
  const backgroundImage =  (newData.poster_url || Default.poster_url) as string;
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4">
        <HeroContent />
      </div>
    </section>
  );
}
