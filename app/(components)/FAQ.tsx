"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const FAQContent = [
    {
        id: 1,
        title: "What is the AI Product Partnership model?",
        Description: ""
    },
    {
        id: 2,
        title: "What kind of AI products do you develop?",
        Description: ""
    },
    {
        id: 3,
        title: "Who can apply for this partnership?",
        Description: ""
    },
    {
        id: 4,
        title: "What's the difference between the Non-Tech Founder? and the Content Creator Plan? ",
        Description: ""
    },
    {
        id: 5,
        title: "How can community users get involved?",
        Description: ""
    },
    {
        id: 6,
        title: "Do I need to invest any money?",
        Description: ""
    },
    {
        id: 7,
        title: "How long does it take to build an AI product?",
        Description: ""
    },
    {
        id: 8,
        title: "Can i bring my own team?",
        Description: ""
    },
    {
        id: 9,
        title: "What happens if I raise funding?",
        Description: ""
    },
    {
        id: 10,
        title: "What happens if my AI product doesn't succeed?",
        Description: ""
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
                    <div className="w-full flex justify-between items-start mb-2">
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
