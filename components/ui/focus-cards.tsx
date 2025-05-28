"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: { title: string; description: string };
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        // Layout
        "rounded-2xl bg-gray-100 dark:bg-neutral-900 flex flex-col gap-2 items-center justify-center text-center transition-all duration-300 ease-out px-4",
        
        // Size
        "h-60 sm:h-72 md:h-80 lg:h-[26rem] w-full sm:w-[20rem] md:w-[30rem] lg:w-[36rem]",
        
        // Hover blur only on md+ screens
        hovered !== null &&
          hovered !== index &&
          "md:blur-sm md:scale-[0.98]"
      )}
    >
      <div
        className={cn(
          "transition-opacity duration-300 flex flex-col items-center justify-between",
          hovered === index ? "opacity-100" : "opacity-80"
        )}
      >

        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black dark:text-white mb-3">
          {card.title}
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl w-[90%] text-gray-700 dark:text-gray-300 leading-relaxed">
          {card.description}
        </p>
      </div>
      <div>
        <CreativeBtn/>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  description: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col lg:flex-row justify-center  items-center gap-8 lg:gap-16 xl:gap-20 px-4 md:px-12 xl:px-32 my-10 md:my-20 w-full  mx-auto">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

function CreativeBtn(){
  const router = useRouter()
  return (
    <>
      <div
      onClick={()=>{
        router.push("https://deformity.ai/d/C-P5znqtG_ZZ")
      }}
      className='group relative cursor-pointer p-2 md:w-32 w-24 border bg-white rounded-full overflow-hidden text-black text-center font-semibold md:text-xl mt-2'>
        <span className='translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block ml-3'>
          Apply
        </span>
        <div className='flex gap-5 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300'>
          <span>Apply</span>
          <ArrowRight />
        </div>
        <div className='absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-black scale-[1] group-hover:bg-yellow-400 group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] '></div>
      </div>
    </>
  );
}