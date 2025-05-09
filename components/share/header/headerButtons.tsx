import React from 'react'
import localFont from 'next/font/local';
import { Button } from '@/components/ui/button';


const regular = localFont({
    src:"../../../public/fonts/Montserrat-Regular.woff2"
  })
  


const HeaderButtons = () => {

   const sessin = false   


  return (
    <div className="flex gap-6">
    {sessin ? (
        <Button
        className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-700"
      >
        Log Out
      </Button>
    ):(
      <>
      <Button className={`${regular.className} text-[#5A7AD0] text-lg cursor-pointer hover:underline`}>
      Sign In
    </Button>
    <Button
      className={`${regular.className} bg-[#3B6CF0] text-white text-lg font-semibold rounded-[10px] px-7 py-4 cursor-pointer hover:bg-[#2E54D4] transition`}
      >
      Sign Up
    </Button>
        </>
    )
      }
  </div>
  )
}

export default HeaderButtons