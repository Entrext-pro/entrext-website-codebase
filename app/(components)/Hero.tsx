"use client";

import { motion } from "framer-motion";
import { MagicCard } from "@/components/magicui/magic-card";
import {AnimatedBeamMultipleOutputDemo} from "@/app/(components)/Animation"

const line1 = "ENTERING";
const line2 = "THE NEXT ERA";

const sentences = [
    "We grow leaders—not hire them.",
    "We want 100 people to love what we build.",
    "We learn fast by doing, failing, and adapting.",
    "We're just one call away—not hidden behind systems.",
    "Partnership with non-tech founders.",
    "Got an idea but no tech partner? Pitch us.",
    "Partner with us if you're a creator with product ideas.",
    "We love content creators who resonate with our vision.",
    "We're looking for leaders in sales, tech, or branding.",
    "Let’s build together as co-founders—not just employees.",
];
const positions = [
    ["20%", "20%"],
    ["80%", "25%"],
    ["20%", "60%"],
    ["75%", "70%"],
    ["40%", "10%"],
    ["60%", "80%"],
    ["5%", "50%"],
    ["80%", "50%"],
    ["30%", "85%"],
    ["60%", "25%"],
];

const floatVariants = {
    animate: (i: number) => ({
        y: [0, -10, 0, 10, 0],
        x: [0, i % 2 === 0 ? 10 : -10, 0, i % 2 === 0 ? -10 : 10, 0],
        transition: {
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
            delay: i * 0.5,
        },
    }),
};


export default function Hero() {
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

            <MagicCard className="md:block hidden border border-dashed rounded-2xl ">
                <div className=" border border-dashed m-3 rounded-md">
                    <div className="relative w-full h-[600px] flex items-center justify-center bg-white overflow-hidden">
                        <motion.div
                            className="absolute z-10 text-black font-extrabold text-4xl px-6 py-3 rounded-full bg-gray-100 animate-border-green border-2 border-transparent "
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        >
                            Entrext
                        </motion.div>
                        {sentences.map((text, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-[180px] text-center px-3 py-2 rounded-lg bg-slate-100 text-black text-xs md:text-sm font-medium animate-border-black border-2 border-transparent cursor-pointer"
                                style={{
                                    top: positions[i][1],
                                    left: positions[i][0],
                                }}
                                custom={i}
                                variants={floatVariants}
                                animate="animate"
                                whileHover={{
                                    width: 240,
                                    height: 90,
                                    fontSize: "18px",
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    },
                                }}
                            >
                                {text}
                            </motion.div>

                        ))}
                    </div>
                </div>
            </MagicCard>

            <div className="block md:hidden">
                    <AnimatedBeamMultipleOutputDemo/>
            </div>
        </div>
    );
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
