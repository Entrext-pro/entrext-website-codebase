"use client"
import { useEffect, useState, useRef } from "react"

const textItems = ["MICRO-SAAS", "AI TOOLS", "VOICE-ASSIST", "MARKETPLACES", "GAMES"]

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
    <div className=" bg-black md:min-h-screen md:h-[2500px]  font-mono flex flex-col items-center md:justify-center md:py-10 py-4  overflow-hidden">

      <div className="">
        {textItems.map((text, index) => (
          <div
            key={index}
            ref={(el) => { sectionRefs.current[index] = el }}
            className="flex items-center justify-center w-full md:pb-44 pb-12"
            style={{
              filter: activeIndex === index ? "blur(0px)" : "blur(8px)",
              opacity: activeIndex === index ? 1 : 0.3,
              transition: "all 0.3s ease",
            }}
          >
            <h1 className="tracking-tighter [transform:scale(1,2)] font-bold text-center text-white bg-clip-text blur-[0.5px]">
              <div className="flex items-start">
                <div className="text-5xl md:text-[12vw] md:mt-0 mt-5">
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



