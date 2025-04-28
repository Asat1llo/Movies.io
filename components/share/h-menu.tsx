import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Button } from '../ui/button'
import localFont from 'next/font/local'
import { DrawerDemo } from './drawer'


const regular = localFont({
  src:"../../public/fonts/Montserrat-Regular.woff2"
})

const HMenu = () => {
  return (
    <div>
        {/* Desktop Navigation */}
        <div className="hidden xl:flex justify-between items-center py-4 px-8 gap-1.5">
           <DrawerDemo/>
          <div className="flex gap-6">
            <Button className={`${regular.className} text-[#5A7AD0] text-lg cursor-pointer hover:underline`}>
              Sign In
            </Button>
            <Button
              className={`${regular.className} bg-[#3B6CF0] text-white text-lg font-semibold rounded-[10px] px-7 py-4 cursor-pointer hover:bg-[#2E54D4] transition`}
            >
              Sign Up
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Menubar className="md:hidden border-none">
          <MenubarMenu>
            <MenubarTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </MenubarTrigger>
            <MenubarContent className=' bg-[#213153] text-[#5A7AD0]'>
              <MenubarItem>
                Sign in
              </MenubarItem>
              <MenubarItem>Sign up</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Settings</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
    </div>
  )
}

export default HMenu
