"use client";

import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
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
        <div className="mt-10" ref={ref}>
            <motion.div
                className="w-full flex justify-end md:text-3xl text-sm md:text-left text-right"
                initial="hidden"
                animate={controls}
                variants={fadeFromRight}
            >
                <div className="w-2xl flex">
                    <div className="font-[500] uppercase md:mt-0 mt-[20px]">
                        A product studio ☴ that turns everyday problems into smart,
                        useful apps and tools
                        <div className="inline ml-2">
                            [Logo]
                        </div>
                    </div>
                </div>
            </motion.div>

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

            <div className="text-center flex justify-center mt-6 gap-2">
                <AnimatedColoredText text="En" colors={["#e6582a", "#714438", "#fbffe9", "#000"]} />
                <AnimatedColoredText text="tr" colors={["#714438", "#fbffe9", "#000", "#e6582a"]} />
                <AnimatedColoredText text="ex" colors={["#fbffe9", "#000", "#e6582a", "#714438"]} />
                <AnimatedColoredText text="t" colors={["#000", "#e6582a", "#714438", "#fbffe9"]} />
            </div>
        </div>
    );
}

function AnimatedColoredText({
    text,
    colors,
}: {
    text: string;
    colors: string[];
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const fontSize = useTransform(scrollYProgress, [0, 1], [
        "clamp(100px, 20vw, 300px)",
        "clamp(60px, 8vw, 220px)",
    ]);

    const color = useTransform(
        scrollYProgress,
        colors.map((_, i) => i / (colors.length - 1)), 
        colors
    );

    return (
        <motion.div
            ref={ref}
            style={{ fontSize, color }}
            className="font-extrabold leading-none"
        >
            {text}
        </motion.div>
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
