"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Merienda, Delicious_Handrawn } from "next/font/google"


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
        <div className="md:mt-20 font-mono overflow-hidden md:mb-40 mb-32 " ref={ref}>
            <div className="overflow-hidden">
                <motion.div
                    className="w-full flex md:justify-end justify-center md:text-3xl"
                    initial="hidden"
                    animate={controls}
                    variants={fadeFromRight}
                >
                    <div className="md:w-2xl w-[300px] md:text-left ">
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
                    <div className="md:text-xl text-[10px] md:mt-0 mt-[30px]">
                        <p>Building Micro & Macro Tech Products For the Next Decade</p>
                        <p>Powered by AI, Community & People</p>
                    </div>
                    <div className="flex items-end md:text-sm text-[7px]">
                        <p>PRODUCT SPECIFIED LOCATIONS</p>
                    </div>
                </motion.div>
            </div>

            <div className="block sm:hidden">
                <CurvedTextReverseLineMobile />
            </div>

            <div className={`text-center flex [transform:scale(1.4,1.2)] justify-center md:my-36 mt-10  gap-2  ${merienda.className}`}>
                <AnimatedColoredText text="Entrext" />
            </div>
        </div>
    );
}

function AnimatedColoredText({ text }: { text: string }) {
    const base = "#000000";
    const col = ["#E6582A", "#F9C74F", "#90BE6D"];

    const stages: Array<Record<number, string>> = [
        {},
        { 5: col[0], 3: col[1], 4: col[2] },
        { 0: col[0], 2: col[1], 5: col[2] },
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
                    transition={{ duration: 0.5 }}
                    className="font-extrabold leading-none md:text-[20vw] text-[70px]"
                >
                    {char}
                </motion.span>
            ))}
        </div>
    );
}


const fadeFromRight = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeFromLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

function CurvedTextReverseLineMobile() {
    return (
        <svg viewBox="0 0 700 200" className="w-full h-[150px]">
            <path
                id="curvePathMobile"
                d="M 0 50 Q 200 140, 350 140 T 700 50"
                fill="transparent"
                stroke="transparent"
            />
            <text fontSize="30" fill="#000">
                <textPath href="#curvePathMobile">
                    founders fresher org student customer B2B org student founders B2B org student fresher niche
                </textPath>
            </text>
        </svg>
    );
}
