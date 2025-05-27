"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export default function SubHeroInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const controls = useAnimation()

  const wordVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      y: 10,
      transition: {
        delay: i * 0.01,
        duration: 0.05,
        ease: "easeIn",
      },
    }),
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.01,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  useEffect(() => {
    if (isInView) {
      controls.start((i) => "visible")
    }
  }, [isInView, controls])

  const fullText = [
    "At Entrext, our journey is shaped by three core beliefs.",
    "It starts with ownership. We don't hire leaders, we grow them. Everyone who joins us is seen as a future founder. You're here because you believe in building something that truly matters.",
    "Next, we don't chase trends or go wide just to go global. We don't want 1,000 people to just \"like\" what we make, we want 100 people to love it. Deeply. Passionately.",
    "And most importantly, we believe in learning by doing. We move fast because tech moves fast. We try, we fail, we adapt. If one success rises out of a thousand failures, that's still a win.",
    "Because at the end of the day, we want people to feel not just satisfied. We don't hide behind screens or systems. We're just one call away.",
  ].join("\n\n")

  // Define the exact text that should be bold
  const boldTexts = [
    "We don't hire leaders, we grow them. Everyone who joins us is seen as a future founder.",
    'We don\'t want 1,000 people to just "like" what we make, we want 100 people to love it. Deeply. Passionately.',
    "We don't hide behind screens or systems. We're just one call away.",
  ]

  const renderAnimatedText = (text: string) => {
    const allWords = text.split(/\s+/)
    const wordIndex = 0

    const boldWordMap = new Set<number>()

    boldTexts.forEach((boldText) => {
      const boldWords = boldText.split(/\s+/)
      const textWords = text.split(/\s+/)

      for (let i = 0; i <= textWords.length - boldWords.length; i++) {
        let match = true
        for (let j = 0; j < boldWords.length; j++) {
          if (textWords[i + j] !== boldWords[j]) {
            match = false
            break
          }
        }
        if (match) {
          for (let j = 0; j < boldWords.length; j++) {
            boldWordMap.add(i + j)
          }
          break
        }
      }
    })

    const paragraphs = text.split("\n\n")
    let currentWordIndex = 0

    return paragraphs.map((paragraph, pi) => {
      const words = paragraph.split(/\s+/)

      const animatedWords = words.map((word, i) => {
        const globalWordIndex = currentWordIndex
        const isBold = boldWordMap.has(globalWordIndex)
        currentWordIndex++

        return (
          <motion.span
            key={globalWordIndex}
            className="inline-block mr-2 md:text-3xl text-sm"
            style={{
              fontWeight: isBold ? 800 : 400,
              fontFamily: "monospace",
            }}
            variants={wordVariants}
            initial="hidden"
            animate={controls}
            custom={globalWordIndex}
          >
            {word}
          </motion.span>
        )
      })

      return (
        <p key={pi} className="mb-5 flex flex-wrap leading-relaxed md:ml-0 ml-2">
          {animatedWords}
        </p>
      )
    })
  }

  return (
    <div
      className="mt-15 flex md:flex-row-reverse flex-col-reverse md:justify-between md:px-28 md:mb-64 mb-20 font-mono"
      ref={ref}
    >
      <div className="md:w-[800px] lg:w-[1000px] w-full md:text-2xl space-y-5">{renderAnimatedText(fullText)}</div>
      <div className="w-[200px] text-md lg:text-xl lg:w-[250px] font-mono md:mb-0 mb-14 md:ml-0 ml-2">
        <h4>Why Entrext should matter to you?</h4>
        <p>{"[Fundamental roots]"}</p>
      </div>
    </div>
  )
}
