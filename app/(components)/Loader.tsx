"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./(animations)/Gloabe";

export default function LoaderLogic({ onComplete }: { onComplete: () => void }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDone(true);
      onComplete();
    }, 4000);
    return () => clearTimeout(timeout);
  }, [onComplete]);

  const letters = "ENTREXT".split("");

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-[#f9f9f9] to-[#eaeaea] flex items-center justify-center overflow-hidden"
        >
          <motion.div
            className="absolute w-[60vw] h-[60vw] sm:w-[30vw] sm:h-[30vw] bg-[#00000010] rounded-full blur-3xl animate-pulse"
            initial={{ scale: 0.9, opacity: 0.6 }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          <div className="text-center z-10">
            <div className="flex justify-center space-x-1">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-[10vw] sm:text-[7vw] md:text-[2vw] font-extrabold font-mono tracking-wide relative inline-block"
                  style={{
                    WebkitTextStroke: "1px black",
                    color: "transparent",
                    background: "black",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    maskImage: "linear-gradient(to top, black 50%, transparent 50%)",
                    WebkitMaskImage: "linear-gradient(to top, black 50%, transparent 50%)",
                    WebkitMaskSize: "100% 200%",
                    WebkitMaskPosition: "0% 100%",
                  }}
                  initial={{
                    WebkitMaskPosition: "0% 100%",
                  }}
                  animate={{
                    WebkitMaskPosition: "0% 0%",
                  }}
                  transition={{
                    delay: 0.7 + index * 0.2,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            <div className="relative h-12 mt-8 flex justify-center items-center">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-black rounded-full"
                  animate={{
                    x: [0, Math.cos(i * 2) * 20, 0],
                    y: [0, Math.sin(i * 2) * 20, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2 + i,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="absolute opacity-0 pointer-events-none inset-0">
            <Home />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
