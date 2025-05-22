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

  const total = texts.length;
  
  const opacity0 = useTransform(smoothProgress, [0, 0.1, 0.2], [0.2, 1, 0.2]);
  const blur0 = useTransform(smoothProgress, [0, 0.1, 0.2], ["blur(5px)", "blur(0px)", "blur(5px)"]);
  const scale0 = useTransform(smoothProgress, [0, 0.1, 0.2], [0.95, 1, 0.95]);

  const opacity1 = useTransform(smoothProgress, [0.2, 0.3, 0.4], [0.2, 1, 0.2]);
  const blur1 = useTransform(smoothProgress, [0.2, 0.3, 0.4], ["blur(5px)", "blur(0px)", "blur(5px)"]);
  const scale1 = useTransform(smoothProgress, [0.2, 0.3, 0.4], [0.95, 1, 0.95]);

  const opacity2 = useTransform(smoothProgress, [0.4, 0.5, 0.6], [0.2, 1, 0.2]);
  const blur2 = useTransform(smoothProgress, [0.4, 0.5, 0.6], ["blur(5px)", "blur(0px)", "blur(5px)"]);
  const scale2 = useTransform(smoothProgress, [0.4, 0.5, 0.6], [0.95, 1, 0.95]);

  const opacity3 = useTransform(smoothProgress, [0.6, 0.7, 0.8], [0.2, 1, 0.2]);
  const blur3 = useTransform(smoothProgress, [0.6, 0.7, 0.8], ["blur(5px)", "blur(0px)", "blur(5px)"]);
  const scale3 = useTransform(smoothProgress, [0.6, 0.7, 0.8], [0.95, 1, 0.95]);

  const opacity4 = useTransform(smoothProgress, [0.8, 0.9, 1], [0.2, 1, 0.2]);
  const blur4 = useTransform(smoothProgress, [0.8, 0.9, 1], ["blur(5px)", "blur(0px)", "blur(5px)"]);
  const scale4 = useTransform(smoothProgress, [0.8, 0.9, 1], [0.95, 1, 0.95]);

  const transforms = [
    { opacity: opacity0, blur: blur0, scale: scale0 },
    { opacity: opacity1, blur: blur1, scale: scale1 },
    { opacity: opacity2, blur: blur2, scale: scale2 },
    { opacity: opacity3, blur: blur3, scale: scale3 },
    { opacity: opacity4, blur: blur4, scale: scale4 },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-black mt-5 
        min-h-[400vh] sm:min-h-[300vh] md:min-h-[700vh] lg:min-h-[900vh] 
        flex flex-col items-center justify-start 
        px-2 py-4 sm:p-6 md:p-10"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center w-full max-w-7xl">
        {texts.map((text, index) => {
          const { opacity, blur, scale } = transforms[index];

          return (
            <motion.div
              key={index}
              style={{
                opacity,
                filter: blur,
                scale,
                scaleY: 1.2,
              }}
              className="text-white font-mono font-bold 
                text-[24px] xs:text-[52px] sm:text-[60px] md:text-[90px] lg:text-[120px] xl:text-[150px]
                uppercase leading-[0.8] sm:leading-none
                h-[50px] xs:h-[60px] sm:h-[120px] md:h-[200px] lg:h-[300px] xl:h-[400px]
                flex items-center justify-center text-center
                tracking-tight px-2
                whitespace-nowrap overflow-hidden"
            >
              <span className="block truncate max-w-full">
                {text}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}