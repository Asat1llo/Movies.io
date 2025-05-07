"use client"
import localFont from "next/font/local"

import Link from 'next/link';
import { HMenu, Selector } from "@/components/share";


const bold = localFont({
    src:"../public/fonts/Montserrat-Bold.woff2"
})

const Header = () => {

 
   

  return (
    <nav className="bg-transparent px-4 py-3 w-full fixed top-0 left-0 z-50">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      {/* Left Side */}
      <div className="flex items-center space-x-8 ">
        <Link href='/'>
        <span className={`${bold.className}  text-white font-semibold text-2xl cursore-pointer`}>Movies.io</span>
        </Link>
          <Selector/>
      </div>
      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <HMenu/>
      </div>
    </div>
    </nav>
  )
}

export default Header



