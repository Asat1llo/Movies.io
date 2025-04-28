"use client";

import Header from "./header";
import "./globals.css";
// import { useFetch } from "@/lib/store";
// import { Loader } from "@/components/share";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
