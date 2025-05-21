'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function SubHeroInfo() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 }); 
    const controls = useAnimation();

    const wordVariants = {
        hidden: (i: number) => ({
            opacity: 0,
            y: 10,
            transition: {
                delay: i * 0.02,
                duration: 0.3,
                ease: 'easeIn',
            },
        }),
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
                ease: 'easeOut',
            },
        }),
    };

    useEffect(() => {
        if (isInView) {
            controls.start((i) => 'visible');
        }
    }, [isInView, controls]); 

    const texts = [
        "What Entrext do?",
        "We find everyday problems that real people face—like finding parking, social media for experience, text based games, managing time, or shopping easier—and we build tech products to fix them.",
    ];

    const renderAnimatedText = (text: string) => {
        const words = text.split(" ");
        return words.map((word, i) => (
            <motion.span
                key={i}
                className="inline-block mr-2"
                variants={wordVariants}
                initial="hidden"
                animate={controls}
                custom={i}
            >
                {word}
            </motion.span>
        ));
    };

    return (
        <div className="mt-15 flex md:flex-row-reverse flex-col md:justify-between" ref={ref}>
            <div className="md:w-[800px] w-full font-mono md:text-4xl text-2xl font-[500] md:space-y-6">
                {texts.map((text, i) => (
                    <p key={i}>{renderAnimatedText(text)}</p>
                ))}
            </div>
            <div className="w-[200px] text-sm font-mono md:mt-0 mt-3">
                <h4>Don Valentine</h4>
                <p>{"[Founder of Sequoia]"}</p>
            </div>
        </div>
    );
}
