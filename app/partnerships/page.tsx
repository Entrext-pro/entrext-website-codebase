"use client"
import { FocusCards } from "@/components/ui/focus-cards";
import AnimatedTimeline from "../(components)/AnimatedTimeLine";
import PartnershipPlans from "../(components)/PartnershipsPlans";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Partnerships() {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="w-full flex flex-col items-center">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4 py-8 font-mono font-bold text-center">
                    How it Works
                </div>

                <div className="flex flex-col items-center text-center space-y-2 mb-8">
                    <div className="text-lg sm:text-xl font-semibold">
                        Partnership Model
                    </div>
                    <div className="text-base sm:text-lg max-w-xl">
                        AI Product Development Model (For Non-Tech Founders & Content Creators)
                    </div>
                </div>
            </div>

            <div className="flex justify-center mb-16">
                <FocusCardsDemo />
            </div>

            <div className="flex flex-col items-center text-center text-base sm:text-lg space-y-2 max-w-3xl mx-auto mb-24">
                <p>
                    We provide the technical and operational infrastructure while you contribute your vision, audience, or expertise.
                </p>
                <p>
                    You receive ownership in the product until we exit.
                </p>
            </div>

            <div className="mt-24 sm:mt-32">
                <AnimatedTimeline />
            </div>

            <div className="mt-24">
                <PartnershipPlans />
            </div>

            <div className="w-full flex justify-center mt-24">
                <WhyPartner />
            </div>

            <div className="mt-48 sm:mt-72">
                <FAQSection />
            </div>
        </div>
    );

}


function FocusCardsDemo() {
  const cards = [
    {
      title: "Partnership with Non-Tech Founders",
      description: "If you have a clear idea or problem to solve, and you bring strengths in sales, branding, or distribution — but don't have a tech team — pitch us. We might just build the product with you and co-create something valuable.",
    },
    {
      title: "Partnership with Content Creators", 
      description: "If you're great at storytelling, know how to connect with people, and want to be the face or voice of a product that fits your audience — reach out. You might find the perfect product to grow with.",
    },
    {
      title: "Partnership with Tech Builders",
      description: "If you're strong in development, product thinking, or engineering and want to co-lead something meaningful — we'd love to connect. We're always looking for builders ready to lead the next wave.",
    }
  ];

  return <FocusCards cards={cards} />;
}

function WhyPartner() {
    return (
        <div className="flex flex-col w-full max-w-[1600px] mx-auto mt-20 md:mt-56 gap-5 border border-slate-600 rounded-2xl p-6 md:p-10 shadow-md">
            <div>
                <h1 className="text-3xl md:text-5xl font-[600] text-center md:text-left">Why Partner With Us?</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 text-xl md:text-2xl">
                <div className="flex-1 text-center md:text-left ">
                    <h1 className="font-[500]">Zero Upfront Cost</h1>
                    <p className="text-slate-600">We build, you grow.</p>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h1 className="font-[500]">Expert Team</h1>
                    <p className="text-slate-600">AI engineers, designers, and marketers.</p>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h1 className="font-[500]">Long-Term Partnership</h1>
                    <p className="text-slate-600">You retain equity until exit.</p>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h1 className="font-[500]">Scalability Focused</h1>
                    <p className="text-slate-600">We align with your vision for growth.</p>
                </div>
            </div>
        </div>
    )
}

