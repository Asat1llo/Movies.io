"use client"
import { useCountStore } from '@/lib/store';
import { InnerCard, InnerDetailes } from '@/components/share';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';





export default function Page(){


    const {movieid} = useParams()


   console.log(movieid)
  
  const { fetchData } = useCountStore((state) => state);
 
  useEffect(()=>{
    if(movieid){
      fetchData(movieid)
    }
  },[fetchData,movieid])


  return (
    <div className="bg-[#1B2A44] text-white min-h-screen flex items-center justify-center py-20 px-6">
    <main className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-12">
       <InnerCard/>
       <InnerDetailes/>  
    </main>
  </div>
  
  );
};


