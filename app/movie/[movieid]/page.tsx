'use client';
import React, { useEffect} from 'react';
import { useCountStore } from '@/lib/store';
import { InnerCard, InnerDetailes } from '@/components/share';
import { useParams } from 'next/navigation';





export default function Page(){


    const params = useParams();
    const movieid = params.movieid as string;


   console.log(movieid)
  
  const { fetchData } = useCountStore((state) => state);
  useEffect(() => {
    if(fetchData){
      fetchData(movieid)
    }
  }, [fetchData,movieid]);

  return (
    <div className="bg-[#1B2A44] text-white min-h-screen flex items-center justify-center py-20 px-6">
    <main className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-12">
       <InnerCard/>
       <InnerDetailes/>  
    </main>
  </div>
  
  );
};


