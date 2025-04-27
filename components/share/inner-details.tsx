import { Default } from '@/lib/default'
import { useCountStore } from '@/lib/store'
import { Download, Facebook, Play, Twitter } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const InnerDetails = () => {

    const {newData} = useCountStore((state)=>state)

  return (
    <section className="md:col-span-2 flex flex-col justify-start space-y-6">
    <h1 className="text-2xl md:text-4xl font-bold leading-tight">{newData?.title || Default.title}</h1>

    <div className="flex flex-wrap gap-4">
      <Button className="flex items-center gap-2 bg-gradient-to-r from-[#3B5BFF] to-[#2A3BFF] px-6 py-3 rounded-xl text-white text-sm font-semibold shadow-md hover:brightness-110 transition cursor-pointer">
        <Play />
        Watch
      </Button>
      <Button className="flex items-center gap-2 bg-[#2A3B5A] px-6 py-3 rounded-xl text-[#9AA3B1] text-sm font-semibold hover:bg-[#3B4B6A] transition cursor-pointer">
        <Download />
        Download
      </Button>
    </div>

    {/* Storyline */}
    <div className="space-y-3">
      <h2 className="text-[#6B7A8A] font-semibold text-sm uppercase tracking-wider">Storyline</h2>
      <p className="text-[#9AA3B1] text-sm leading-relaxed">
        {newData?.description || Default.description}
      </p>
    </div>

    {/* Movie Details */}
    <dl className="grid grid-cols-2 gap-4 text-sm text-[#9AA3B1]">
      <div>
        <dt className="text-[#2A3B5A] mb-1">Rating</dt>
        <dd className="font-semibold">{newData?.rating || Default.rating}</dd>
      </div>
      <div>
        <dt className="text-[#2A3B5A] mb-1">Release Year</dt>
        <dd className="font-semibold">{newData?.year || Default.year}</dd>
      </div>
      <div>
        <dt className="text-[#2A3B5A] mb-1">Genres</dt>
        <dd className="font-semibold italic">Adventure, Fantasy</dd>
      </div>
      <div>
        <dt className="text-[#2A3B5A] mb-1">Countries</dt>
        <dd className="font-semibold">Japan</dd>
      </div>
      <div>
        <dt className="text-[#2A3B5A] mb-1">Duration</dt>
        <dd className="font-semibold">2 hours +</dd>
      </div>
    </dl>

    {/* Share Buttons */}
    <div className="flex gap-4 mt-6">
      <button className="flex items-center gap-2 bg-[#2A3B5A] px-5 py-2 rounded-lg text-[#9AA3B1] text-sm font-semibold hover:bg-[#3B4B6A] transition">
        <Twitter/>
        Share
      </button>
      <button className="flex items-center gap-2 bg-[#2A3B5A] px-5 py-2 rounded-lg text-[#9AA3B1] text-sm font-semibold hover:bg-[#3B4B6A] transition">
        <Facebook />
        Like
      </button>
    </div>
  </section>
  )
}

export default InnerDetails