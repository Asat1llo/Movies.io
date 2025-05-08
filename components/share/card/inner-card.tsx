'use client'

import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Bookmark, Eye, Play, Star } from 'lucide-react'
import Image from 'next/image'
import { useCountStore } from '@/lib/store'
import { Default } from '@/lib/default'
import { Button } from '@/components/ui/button'


const Innercard = () => {

  const {newData} = useCountStore((state)=>state)
  
  console.log(newData)

  return ( 
    <Card className="border-none flex flex-col items-center shadow-xl rounded-2xl p-4 w-full max-w-sm bg-[#1B2A44]">
     <CardContent className="relative w-full aspect-[3/4]">
  <Image 
    src={newData?.poster_url || Default.poster_url}
    alt={newData?.title || Default.title}
    fill
    layout=''
    className="rounded-2xl object-cover object-center shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
    sizes="(max-width: 768px) 100vw, 300px"
    priority
  />
      </CardContent>

      <CardFooter className="flex flex-col gap-6 w-full pt-6">
        <Button onClick={()=>addToFavorites(newData.id)} className="w-full bg-white text-[#2A3B5A] py-5 text-base font-semibold hover:bg-gray-100 transition">
          <Play className="text-[#2A3B5A] w-5 h-5" />
          Trailer
        </Button>

        <div className="flex justify-between items-center w-full text-sm text-[#9AA3B1]">
          {[
            { icon: Star, label: "Favorite" },
            { icon: Bookmark, label: "Watch Later" },
            { icon: Eye, label: "Watched" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 hover:text-white transition cursor-pointer">
              <item.icon className="w-6 h-6" />
              <span className="text-xs">{item.label}</span>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

export default Innercard
