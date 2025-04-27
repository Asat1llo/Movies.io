import React from 'react'
import localFont from "next/font/local"
import Rating from './rating'
import { Default } from '@/lib/default'
import { useCountStore } from '@/lib/store'

const robot = localFont({
    src:'../../public/fonts/Roboto-Regular.woff2'
})

const bold = localFont({
    src:'../../public/fonts/Roboto-Bold.woff2'
})




const HeroContent = () => {
 
  const {newData} = useCountStore((state)=>state)
  

  return (
    <div className="relative z-10 max-w-7xl px-6 py-10 sm:py-16 md:py-20 lg:py-24 ">
        <div className="max-w-xl">
          <p className={`${robot.className} text-xs text-white/70 mb-1 leading-none`}>
            {newData.genres || Default.geners}
          </p>
          <h1 className={`${bold.className} text-white text-4xl font-extrabold mb-3 `}>
            {newData.title || Default.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex space-x-1 text-yellow-400 text-sm">
              <Rating rating={newData.rating || Default.rating}/>
            </div>
            <span className="text-white/70 text-xs font-light">1</span>
            <span className="text-white/70 text-xs font-light">1h 57m</span>
          </div>

          <a href="#" className={`${bold.className}  text-lg text-blue-600 mb-2 inline-block`}>
            Overview
          </a>

          <p className={`${robot.className}  text-base font-light text-white/70 leading-tight max-w-md`}>
            {newData.description || Default.description}
          </p>

        </div>
      </div>
  )
}

export default HeroContent