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

    // Use \n\n to mark paragraph breaks
    const fullText = [
        "At Entrext, our journey is shaped by three core beliefs.",
        "It starts with ownership. We don’t hire leaders, we grow them. Everyone who joins us is seen as a future founder. You’re here because you believe in building something that truly matters.",
        "Next, we don’t chase trends or go wide just to go global. We don’t want 1,000 people to just “like” what we make, we want 100 people to love it. Deeply. Passionately.",
        "And most importantly, we believe in learning by doing. We move fast because tech moves fast. We try, we fail, we adapt. If one success rises out of a thousand failures, that’s still a win.",
        "Because at the end of the day, we want people to feel not just satisfied. We don’t hide behind screens or systems. We’re just one call away."
    ].join('\n\n'); // Mark paragraph breaks

    const renderAnimatedText = (text: string) => {
        const paragraphs = text.split('\n\n');
        let wordIndex = 0;

        return paragraphs.map((paragraph, pi) => {
            const words = paragraph.split(' ');
            const animatedWords = words.map((word, i) => {
                const index = wordIndex++;
                return (
                    <motion.span
                        key={index}
                        className="inline-block mr-2 text-3xl"
                        variants={wordVariants}
                        initial="hidden"
                        animate={controls}
                        custom={index}
                    >
                        {word}
                    </motion.span>
                );
            });

            return (
                <p key={pi} className="mb-5 flex flex-wrap leading-relaxed">
                    {animatedWords}
                </p>
            );
        });
    };

    return (
        <div className="mt-15 flex md:flex-row-reverse flex-col md:justify-between md:px-28 md:mb-44 mb-20" ref={ref}>
            <div className="md:w-[800px] lg:w-[1000px] w-full font-mono md:text-2xl font-[500] space-y-5">
                {renderAnimatedText(fullText)}
            </div>
            <div className="w-[200px] text-md lg:text-xl lg:w-[250px] font-mono md:mt-0 mt-3">
                <h4>Why Entrext should matter to you?</h4>
                <p>{"[Fundamental roots]"}</p>
            </div>
        </div>
    );
}
