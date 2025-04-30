"use client"
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import localFont from 'next/font/local'
import {  useFetch } from '@/lib/store'

  const regular = localFont({
    src:"../../../public/fonts/Montserrat-Regular.woff2"
  })
  

const Selector = () => {

   
  const {fetch}= useFetch((state)=>state);

  const handleChange = (value: string) => {
    fetch(value);
  };
  


  return (
    <Select onValueChange={handleChange}>
  <SelectTrigger  className={`${regular.className}  text-[#8CA0B3] text-base hover:text-[#5A7AD0] w-32 border-none cursor-pointer  focus-visible:outline-transparent placeholder:text-white/40  border-transparent outline-none focus-visible:ring-transparent focus-visible:border-transparent focus:ring-transparent shadow-none`}>
    <SelectValue placeholder="All"  />
  </SelectTrigger>
  <SelectContent className='border-none text-white bg-blue-500'>
    <SelectItem value="All">All</SelectItem>
    <SelectItem value="anime">Anime</SelectItem>
    <SelectItem value="drama">Movie</SelectItem>
    <SelectItem value="fantasy">Fantasy</SelectItem>
  </SelectContent>
</Select>

  )
}

export default Selector