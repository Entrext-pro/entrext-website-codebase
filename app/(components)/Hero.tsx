"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Notebook from "@/public/notebook.jpg"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const line1 = "ENTERING";
const line2 = "THE NEXT ERA";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const isMobile = useIsMobile();
    const height = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? ["300px", "100px"] : ["900px", "400px"]
    );

    return (
        <div>
            <div className="mt-[90px] md:h-[500px] h-[120px] overflow-hidden">
                <div className="text-[50px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[210px] font-[1000] leading-[1] tracking-tight">
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
                                            delay: index * 0.05,
                                        },
                                    },
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </div>

                    <div className="flex ">
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
                                            delay: (line1.length + index) * 0.05, // continue delay from line1
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

            <div className="block border border-dashed ">
                <motion.div
                    ref={ref}
                    className="block border border-dashedoverflow-hidden"
                    style={{ height }}
                >
                    <Image
                        className="w-full h-full object-cover"
                        alt="Notebook"
                        src={Notebook}
                    />
                </motion.div>
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
