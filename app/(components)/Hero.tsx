"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Home from "./(animations)/Gloabe";
import { RetroGridDemo } from "./RetroGridDemo";

const line1 = "ENTERING";
const line2 = "THE NEXT ERA";

export default function Hero() {
    const isMobile = useIsMobile();

    return (
        <div>
            <div className="md:mt-[90px] mt-[70px] md:h-[500px] h-[120px] overflow-hidden">
                <div className="text-[50px] sm:text-[180px] md:text-[160px] lg:text-[200px] xl:text-[240px] font-[1000] leading-[1] tracking-tight">
                    <div className="flex flex-wrap">
                        {line1.split("").map((char, index) => (
                            <motion.span
                                key={`line1-${index}`}
                                className="inline-block"
                                initial="initial"
                                animate="animate"
                                variants={{
                                    initial: getInitialDirection(char),
                                    animate: {
                                        x: 0,
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 120,
                                            damping: 20,
                                            delay: index * 0.3,
                                        },
                                    },
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </div>

                    <div className="flex">
                        {line2.split("").map((char, index) => (
                            <motion.span
                                key={`line2-${index}`}
                                className="inline-block"
                                initial="initial"
                                animate="animate"
                                variants={{
                                    initial: getInitialDirection(char),
                                    animate: {
                                        x: 0,
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 120,
                                            damping: 20,
                                            delay: (line1.length + index) * 0.1,
                                        },
                                    },
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`relative overflow-hidden w-full h-[400px] lg:h-[800px] md:my-24 mt-16`}>
                <RetroGridDemo/>
            </div>
        </div>
    );
}

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return isMobile;
}

function getInitialDirection(char: string) {
    switch (char.toUpperCase()) {
        case "E":
            return { x: -100, opacity: 0 };
        case "G":
            return { x: 100, opacity: 0 };
        case "I":
            return { y: -100, opacity: 0 };
        default:
            return { y: 100, opacity: 0 };
    }
}
