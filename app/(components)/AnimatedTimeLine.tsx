"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface TimelineEvent {
  id: string
  title: string
  description: string
  date: string
  type: "start" | "middle" | "end"
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    title: "Step 1: Application Submission",
    description:
      "Submit an application detailing your AI product idea (if applicable), your audience, niche, or technical background and how you see your role in the product’s growth Key Questions: What problem does this AI product solve? Who is the target market? Are you applying as a Non-Tech Founder, Content Creator, or Tech Builder?",
    date: "Initial Phase",
    type: "start",
  },
  {
    id: "2",
    title: "Step 2: Discovery Call",
    description:"We conduct an in-depth call to evaluate your role in the team and your alignment with the product vision. For Non-Tech Founders: Understanding your idea, vision, and market understanding For Content Creators: Assessing your audience reach, positioning potential, and storytelling skills For Tech Builders: Exploring your experience, build capabilities, and product instincts Focus Areas: The role you’ll play in shaping, growing, and launching the product — and how your strengths align with the rest of the team.",
    date: "Evaluation Phase",
    type: "middle",
  },
  {
    id: "3",
    title: "Step 3: Evaluation & Selection",
    description:
      "We assess opportunities based on role and contribution: For Non-Tech Founders: Idea strength, market fit, and leadership potential For Content Creators: Audience engagement, niche fit, and growth potential For Tech Builders: Technical skill, product vision, and shipping ability Selection Criteria: We select a limited number of core team members based on strategic fit, impact potential, and shared vision.",
    date: "Selection Phase",
    type: "middle",
  },
  {
    id: "4",
    title: "Step 4: Core Team Formation",
    description:"Once selected, we define your role as a core team contributor. Non-Tech Founders: You lead product direction, market validation, and user feedback loops Content Creators: You drive brand voice, audience growth, and content-led traction Tech Builders: You lead product development, prototyping, and iterative delivery",
    date: "Alignment Phase",
    type: "middle",
  },
  {
    id: "5",
    title: "Step 5: Development Process Begins",
    description:"We assemble a dedicated team of AI engineers, designers, and product leads. Non-Tech Founders: Work closely with the team on feature prioritization, user testing, and feedback Content Creators: Create compelling narratives, build audience, and position the product Tech Builders: Architect, build, and ship core product features Ongoing Communication: Weekly or bi-weekly check-ins for alignment and velocity.",
    date: "Build Phase",
    type: "middle",
  },
  {
    id: "6",
    title: "Step 6: MVP Launch & Market Testing",
    description:"Launch Support: Drive early users, test key assumptions, refine based on insights Marketing & Growth: Leverage creator-driven channels and organic strategies Focus Areas: Feedback loops, early traction, and marketing experiments for scale",
    date: "Launch Phase",
    type: "middle",
  },
  {
    id: "7",
    title: "Step 7: Long-Term Partnership & Exit",
    description:"Post-launch, the team continues to build, grow, and scale the product together: Iterative Improvements: Shape the roadmap through user insights and market changes Growth Strategy: Expand reach, monetize, and explore new markets Outcome-Oriented: Stay aligned on long-term impact, sustainability, and optional exit opportunities",
    date: "Growth & Exit Phase",
    type: "end",
  },
]

export default function AnimatedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Joining Entrext Process</h1>
          <p className="text-lg text-gray-600">Your journey from application to successful partnership</p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Background line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full z-0" />

          {/* Animated red line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-red-500 origin-top z-10"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16 z-20 relative">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={event.id}
                  className={`
                    flex flex-col md:flex-row 
                    ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} 
                    items-center gap-8
                  `}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: false, margin: "-100px" }}
                >
                  {/* Content */}
                  <div className={`md:w-5/12 w-full ${isLeft ? "md:pr-8 text-right md:text-right" : "md:pl-8 text-left md:text-left"}`}>
                    <motion.div
                      className={`p-6 rounded-xl shadow-md transition-all ${
                        event.type === "start" || event.type === "end"
                          ? "bg-gray-100 border border-gray-300"
                          : "bg-white border border-gray-800"
                      }`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          event.type === "start" || event.type === "end"
                            ? "text-gray-600"
                            : "text-gray-900"
                        }`}
                      >
                        {event.title}
                      </h3>
                      <p className={`text-sm mb-3 text-gray-500`}>{event.date}</p>
                      <p
                        className={`text-base leading-relaxed ${
                          event.type === "start" || event.type === "end"
                            ? "text-gray-600"
                            : "text-gray-800"
                        }`}
                      >
                        {event.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Dot */}
                  <div className="relative z-10">
                    <motion.div
                      className={`w-6 h-6 rounded-full border-4 ${
                        event.type === "start" || event.type === "end"
                          ? "bg-gray-400 border-gray-300"
                          : "bg-gray-900 border-gray-800"
                      }`}
                      whileInView={{
                        scale: [0.8, 1.2, 1],
                        transition: { duration: 0.6, ease: "easeOut" },
                      }}
                    />
                  </div>

                  {/* Spacer (keeps layout balance on md+) */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
