"use client"
import { FocusCards } from "@/components/ui/focus-cards";
import AnimatedTimeline from "../(components)/AnimatedTimeLine";
import PartnershipPlans from "../(components)/PartnershipsPlans";
import { useState } from "react";
import { AnimatePresence,motion } from "framer-motion";

export default function Partnerships() {
    return <div className="w-full">
        <div>
            <div className="w-full flex flex-col items-center">
                <div className="text-7xl px-10 py-10 font-mono font-[700]">
                    How it Works
                </div>

                <div className="flex flex-col items-center text-xl">
                    <div>
                        Partnership Model
                    </div>
                    <div className="text-lg">
                        AI Product Development Model (For Non-Tech Founders & Content Creators)
                    </div>
                </div>
            </div>

            <div className="flex justify-around">
                <FocusCardsDemo />
            </div>

            <div className="flex flex-col items-center text-lg">
                <p>We provide the technical and operational infrastructure while you contribute your vision, audience, or expertise.</p>
                <p>You receive ownership in the product until we exit.</p>
            </div>
        </div>

        <div className="mt-32">
            <AnimatedTimeline/>
        </div>

        <div>
            <PartnershipPlans/>
        </div>

        <div className="w-full flex justify-center">
            <WhyPartner/>
        </div>

        <div className="mt-72">
            <FAQSection/>
        </div>
    </div>
}


function FocusCardsDemo() {
    const cards = [
        {
            title: "Non-Tech Founders",
            description: "If you have an AI product idea but lack the technical expertise to build it.",
        },
        {
            title: "Content Creators",
            description: "If you want to be the face of an AI product and help market, promote, and grow it.",
        }
    ];

    return <FocusCards cards={cards} />;
}

function WhyPartner(){
    return <div className="flex flex-col w-[1600px] mt-56 gap-5 border border-slate-600 rounded-2xl p-10 shadow-md">
        <div>
            <h1 className="text-5xl font-[600]">Why Partner With Us?</h1>
        </div>
        <div className="flex justify-between text-2xl">
            <div className="">
                <h1>Zero Upfront Cost</h1>
                <p className="text-slate-600">We build, you grow.</p>
            </div>
            <div>
                <h1>Expert Team</h1>
                <p className="text-slate-600">AI engineers, designers, and marketers.</p>
            </div>
            <div>
                <h1>Long-Term Partnership</h1>
                <p className="text-slate-600">You retain equity until exit.</p>
            </div>
            <div>
                <h1>Scalability Focused</h1>
                <p className="text-slate-600">We align with your vision for growth.</p>
            </div>
        </div>
    </div>
}

const FAQContent = [
  {
    id: 1,
    title: "What is the AI Product Partnership model?",
    Description:
      "This is an equity-based program where we partner with:\n\n- Non-tech founders with AI product ideas but no technical skills.\n- Content creators who want to be the face of an AI product.\n- Community users who are interested in using or testing our AI products.\n\nInstead of charging upfront fees, we take 30–40% equity for full product development or 20% equity if you're a content creator helping grow the product.",
  },
  {
    id: 2,
    title: "What kind of AI products do you develop?",
    Description:
      "We focus on AI-driven tools that have market potential, including:\n\n✅ AI-powered content creation tools\n✅ AI-driven automation platforms\n✅ AI SaaS (Software as a Service) products\n✅ AI marketing and analytics tools\n✅ AI chatbots and virtual assistants",
  },
  {
    id: 3,
    title: "Who can apply for this partnership?",
    Description:
      "✅ Non-tech founders who have a great AI product idea but no technical expertise.\n✅ Content creators who want to promote and scale an AI product.\n✅ Community members who want early access to cutting-edge AI products.",
  },
  {
    id: 4,
    title: "What’s the difference between the Non-Tech Founder and the Content Creator Plan?",
    Description:
      "Non-Tech Founder Plan (30–40% Equity) → We build your entire AI product from scratch, handling development, design, and strategy.\n\nContent Creator Plan (20% Equity) → You become the face of an AI product, creating content to grow its user base.",
  },
  {
    id: 5,
    title: "How can community users get involved?",
    Description:
      "If you're not a founder or content creator but still interested in AI products, you can:\n\n🔹 Test beta versions of our AI products before public launch.\n🔹 Provide feedback on product features and improvements.\n🔹 Join our community to stay updated on upcoming AI launches.",
  },
  {
    id: 6,
    title: "Do I need to invest any money?",
    Description:
      "For Non-Tech Founders: No upfront cost, but if the product requires fixed expenses (APIs, cloud hosting, licenses), you need to cover those.\n\nFor Content Creators & Community Users: No financial investment required.",
  },
  {
    id: 7,
    title: "How long does it take to build an AI product?",
    Description:
      "We typically launch an MVP (Minimum Viable Product) within 2–4 months, depending on the complexity.",
  },
  {
    id: 8,
    title: "Can I bring my own team?",
    Description:
      "Yes! If you have developers, designers, or marketers, we can collaborate while still leading AI development.",
  },
  {
    id: 9,
    title: "What happens if I raise funding?",
    Description:
      "If you're raising investment, you must inform us so we can align our strategy with your funding goals.",
  },
  {
    id: 10,
    title: "What happens if my AI product doesn’t succeed?",
    Description:
      "We’re committed to long-term success. If the product doesn’t perform well, we’ll work on iterations, pivot strategies, or explore new opportunities for monetization.",
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
