'use client';
import { Hero } from "@/components";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ['100', '300', '400', '500'], subsets: ['latin'] });

export default function Home() {
  return (
    
    <main className={`${roboto.className} w-full h-screen bg-bg`}>
      <Hero />
    </main>
  );
}
