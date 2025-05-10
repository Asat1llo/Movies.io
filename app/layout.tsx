import "./globals.css";
import { Metadata } from "next";
import Header from "./header";
import AppWrapper from "@/components/share/slider/loadingPage";

export const metadata: Metadata = {
  icons: "/icon.svg",
  title: "MOVIE.IO",
  description: "free movies and films,anime",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
          <Header />
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
