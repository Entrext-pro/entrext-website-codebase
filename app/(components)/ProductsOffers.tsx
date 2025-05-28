'use client';
// inspired by tom is loading
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { TextAnimate } from "@/components/magicui/text-animate";
const items = [
  {
    title: "MICRO-SAAS",
    description: "Tiny software businesses that do one thing really well.",
    id: 1
  },
  {
    title: "AI TOOLS",
    description: "Smart apps that help you work faster using artificial intelligence.",
    id: 2
  },
  {
    title: "VOICE-ASSIST",
    description: "Apps you talk to, like Alexa or Siri.",
    id: 3
  },
  {
    title: "MARKETPLACES",
    description: "Websites where buyers and sellers meet, like Amazon or Airbnb.",
    id: 4
  },
  {
    title: "GAMES",
    description: "Fun apps to play on your phone or computer.",
    id: 5
  },
  {
    title: "FINTECH",
    description: "Apps that help with money stuff like banking or investing.",
    id: 6
  },
  {
    title: "EDTECH",
    description: "Tools for learning, like Duolingo or online classes.",
    id: 7
  },
  {
    title: "NO-CODE",
    description: "Platforms that let you build apps without writing code.",
    id: 8
  },
  {
    title: "HEALTH-TECH",
    description: "Technology that helps with health or fitness.",
    id: 9
  },
  {
    title: "B2B SAAS",
    description: "Software that helps businesses run better.",
    id: 10
  },
  {
    title: "PRODUCTIVITY",
    description: "Tools to help you get things done faster or more easily.",
    id: 11
  },
  {
    title: "CREATOR TOOLS",
    description: "Apps that help people make content (videos, art, blogs).",
    id: 12
  },
  {
    title: "E-COMMERCE",
    description: "Online stores that sell stuff.",
    id: 13
  },
  {
    title: "SUBSCRIPTION BOXES",
    description: "Monthly deliveries like snacks, makeup, or clothes.",
    id: 14
  },
  {
    title: "DEV TOOLS",
    description: "Tools for software developers to build things faster.",
    id: 15
  },
  {
    title: "LEGALTECH",
    description: "Tech that helps with legal stuff, like contracts or lawyers.",
    id: 16
  },
  {
    title: "INSURTECH",
    description: "Apps that make buying or managing insurance easier.",
    id: 17
  },
  {
    title: "CYBERSECURITY",
    description: "Tech that keeps your data and devices safe.",
    id: 18
  },
  {
    title: "AUTOMATION",
    description: "Software that does boring tasks for you automatically.",
    id: 19
  },
  {
    title: "REMOTE WORK",
    description: "Tools that help people work from home or anywhere.",
    id: 20
  },
  {
    title: "DATA ANALYTICS",
    description: "Apps that help you understand numbers and trends.",
    id: 21
  },
  {
    title: "CLOUD SERVICES",
    description: "Storing and using files or apps online (like Google Drive).",
    id: 22
  },
  {
    title: "BLOCKCHAIN",
    description: "A new way to store information securely (used in crypto).",
    id: 23
  },
  {
    title: "NFT PLATFORMS",
    description: "Apps to buy/sell digital art or collectibles.",
    id: 24
  },
  {
    title: "SOCIAL APPS",
    description: "Apps to connect with people, like Instagram or TikTok.",
    id: 25
  },
  {
    title: "PERSONAL FINANCE",
    description: "Tools to track spending, budgeting, and saving.",
    id: 26
  },
  {
    title: "MENTAL HEALTH",
    description: "Apps that support emotional well-being (like Calm).",
    id: 27
  },
  {
    title: "LANGUAGE LEARNING",
    description: "Apps that help you learn a new language.",
    id: 28
  },
  {
    title: "DELIVERY TECH",
    description: "Tech behind food or package delivery (like Uber Eats).",
    id: 29
  },
  {
    title: "IOT DEVICES",
    description: "Smart gadgets that connect to the internet (like smart lights).",
    id: 30
  }
];


function UnsplashGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className='container mx-auto p-4'>

        <div className='flex w-full justify-center md:text-5xl text-xl font-[500] mb-10 font-mono'>
          <TextAnimate animation="blurInUp" by="character" once>
            Types of Products
          </TextAnimate>
        </div>

        <div className='columns-2 md:columns-3 2xl:columns-4 gap-4'>
          <>
            {items.map((item, index) => (
              <TextCard
                key={item.id}
                item={item}
                index={index}
                setSelected={setSelected}
              />
            ))}
          </>
        </div>
      </div>
    </>
  );
}

interface Item {
  id: number;
  title: string;
  description: string;
}

interface TextCardProps {
  item: Item;
  index: number | string;
  setSelected: any;
}

function TextCard({ item, index, setSelected }: TextCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.figure
      whileTap={{ scale: 0.95 }}
      initial='hidden'
      animate={isInView && 'visible'}
      ref={ref}
      className="inline-block group w-full rounded-md p-4 relative dark:bg-black bg-white overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg cursor-pointer"
      onClick={() => setSelected(item)}
    >
      <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
    </motion.figure>
  );
}

export default UnsplashGrid;
