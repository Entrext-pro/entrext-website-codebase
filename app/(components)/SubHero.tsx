"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Merienda, Delicious_Handrawn } from "next/font/google"
import { MarqueeDemo2 } from "./CurvedWords";


const merienda = Merienda({
    subsets: ['latin'],
    weight: "400",
    variable: "--font-bokor"
})

const handdrawn = Delicious_Handrawn({
    subsets: ['latin'],
    weight: "400",
    variable: "--font-bokor"
})


export default function SubHero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <div className="md:mt-20 font-mono overflow-hidden md:mb-56 mb-20 " ref={ref}>
            <div>
                
            </div>
            <div className="overflow-hidden">
                <motion.div
                    className="w-full flex md:justify-end justify-center md:text-3xl"
                    initial="hidden"
                    animate={controls}
                    variants={fadeFromRight}
                >
                    <div className="md:w-2xl w-[300px] md:text-left">
                        <div className="font-[500] uppercase md:mt-0 md:ml-0 ml-3">
                            A product studio ☴ that turns everyday problems into smart,
                            useful
                            <div className="inline-block mb-4 border-2 border-black -rotate-3 md:w-[10vw] w-[120px] rounded-full px-2">
                                <span className={`${handdrawn.className} md:text-[1.3vw]`}> apps and tools</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="overflow-hidden md:mb-52 mb-3">
                <motion.div
                    className="flex justify-between mt-2"
                    initial="hidden"
                    animate={controls}
                    variants={fadeFromLeft}
                >
                    <div className="md:text-xl text-[12px] md:mt-0 mt-[30px] md:ml-0 ml-2">
                        <p>Building Micro & Macro Tech Products For the Next Decade</p>
                        <p>Powered by AI, Community & People</p>
                    </div>
                    <div className="flex items-end md:text-sm text-[8px]">
                        <p>PRODUCT SPECIFIED LOCATIONS</p>
                    </div>
                </motion.div>
            </div>

            <div className="md:mt-0 mt-20 md:mb-96 mb-40">
                <MarqueeDemo2 />
            </div>

            {/* <div className={`text-center flex [transform:scale(1.4,1.2)] justify-center md:my-36 my-20  font-mono`}>
                <ComponentEntrext/>
            </div> */}
            <div className={`font-mono`}>
                <ComponentEntrext/>
            </div>
        </div>
    );
}

function AnimatedColoredText({ text }: { text: string }) {
    const base = "#222222"; 
    const white = "#C0C0C0"; 

    const stages: Array<Record<number, string>> = [
        {
            0: base,
            1: base,
            2: base,
            3: base,
            4: base,
            5: base,
            6: base,
        },
        {
            0: white,
            1: white,
            2: base,
            3: base,
            4: base,
            5: base,
            6: base,          

        },
        {
            0: base,
            1: base,
            2: white,
            3: white,
            4: base,
            5: base,
            6: base,
        },
        {
            0: base,
            1: base,
            2: base,
            3: base,
            4: white,
            5: white,
            6: white,
        },
    ];

    const [stage, setStage] = useState(0);
    const stageCount = stages.length;

    useEffect(() => {
        const id = setInterval(() => {
            setStage((s) => (s + 1) % stageCount);
        }, 2000);
        return () => clearInterval(id);
    }, [stageCount]);

    return (
        <div className="flex">
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    animate={{ color: stages[stage][i] ?? base }}
                    transition={{ duration: 1 }}
                    className="font-extrabold leading-none md:text-[18vw] text-[17vw]"
                    
                >
                    {char}
                </motion.span>
            ))}
        </div>
    );
}

function ComponentEntrext() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center relative">
        {/* Background Entrext text */}
        <div className="relative">
          <h1 className="text-[17vw] md:text-9xl lg:text-[17vw] [transform:scale(1.4,1.3)] font-bold text-transparent bg-gradient-to-r from-gray-600 via-white to-gray-400 bg-clip-text opacity-20 select-none">
            Entrext
          </h1>
        </div>

        {/* Subtitle positioned below background text */}
        <div className="md:mt-8">
          <p className="text-2xl md:text-3xl lg:text-6xl font-light text-transparent bg-gradient-to-r from-gray-200 via-gray-400 to-white bg-clip-text tracking-wide">
            Making Product for next decade...
          </p>
        </div>

        {/* Additional gradient overlay effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-gradient-to-b from-transparent via-white/10 to-transparent bg-clip-text opacity-30 select-none">
            Entrext
          </div>
        </div>
      </div>
    </div>
  )
}



const fadeFromRight = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeFromLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};


