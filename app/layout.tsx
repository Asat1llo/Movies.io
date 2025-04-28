"use client";

import { useEffect, useState } from "react";
import Header from "./header";
import "./globals.css";
import { Loader } from "@/components/share";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Faqat birinchi renderda loading ko‘rsatamiz
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 sekund loading ko‘rsatib turadi

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <html lang="en">
        <body className="flex items-center justify-center h-screen bg-black">
          <Loader/>
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
