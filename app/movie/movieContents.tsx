"use client"

import { useFetch } from '@/lib/store'
import React, { useEffect } from 'react'
import localFont from "next/font/local"
import { MovieSlider } from '@/components/share'


const bold = localFont({
  src:'../../public/fonts/Roboto-Bold.woff2'
})


const MovieContents = () => {

    const {loading,error,fetch,data,filter,filtredTop,filtredPas} = useFetch((state)=>state)

    useEffect(() => {
      const getData = async () => {
        await fetch();
      };
      getData();
    }, [fetch]);
  
    useEffect(() => {
      if (data.length) {
        filter(data);
      }
    }, [data, filter]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

  return (
    <div className='bg-black py-10 px-4 '>
      <div className='relative bottom-48'>
      <MovieSlider data={filtredTop} className='relative group w-full h-60 rounded-lg overflow-hidden'/>
      </div>
      <div className='flex flex-col items-start space-y-10'>
      <p className={`${bold.className}  text-white text-2xl font-bold mt-6 inline-block border-b-2 border-blue-400`}>Top picks</p>
      <MovieSlider data={filtredPas} className='relative group w-full h-[512px] rounded-base overflow-hidden'/>
      </div>
    </div>
  )
}

export default MovieContents