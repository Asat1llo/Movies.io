'use client';
import React, { useEffect} from 'react';
import { useCountStore } from '@/lib/store';
import { InnerCard } from '@/components/share';
import InnerDetails from '@/components/share/card/inner-details';


interface PageProps {
  params: {
    id: string;
  };
}


const MovieCard = ({params}:PageProps) => {

  const {fetchData} = useCountStore((state)=>state)
  

  useEffect(() => {
    if (params.id) {
      fetchData(params.id);
    }
  }, [params.id, fetchData]);


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
