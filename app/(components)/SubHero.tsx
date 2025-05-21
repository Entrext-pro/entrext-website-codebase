"use client";

import { delay, motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

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
        <div className="md:mt-20" ref={ref}>
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
                            useful apps and tools
                            <div className="inline ml-2">
                                [Logo]
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="overflow-hidden">
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

            <div className="text-center flex justify-center md:mt-6 mt-8 gap-2">
                <AnimatedColoredText text="En" color="#E6582A" />
                <AnimatedColoredText text="tr" color="#714438" />
                <AnimatedColoredText text="ex" color="#FBFFE9" />
                <AnimatedColoredText text="t" color="#080808" />
            </div>

        </div>
    );
}

function AnimatedColoredText({
    text,
    color,
}: {
    text: string;
    color: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start((i) => "visible");
        }
    }, [isInView, controls]);

    const letterVariants = {
        hidden: (i: number) => ({
            opacity: 0,
            y: 100,
            scale: 0.8,
            transition: {
                delay: i * 0.08,
                duration: 0.4,
                ease: "easeOut",
            },
        }),
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.08,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    const letters = text.split("");

    return (
        <div ref={ref} className="flex">
            {letters.map((char, i) => (
                <motion.span
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate={controls}
                    variants={letterVariants}
                    style={{ color }}
                    className="font-extrabold leading-none md:text-[410px] text-[97px]"
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
