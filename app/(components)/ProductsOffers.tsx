import React from 'react';
import { Meteors } from "@/components/magicui/meteors";
import { ShineBorder } from '@/components/magicui/shine-border';

const textItems = [
    "MICRO-SAAS",
    "AI TOOLS",
    "VOICE-ASSIST",
    "MARKETPLACES",
    "GAMES",
];

export default function ProdcutOffers() {
    return (
        <div>
            <div className='md:block hidden'>
                <ProductDesktop />
            </div>
            <div className='md:hidden block'>
                <ProductMobile />
            </div>
        </div>
    );
}


function ProductDesktop() {
    return (
        <div className='w-full  h-[800px] p-10 flex justify-center gap-5'>
            <div className='w-[30%]  h-full flex flex-col justify-between'>
                <div className='relative w-full h-[44%] flex items-center justify-center bg-slate-100'>
                    <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                        MICRO-SAAS
                    </span>
                </div>
                <div className='relative w-full h-[44%] flex items-center justify-center bg-slate-100'>
                    <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                        AI TOOLS
                    </span>
                </div>
            </div>
            <div className='w-[30%]  h-full flex flex-col justify-center'>
                <div className='relative w-full h-[44%] flex items-center justify-center bg-slate-100'>
                    <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                        VOICE-ASSIST
                    </span>
                </div>
            </div>
            <div className='w-[30%] h-full flex flex-col justify-between'>
                <div className='relative w-full h-[44%] flex items-center justify-center bg-slate-100'>
                    <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                        MARKETPLACES
                    </span>
                </div>
                <div className='relative w-full h-[44%] flex items-center justify-center bg-slate-100'>
                    <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                        GAMES
                    </span>
                </div>
            </div>
        </div>
    )
}

function ProductMobile() {
  return (
    <div className="w-full p-4 flex flex-col gap-3">
      {/* First row - 2 items */}
      <div className="flex justify-between gap-3">
        {["MICRO-SAAS", "AI TOOLS"].map((item, i) => (
          <div
            key={i}
            className="relative w-[48%] h-[80px] flex items-center justify-center bg-slate-100 rounded-md"
          >
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-base font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Middle full-width item */}
      <div className="relative w-full h-[80px] flex items-center justify-center bg-slate-100 rounded-md">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-base font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          VOICE-ASSIST
        </span>
      </div>

      {/* Bottom row - 2 items */}
      <div className="flex justify-between gap-3">
        {["MARKETPLACES", "GAMES"].map((item, i) => (
          <div
            key={i}
            className="relative w-[48%] h-[80px] flex items-center justify-center bg-slate-100 rounded-md"
          >
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-base font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}