const FAQContent = [
    {
        id: 1,
        title: "What is the Entrext Product Partnership Model?",
        Description:
            "It’s a builder-first partnership model. We work with people who have strong ideas, unique reach, or deep skills — and want to co-create something meaningful. Whether you're from sales, branding, marketing, content, or tech, we partner to build real products together. We don’t just look for “users” — we look for people ready to lead.",
    },
    {
        id: 2,
        title: "Who do you partner with?",
        Description:
            "We work with three kinds of people:\n\n- **Non-tech founders** – You have a clear problem or idea and bring strengths in branding, sales, or distribution. We bring the tech and build with you.\n\n- **Content creators** – You’re great at storytelling and connecting with an audience. You can be the voice or face of a product that matches your vibe.\n\n- **Tech builders** – You’re strong in development, product, or engineering and want to lead or co-lead something new and meaningful.",
    },
    {
        id: 3,
        title: "What kind of products do you build through partnerships?",
        Description:
            "Mostly AI-driven tools and platforms that solve real problems. Some examples:\n\n- AI-based productivity tools\n- Smart automation or assistants\n- Niche SaaS platforms\n- AI tools for creators, educators, or businesses\n- Community-powered tools or marketplaces\n\nIf the idea is clear, useful, and exciting — we’re interested.",
    },
    {
        id: 4,
        title: "How does the partnership work in practice?",
        Description:
            "You bring your vision, energy, or distribution skills — we bring product strategy, design, and development. We stay closely involved throughout. Everything is flexible and shaped by conversations. There’s no one-size-fits-all model — we build it together.",
    },
    {
        id: 5,
        title: "What’s the difference between partnering as a non-tech founder, creator, or tech builder?",
        Description:
            "- **Non-tech founders** often lead the vision and go-to-market while we build the product with them.\n\n- **Content creators** usually help shape and grow a product that aligns with their audience.\n\n- **Tech builders** may take the lead on product creation and co-own delivery and vision.\n\nEvery role is different — but in all cases, we look for leadership qualities.",
    },
    {
        id: 6,
        title: "Do I need to invest money to partner?",
        Description:
            "Usually, no upfront money is needed. But if your product idea has fixed third-party costs (like external APIs or cloud services), you may need to cover those. We keep it transparent and figure it out together as we scope the project.",
    },
    {
        id: 7,
        title: "How long does it take to build a product?",
        Description:
            "We aim to launch a working first version (MVP) in 2 to 4 months. If the idea is super focused, we might move even faster. We believe in building quickly, learning from users, and improving as we go.",
    },
    {
        id: 8,
        title: "Can I bring my own team?",
        Description:
            "Yes. If you already have people (like designers, developers, or marketers), we’re happy to collaborate with them. We’ll still lead on AI and product development, but we’re always open to co-creating with teams that work well together.",
    },
    {
        id: 9,
        title: "What happens if I raise funding later?",
        Description:
            "That’s great. Just keep us in the loop early so we can align our roadmap, timelines, and team goals with your next steps. We support long-term builders and are happy to adapt with you.",
    },
    {
        id: 10,
        title: "What if the product doesn’t take off?",
        Description:
            "Not every product works right away — and that’s okay. We believe in trying, learning, and adapting. If it doesn’t work, we explore tweaks, pivots, or sometimes even completely new ideas together. We’re not here to “ship and forget.” We’re in this to build things that last.",
    },
];


function FAQSection() {
    return (
        <div className="md:mt-10 mt-32">
            <div className="w-full flex flex-col items-center">
                <h1 className="md:text-9xl text-4xl font-mono [transform:scale(1.5,1.4)] font-bold">FAQS</h1>
                <p className="md:w-[450px] w-[350px] flex text-center mt-10 mb-20 md:text-2xl text-lg">
                    Here are some of the most frequently asked questions on Extrext
                </p>
            </div>

            <div>
                <FAQSubSection />
            </div>
        </div>
    );
}

function FAQSubSection() {
    const [FAQSelect, setFAQSelect] = useState<number | null>(null);

    return (
        <div >
            {FAQContent.map((content, index) => (
                <div key={index} className="w-full md:border-t-4 border-t-2 border-gray-500 border-dotted md:px-10 md:py-7 py-3 font-sans">
                    <div
                        onClick={() => setFAQSelect(FAQSelect === index ? null : index)}
                        className="w-full flex justify-between items-start mb-2 cursor-pointer">
                        <h4 className="font-bold md:text-[28px] text-[12px] md:w-[80%] w-[300px]">{content.title}</h4>
                        <button
                            onClick={() => setFAQSelect(FAQSelect === index ? null : index)}
                            className="md:py-3 md:px-2 py-1 px-2 border md:text-xl md:w-[12%] text-sm w-[100px] border-black rounded-lg font-[500] cursor-pointer hover:bg-black/80 hover:text-white"
                        >
                            {"View more"}
                        </button>
                    </div>

                    <AnimatePresence initial={false}>
                        {FAQSelect === index && (
                            <motion.div
                                key="content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                className="overflow-hidden md:text-[28px] text-[12px] "
                            >
                                <div>
                                    {content.Description === ""
                                        ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nulla ab natus animi itaque nisi minus quisquam excepturi saepe nobis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis officiis cupiditate ab distinctio quae sed eum, dicta doloribus quia quidem!"
                                        : content.Description}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
