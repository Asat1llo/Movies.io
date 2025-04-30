"use client";

import { useEffect, useState } from "react";
import Header from "./header";
import "./globals.css";
import { Loade } from "@/components/share";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <html lang="en">
        <body className="flex items-center justify-center h-screen bg-black">
          <Loade/>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
