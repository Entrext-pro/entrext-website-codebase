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
      "Submit an application detailing your AI product idea (if applicable), your audience, niche, or marketing potential (for content creators), and how you see your role in the project's growth. Key Questions: What problem does this AI product solve? Who is the target market? Are you looking to contribute as a founder (product idea) or as a content creator?",
    date: "Initial Phase",
    type: "start",
  },
  {
    id: "2",
    title: "Step 2: Discovery Call",
    description:
      "We conduct an in-depth call to evaluate the partnership. For Product Owners: Understanding your vision, commitment, and market fit. For Content Creators: Assessing your audience reach, branding potential, and content expertise. Focus Areas: Your role in shaping the product and its marketing, and alignment between our technical expertise and your strategic input.",
    date: "Evaluation Phase",
    type: "middle",
  },
  {
    id: "3",
    title: "Step 3: Evaluation & Selection",
    description:
      "Our team assesses the opportunity based on: Product Ideas: Scalability, feasibility, and alignment with our expertise. Content Creators: Audience size, engagement, and ability to drive user adoption. Acceptance Criteria: We select a limited number of partners per year based on strategic alignment and potential impact.",
    date: "Selection Phase",
    type: "middle",
  },
  {
    id: "4",
    title: "Step 4: Partnership Agreement",
    description:
      "Once selected, we formalize the partnership with an equity-based agreement. For Product Owners: We own 30-40% of the product, and you retain the majority stake while we build and launch it. For Content Creators: You receive 20% equity, contributing through brand positioning, marketing, and audience growth. Equity is held until exit, meaning you benefit from long-term product growth and a future sale or acquisition.",
    date: "Agreement Phase",
    type: "middle",
  },
  {
    id: "5",
    title: "Step 5: Development Process Begins",
    description:
      "We assemble a team of AI engineers, designers, and project managers to bring the product to life. For Product Owners: Active involvement in feature development, user testing, and feedback. For Content Creators: Creating content, building an audience, and positioning the product in the market. Ongoing Communication: Weekly or bi-weekly check-ins for alignment and updates.",
    date: "Development Phase",
    type: "middle",
  },
  {
    id: "6",
    title: "Step 6: MVP Launch & Market Testing",
    description:
      "Once the MVP is ready: Launch Support: Early user acquisition, testing, and refinement. Marketing & Growth: Leveraging content creators' platforms for visibility. Focus Areas: Collecting user feedback and optimizing the product, and content-driven marketing strategies for scaling.",
    date: "Launch Phase",
    type: "middle",
  },
  {
    id: "7",
    title: "Step 7: Long-Term Partnership & Exit",
    description:
      "We continue working together post-launch for: Iterative Improvements: Adapting based on market trends and user needs. Scaling & Growth Strategies: Expanding the product reach and revenue streams. Exit Planning: When a viable acquisition opportunity arises, we secure an exit that benefits all partners.",
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Partnership Process</h1>
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
