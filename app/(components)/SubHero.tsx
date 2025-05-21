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
        <div className="md:mt-20 mt-5" ref={ref}>
            <div className="overflow-hidden">
                <motion.div
                    className="w-full flex justify-end md:text-3xl"
                    initial="hidden"
                    animate={controls}
                    variants={fadeFromRight}
                >
                    <div className="md:w-2xl w-[300px] md:text-left text-right flex">
                        <div className="font-[500] uppercase md:mt-0 mt-[20px]">
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


            <div className="text-center flex justify-center md:mt-6 mt-16 gap-2">
                <AnimatedColoredText text="En" color="#E6582A" />
                <AnimatedColoredText text="tr" color="#714438" />
                <AnimatedColoredText text="ex" color="#FBFFE9"/>
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
    return (
        <div
            style={{ color}}
            className="font-extrabold leading-none md:text-[400px] text-[95px]"
        >
            {text}
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
