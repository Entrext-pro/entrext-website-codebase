"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const FAQContent = [
  {
    id: 1,
    title: "What kinds of problems do Entrext products solve?",
    Description:
      "Our apps tackle everyday friction points—like finding parking faster, managing time more effectively, or turning hobbies into marketplaces—by combining AI automation with community‑driven design principles.",
  },
  {
    id: 2,
    title: "Are Entrext products secure and private?",
    Description:
      "Yes. We follow industry‑standard encryption, GDPR and CCPA compliance, and routine third‑party audits to protect your data.",
  },
  {
    id: 3,
    title: "How do I know a new Entrext app is right for me?",
    Description:
      "Before launch, each product goes through community beta testing.\nYou can join our waitlist to try early versions and give feedback—so you choose tools shaped by real users like you.",
  },
  {
    id: 4,
    title: "What devices and platforms do you support?",
    Description:
      "Our Micro‑SaaS and AI tools are web‑first and mobile‑optimized (iOS and Android), with voice‑assistant integrations (Alexa, Google Assistant) available on launch.",
  },
  {
    id: 5,
    title: "How much do your products cost?",
    Description:
      "We offer freemium entry‑points for most apps, with tiered subscriptions or usage‑based pricing on advanced features—so you pay only for what you use.",
  },
  {
    id: 6,
    title: "Can I suggest new features or improvements?",
    Description:
      "Absolutely. Every product includes an in‑app feedback widget.\nOur community‑driven roadmap is updated monthly based on real user votes.",
  },
  {
    id: 7,
    title: "What if I encounter a bug or issue?",
    Description:
      "Report it via the “Help & Feedback” section in the app or email support.\nWe commit to a 48‑hour turnaround for critical fixes, backed by our SLA.",
  },
  {
    id: 8,
    title: "Do Entrext apps integrate with other tools I use?",
    Description:
      "Yes—most products offer API access and out‑of‑the‑box connectors for popular services (Slack, Zapier, Google Workspace) to fit seamlessly into your workflow.",
  },
  {
    id: 9,
    title: "How do I join the beta or early‑access program?",
    Description:
      "Click “Join Waitlist” on any product page.\nYou’ll receive an invite link, Slack access, and exclusive preview builds as they roll out.",
  },
  {
    id: 10,
    title: "Who builds these products and how can I trust their quality?",
    Description:
      "Every tool is co‑built by our in‑house studio team and vetted community experts.\nOur profit‑share model ensures we only succeed when you do—so quality and your satisfaction are our top priorities.",
  },
];


export default function FAQSection() {
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
