"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { DrawerDemo } from './drawer'
import HeaderButtons from "./headerButtons"



const HMenu = () => {

  

  return (
    <div>
        {/* Desktop Navigation */}
        <div className="hidden xl:flex justify-between items-center py-4 px-8 gap-1.5">
           <DrawerDemo/>
            <HeaderButtons/>
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
