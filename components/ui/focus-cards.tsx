"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

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
        "rounded-2xl bg-gray-100 dark:bg-neutral-900 flex items-center justify-center text-center transition-all duration-300 ease-out px-4",
        
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