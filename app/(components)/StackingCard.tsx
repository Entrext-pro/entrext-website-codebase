'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, JSX } from 'react';
import Image from 'next/image';
const projects = [
    {
        title: 'Knowx',
        description:
            `Matches you with students who can help you study the subjects you're stuck on.`,
        src: 'rock.jpg',
        link: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop',
        color: '#5196fd',
    },
    {
        title: 'Leaderbase',
        description:
            `startups hire experienced tech executives by the hour for guidance.`,
        src: 'tree.jpg',
        link: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60',
        color: '#8f89ff',
    },
    {
        title: 'SecretSanta',
        description:
            `Friends anonymously suggest and vote on the perfect present while pooling money.`,
        src: 'water.jpg',
        link: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop',
        color: '#13006c',
    },
    {
        title: 'Herth',
        description:
            'Women sell their handmade goods and support each other globally.',
        src: 'house.jpg',
        link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
        color: '#ed649e',
    },
    {
        title: 'Borrowd',
        description:
            `platform to rent out your unused stuff or borrow what you need in UAE`,
        src: 'cactus.jpg',
        link: 'https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop',
        color: '#fd521a',
    },
];
export default function StackingCards(): React.JSX.Element {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });
    return (
        <ReactLenis root>
            <main className='' ref={container}>

                <section className='text-white w-full '>
                    {projects.map((project, i) => {
                        const targetScale = 1 - (projects.length - i) * 0.05;
                        return (
                            <Card
                                key={`p_${i}`}
                                i={i}
                                url={project?.link}
                                src={project?.src}
                                title={project?.title}
                                color={project?.color}
                                description={project?.description}
                                progress={scrollYProgress}
                                range={[i * 0.25, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </section>

            </main>
        </ReactLenis>
    );
}
interface CardProps {
    i: number;
    title: string;
    description: string;
    src: string;
    url: string;
    color: string;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}
export const Card: React.FC<CardProps> = ({
    i,
    title,
    description,
    src,
    url,
    color,
    progress,
    range,
    targetScale,
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start'],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className='h-screen flex items-center justify-center sticky top-0'
        >
            <motion.div
                style={{
                    backgroundColor: color,
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className={`flex flex-col relative -top-[25%] h-[450px] w-[70%] rounded-md p-10 origin-top`}
            >
                <h2 className='text-2xl text-center font-semibold'>{title}</h2>
                <div className={`flex flex-col sm:flex-row h-full mt-5 gap-6 sm:gap-10`}>
                    {/* Image on top for mobile */}
                    <div className={`relative w-full sm:w-[40%] h-[200px] sm:h-full rounded-lg overflow-hidden`}>
                        <motion.div className='w-full h-full' style={{ scale: imageScale }}>
                            <Image fill src={url} alt='image' className='object-cover' />
                        </motion.div>
                    </div>

                    {/* Text below for mobile */}
                    <div className='w-full sm:w-[40%] relative sm:top-[10%]'>
                        <p className='md:text-xl text-sm capitalize'>{description}</p>
                        <span className='hidden sm:flex items-center gap-2 pt-2'>
                        </span>
                    </div>
                </div>

            </motion.div>
        </div>
    );
};