import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/StarBackground";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cosmic Travel',
  description: 'Cosmic Travel | Time Line Tracker | Cosmic Travel Gallery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
      <StarsCanvas />
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
