"use client";

import { RetroGrid } from "@/components/magicui/retro-grid";

export function RetroGridDemo() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center md:text-7xl text-5xl font-bold leading-none tracking-tighter text-transparent">
        Building Products That People Love
      </span>

      <RetroGrid />
    </div>
  );
}
