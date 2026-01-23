"use client"

import { useEffect, useState } from "react"
import { RetroGridDemo } from "./RetroGridDemo"
import { motion } from "framer-motion"
import DiscordCommunity from "./DiscordCommunity"

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <div>
      <div className="md:mt-[90px] mt-[70px] md:h-[600px] h-auto min-h-[150px] overflow-hidden">
        <div className="text-[50px] sm:text-[180px] md:text-[160px] lg:text-[200px] font-[1000] leading-[0.9] md:leading-[1] tracking-tight flex flex-col">
          <AnimatedText text="ENTREPRENEUR'S" delay={0} className="" />
          <AnimatedText text="NEXT" delay={0.7} className="" />
        </div>
      </div>

      {/* Discord Community Section */}
      <DiscordCommunity />

      <div className="relative overflow-hidden w-full h-[400px] lg:h-[800px] md:mb-0 mb-32">
        <RetroGridDemo />
      </div>
    </div>
  )
}

function AnimatedText({
  text,
  delay = 0,
  className = "",
}: {
  text: string
  delay?: number
  className?: string
}) {
  const letters = text.split("")

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Fast letter animation
        delayChildren: delay,
      },
    },
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.div className={className} variants={container} initial="hidden" animate="visible">
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768)
    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  return isMobile
}
