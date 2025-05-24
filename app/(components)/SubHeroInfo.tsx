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
        "At Entrext, our journey is shaped by three core beliefs.",
        `It starts with ownership. We don’t hire leaders—we grow them. Everyone who joins us is seen as a future founder. you’re here because you believe in building something that truly matters. `,
        `Next, we don’t chase trends or go wide just to go global. We don’t want 1,000 people to just“like” what we make—we want 100 people to love it. Deeply. Passionately. And most importantly, we believe in learning by doing. We move fast because tech moves fast. We try, we fail, we adapt. If one success rises out of a thousand failures, that’s still a win.Because at the end of the day, We want people to feel not just satisfied, We don’t hide behind screens or systems. We’re just one call away.`
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
        <div className="mt-15 flex md:flex-row-reverse flex-col md:justify-between mb-44" ref={ref}>
            <div className="md:w-[800px] lg:w-[1000px] w-full font-mono md:text-2xl text-lg font-[500] md:space-y-6">
                <p>{renderAnimatedText(texts[0])}</p>
                <p>{renderAnimatedText(texts[1])}</p>
                <div className="hidden md:block">
                    <p>{renderAnimatedText(texts[2])}</p>
                </div>
            </div>
            <div className="w-[200px] text-md lg:text-lg lg:w-[250px] font-mono md:mt-0 mt-3">
                <h4>Why Entrext should matter to you ?</h4>
                <p>{"[Fundamental roots]"}</p>
            </div>
        </div>
    );
}
