"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./(animations)/Bolb";

export default function LoaderLogic({ onComplete }: { onComplete: () => void }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDone(true);
      onComplete();
    }, 5000);
    return () => clearTimeout(timeout);
  }, [onComplete]);

  const letters = "ENTREXT".split("");

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-white flex items-center justify-center"
        >
          <div className="text-center">
            {/* Animated Letters */}
            <div className="relative">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block text-[8vw] sm:text-[6vw] md:text-[4vw] font-mono font-bold text-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Loading Dots */}
            <motion.div
              className="flex justify-center space-x-1 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-black rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              className="w-48 h-0.5 bg-gray-200 mx-auto mt-6 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="h-full bg-black"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, delay: 1, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              className="font-mono text-sm text-gray-600 mt-4 tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              LOADING...
            </motion.p>
          </div>

          <div className="absolute opacity-0 pointer-events-none inset-0">
            <Home />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
