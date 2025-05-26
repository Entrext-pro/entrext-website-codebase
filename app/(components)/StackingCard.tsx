"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, type MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const cards = [
  {
    title: "Knowx",
    description: "Matches you with students who can help you study the subjects you're stuck on.",
    link: "https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop",
    color: "#5196fd",
  },
  {
    title: "Leaderbase",
    description: "Startups hire experienced tech executives by the hour for guidance.",
    link: "https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60",
    color: "#8f89ff",
  },
  {
    title: "Zissou",
    description: "Though he views photography as a medium for storytelling, Zissou's images don't insist on a narrative.",
    link: "https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop",
    color: "#4B70F5",
  },
  {
    title: "SecretSanta",
    description: "Friends anonymously suggest and vote on the perfect present while pooling money.",
    link: "https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60",
    color: "#ed649e",
  },
  {
    title: "Herth",
    description: "Women sell their handmade goods and support each other globally.",
    link: "https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop",
    color: "#fd521a",
  },
];

export default function StackingTextCards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main ref={container} className="relative">
        <section className="w-full text-white">
          {cards.map((card, i) => {
            const targetScale = 1 - (cards.length - i) * 0.05;
            return (
              <TextCard
                key={i}
                i={i}
                title={card.title}
                description={card.description}
                link={card.link}
                color={card.color}
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

interface TextCardProps {
  i: number;
  title: string;
  description: string;
  link: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const TextCard = ({
  i,
  title,
  description,
  link,
  color,
  progress,
  range,
  targetScale,
}: TextCardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 0]);

  return (
    <div ref={container} className="h-screen mt-20 w-full sticky top-0 flex items-center justify-center font-mono">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] md:h-[90vh] h-[600px] max-h-[800px] w-[95%] md:w-full rounded-2xl border-2 border-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] rounded-2xl pointer-events-none z-0" />

        <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center px-6 py-8 md:px-12 md:py-0">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <motion.div
              className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              style={{
                scale: imageScale,
                rotate: imageRotate,
              }}
            >
              <Image src={link || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between md:text-left">
            <motion.h2
              className="text-3xl sm:text-5xl md:text-5xl xl:text-6xl font-bold leading-tight text-white mb-6 underline underline-offset-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-3xl text-white/90 leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
