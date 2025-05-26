"use client"
import { ReactLenis } from "lenis/react"
import type React from "react"

import { useTransform, motion, useScroll, type MotionValue } from "framer-motion"
import { type JSX, useRef } from "react"
import Image from "next/image"

const cards = [
  {
    title: "Knowx",
    description:
      "Matches you with students who can help you study the subjects you're stuck on.",
    src: "rock.jpg",
    link: "https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop",
    color: "#5196fd",
  },
  {
    title: "Leaderbase",
    description:
      'startups hire experienced tech executives by the hour for guidance.',
    src: "tree.jpg",
    link: "https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60",
    color: "#8f89ff",
  },
  {
    title: "Zissou",
    description:
      "Though he views photography as a medium for storytelling, Zissou's images don't insist on a narrative. Both crisp and ethereal.",
    src: "water.jpg",
    link: "https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop",
    color: "#4B70F5",
  },
  {
    title: "SecretSanta",
    description:
      "Friends anonymously suggest and vote on the perfect present while pooling money.",
    src: "house.jpg",
    link: "https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60",
    color: "#ed649e",
  },
  {
    title: "Herth",
    description:
      "Women sell their handmade goods and support each other globally.",
    src: "cactus.jpg",
    link: "https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop",
    color: "#fd521a",
  },
]

export default function StackingTextCards(): JSX.Element {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <ReactLenis root>
      <main ref={container} className="relative">
        <section className="w-full text-white">
          {cards.map((card, i) => {
            const targetScale = 1 - (cards.length - i) * 0.05
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
            )
          })}
        </section>
      </main>
    </ReactLenis>
  )
}

interface TextCardProps {
  i: number
  title: string
  description: string
  link: string
  color: string
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}

const TextCard: React.FC<TextCardProps> = ({ i, title, description, link, color, progress, range, targetScale }) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  })

  const scale = useTransform(progress, range, [1, targetScale])

  // Image zoom effect based on scroll progress
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 0])

  return (
    <div ref={container} className="h-screen w-full sticky top-0 flex items-center justify-center font-mono">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] h-[700px] w-full  rounded-2xl border-2 border-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] rounded-2xl pointer-events-none z-0" />

        <div className="relative z-10 h-full flex items-center">
          {/* Image Section - Left */}
          <div className="flex-1 flex items-center justify-center p-12">
            <motion.div
              className="relative w-[500px] h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              style={{
                scale: imageScale,
                rotate: imageRotate,
              }}
            >
              <Image src={link || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </motion.div>
          </div>

          {/* Content Section - Right */}
          <div className="flex-1 pr-16 pl-8">
            <motion.h2
              className="text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight text-white mb-18 underline underline-offset-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.h2>
            <motion.p
              className="text-lg md:text-2xl text-white/90 leading-relaxed"
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
  )
}
