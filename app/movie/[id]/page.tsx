'use client';
import React, { useEffect,use } from 'react';
import { useCountStore } from '@/lib/store';
import { InnerCard } from '@/components/share';
import InnerDetails from '@/components/share/card/inner-details';

const MovieCard = ({params}:{params:Promise<{id:string}>}) => {

  const {fetchData} = useCountStore((state)=>state)
  
  const {id} = use(params);
  useEffect(()=>{
    fetchData(id)
  },[id])

  return (
    <div className="bg-[#1B2A44] text-white min-h-screen flex items-center justify-center py-20 px-6">
    <main className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-12">
       <InnerCard/>
       <InnerDetails/>  
    </main>
  </div>
  
  );
};

export default MovieCard;
