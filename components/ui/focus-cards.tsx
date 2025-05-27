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
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full flex items-center justify-center text-center px-4 transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <div
        className={cn(
          "transition-opacity duration-300 flex flex-col items-center",
          hovered === index ? "opacity-100" : "opacity-70"
        )}
      >
        <h3 className="text-xl md:text-3xl font-semibold text-black dark:text-white mb-2">
          {card.title}
        </h3>
        <p className="text-sm md:text-xl w-[70%] text-gray-700 dark:text-gray-300">
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
    <div className="flex md:mx-32 gap-20 md:my-20 w-full">
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
