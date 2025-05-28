"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Merienda, Delicious_Handrawn } from "next/font/google"
import { MarqueeDemo2, MarqueeDemo3, MarqueeDemo4 } from "./CurvedWords";


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
            <div className={`font-mono flex justify-center`}>
                <ComponentEntrext/>
            </div>
        </div>
    );
}



function ComponentEntrext() {
  return (
    <div>
        <MarqueeDemo3/>
        <MarqueeDemo4/>
        <MarqueeDemo3/>
        <MarqueeDemo4/>
        <MarqueeDemo3/>
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


