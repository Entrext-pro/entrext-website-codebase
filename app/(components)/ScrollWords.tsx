'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const texts = [
  "micro saas",
  "AI-powered tools",
  "voice assistants",
  "marketplace",
  "games",
];

export default function ScrollWords() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });

  return (
    <div
      ref={containerRef}
      className="bg-black mt-5 min-h-[500vh] sm:min-h-[700vh] md:min-h-[900vh] flex flex-col items-center justify-start p-10"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center w-full ">
        {texts.map((text, index) => {
          const total = texts.length;
          const step = 1 / total;
          const start = index * step;
          const middle = start + step / 2;
          const end = (index + 1) * step;

          const opacity = useTransform(
            smoothProgress,
            [start, middle, end],
            [0.2, 1, 0.2]
          );

          const blur = useTransform(
            smoothProgress,
            [start, middle, end],
            ["blur(5px)", "blur(0px)", "blur(5px)"]
          );

          const scale = useTransform(
            smoothProgress,
            [start, middle, end],
            [0.95, 1, 0.95]
          );

          return (
            <motion.div
              key={index}
              style={{
                opacity,
                filter: blur,
                transform: useTransform(scale, (s) => `scale(${s}) scaleY(1.4)`),
              }}
              className="text-white font-mono font-bold text-[50px] sm:text-[80px] md:text-[120px] lg:text-[150px] uppercase leading-none h-[150px] sm:h-[300px] md:h-[400px] flex flex-nowrap items-center justify-center tracking-tight"
            >
              {text}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
