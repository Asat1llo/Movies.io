'use client';
import React, { use, useEffect} from 'react';
import { useCountStore } from '@/lib/store';
import { InnerCard, InnerDetailes } from '@/components/share';


const  Page =({params}:{params:Promise<{movieid:string}>})=>{

  const {movieid} = use(params)
  const { fetchData } = useCountStore((state) => state);
  useEffect(() => {
    fetchData(movieid)
  }, [movieid]);

  return (
    <div className="bg-[#1B2A44] text-white min-h-screen flex items-center justify-center py-20 px-6">
    <main className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-12">
       <InnerCard/>
       <InnerDetailes/>  
    </main>
  </div>
  
  );
};

export default Page;
