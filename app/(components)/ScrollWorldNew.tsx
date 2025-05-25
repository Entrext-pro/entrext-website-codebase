"use client"
import { useEffect, useState, useRef } from "react"
import type { JSX } from "react/jsx-runtime"
import { animate, scroll, spring } from 'motion';
import { ReactLenis } from 'lenis/react';
import Image from "next/image";

const textItems = ["MICROSAAS", "AI TOOLS", "VOICE-ASSIST", "MARKETPLACES", "GAMES"]

export default function ScrollTextBlur() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const viewportCenter = scrollY + viewportHeight / 2

      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect()
          const sectionCenter = scrollY + rect.top + rect.height / 2
          const distance = Math.abs(viewportCenter - sectionCenter)

          if (distance < closestDistance) {
            closestDistance = distance
            closestIndex = index
          }
        }
      })

      setActiveIndex(closestIndex)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-black min-h-screen md:h-[2500px] flex flex-col items-center md:justify-center md:py-10 p-4  overflow-hidden">

      <div className="text-white w-full flex md:flex-row flex-col md:gap-0 gap-5 justify-around items-start font-mono md:mb-56 mb-20">

        <div className="flex gap-2 items-center">
          <p className="w-8 h-8 rounded-full flex justify-center items-center text-2xl bg-white text-black">E</p>
          <p className="text-xl">We can help you</p>
        </div>

        <div className="md:text-xl text-sm md:w-[700px]">
          <div className="flex gap-2">
            <p>{`//`}</p>
            <p>{`Stand out from your competitors`}</p>
          </div>
          <div className="flex gap-2">
            <p>{`//`}</p>
            <p>{`Have stunning visuals for your brand`}</p>
          </div>
          <div className="flex gap-2">
            <p>{`//`}</p>
            <p>{`Create landing pages that convert customers / impress investors`}</p>
          </div>
          <div className="flex gap-2">
            <p>{`//`}</p>
            <p>{`Build your digital products`}</p>
          </div>
        </div>

        <div className="md:w-[500px] md:p-2 md:text-xl text-sm flex flex-wrap">
          <p>{"We welcome all industries, And we’re happy to learn all about you and your business"}</p>
        </div>
      </div>

      <div className="">
        {textItems.map((text, index) => (
          <div
            key={index}
            ref={(el) => { sectionRefs.current[index] = el }}
            className="flex items-center justify-center w-full md:pb-44 pb-10"
            style={{
              filter: activeIndex === index ? "blur(0px)" : "blur(8px)",
              opacity: activeIndex === index ? 1 : 0.3,
              transition: "all 0.5s ease",
            }}
          >
            <h1 className="tracking-tighter [transform:scale(1,2)] font-bold text-center text-white bg-clip-text blur-[0.5px]">
              <div className="flex items-start">
                <div className="text-4xl md:text-[13rem]">
                  {text}
                </div>
                <div className="md:block hidden text-5 pt-10 text-yellow-300 pl-2">
                  {`[0${index + 1}]`}
                </div>
              </div>

            </h1>
          </div>
        ))}
      </div>
    </div>
  )
}



