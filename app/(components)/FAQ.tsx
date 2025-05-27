"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const FAQContent = [
  {
    id: 1,
    title: "What kinds of problems do Entrext products solve?",
    Description:
      "We build tools and apps that solve real, everyday problems — whether it’s something as small as saving a few minutes a day or as big as creating a new way to connect people. If it improves life in a useful, smart way, we’re interested. We don't chase trends — we focus on things that truly matter to people.",
  },
  {
    id: 2,
    title: "Are Entrext products secure and private?",
    Description:
      "We treat your trust seriously. Everything we build follows best practices around data safety and privacy. But more than rules, we’re a small and tight-knit studio — our goal is never to be extractive. We believe in honest relationships, not just user metrics.",
  },
  {
    id: 3,
    title: "How do I know a new Entrext app is right for me?",
    Description:
      "We don’t push products. We co-build them. Every app goes through testing with real users who care about the problem. If you’re part of our early community, your feedback actually shapes what the product becomes — not just some checkbox at the end.",
  },
  {
    id: 4,
    title: "What devices and platforms do you support?",
    Description:
      "We build where people live. That usually means mobile-first and web-ready. We keep it flexible so you don’t have to change your habits to use what we make.",
  },
  {
    id: 5,
    title: "How much do your products cost?",
    Description:
      "Most things start free, and if there's a cost, it grows with your usage or need. We don’t believe in locking people out with pricing. If you love what we build and want more, we’ll grow with you.",
  },
  {
    id: 6,
    title: "Can I suggest new features or improvements?",
    Description:
      "Absolutely — not only can you, we want you to. Every product is built with feedback from real users. If you’re passionate and invested, your voice directly shapes what we make. Our roadmap is open and driven by the community. Mail us at feedbacks@entrext.in",
  },
  {
    id: 7,
    title: "What if I encounter a bug or issue?",
    Description:
      "Reach out to us directly — we don’t hide behind helpdesks. You can message us in the app or through email. We care about what we build, and we fix fast because we believe in learning and improving by doing.",
  },
  {
    id: 8,
    title: "Do Entrext apps integrate with other tools I use?",
    Description:
      "If it makes your workflow easier, yes. We build things that work well with other services. Whether that’s Slack, Google, or tools you already rely on, we want our products to feel like they belong — not like extra work.",
  },
  {
    id: 9,
    title: "How do I join the beta or early-access program?",
    Description:
      "You can join the waitlist for any product we’re working on. Once you're in, you get early builds, behind-the-scenes access, and the chance to help shape what gets built. We’re building with you, not just for you. We are also working on our exclusive community where we’ll give early users early experiences across all upcoming Entrext products.",
  },
  {
    id: 10,
    title: "Who builds these products and how can I trust their quality?",
    Description:
      "Everything is built by our in-house team and people we partner with — creators, founders, technologists, and community leaders. We work with people who care deeply about what they build. And since we share ownership and rewards, our success only happens when the product actually works for you.",
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
