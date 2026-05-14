import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll"; 
import Navigation from "../components/Navigation"; 
import Cursor from "../components/Cursor"; // <-- Import the Cursor

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raiyan Ahmed | Backend Architect",
  description: "Portfolio of Raiyan Ahmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Added 'cursor-none' to hide the default mouse */}
      <body className={`${inter.className} antialiased bg-[#050505] text-[#EDEDED] cursor-none`}>
        <SmoothScroll>
          <Cursor />
          <Navigation />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}