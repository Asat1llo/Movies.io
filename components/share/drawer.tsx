'use client';

import React, { useState } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useCountStore } from '@/lib/store';
import SearchMenu from './search';
import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';

const mot = localFont({
  src: '../../public/fonts/Montserrat-Bold.woff2',
});

export function DrawerDemo() {
  const { filterData } = useCountStore((state) => state);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <SearchMenu set={setOpen} />
      </DrawerTrigger>

      <DrawerContent className="pt-2 px-0 overflow-y-auto max-h-screen border-none bg-black/80">
        <DrawerHeader>
          <DrawerTitle>
            <VisuallyHidden>Movie List</VisuallyHidden>
          </DrawerTitle>
        </DrawerHeader>

        <div className="w-full flex flex-wrap justify-center px-2 gap-5 pb-10 z-50">
          {filterData?.length > 0 ? (
            filterData.map((item) => (
              <Link
                key={item.id}
                href={`/movie/${item.id}`}
                onClick={handleClose}
                className="w-72"
              >
                <Card className="relative border-none bg-gradient-to-br from-white/90 to-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-500 group">
                  <CardContent className="p-0">
                    <div className="relative w-full h-80 overflow-hidden">
                      <Image
                        src={item.poster_url}
                        alt={item.title}
                        fill
                        className="object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center p-4">
                    <p className={`${mot.className} font-extrabold text-xl text-gray-800 text-center group-hover:text-yellow-600 transition-colors duration-500`}>
                      {item.title}
                    </p>
                  </CardFooter>
                </Card>
              </Link>
            ))
          ) : (
            <p className="text-white text-center mt-10 text-lg">No movies found 🥲</p>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
