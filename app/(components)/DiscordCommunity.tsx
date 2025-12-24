"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Delicious_Handrawn } from "next/font/google";

const handdrawn = Delicious_Handrawn({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bokor",
});

export default function DiscordCommunity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="font-mono overflow-hidden md:my-32 my-20" ref={ref}>
      {/* Main Text Section */}
      <div className="overflow-hidden">
        <motion.div
          className="w-full flex md:justify-center justify-center md:text-2xl text-lg"
          initial="hidden"
          animate={controls}
          variants={fadeFromBottom}
        >
          <div className="md:w-3xl w-[320px] text-center">
            <div className="font-[500] uppercase">
              Join our discord ☴ and be part of the
              <div className="inline-block mb-2 border-2 border-black -rotate-2 md:w-auto w-auto rounded-full px-3 mx-2">
                <span className={`${handdrawn.className} md:text-[1.5vw] text-xl lowercase`}>
                  community
                </span>
              </div>
              shaping the future
            </div>
          </div>
        </motion.div>
      </div>

      {/* Benefits/Details */}
      <div className="overflow-hidden mt-8">
        <motion.div
          className="flex md:flex-row flex-col justify-between items-center md:px-20 px-4 md:gap-0 gap-4"
          initial="hidden"
          animate={controls}
          variants={fadeFromBottom}
        >
          <div className="md:text-sm text-xs text-center md:text-left">
            <p>Share ideas, get early access</p>
            <p>Connect with innovators like you</p>
          </div>
          <div className="border-2 border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition-all cursor-pointer">
            <a
              href="https://discord.gg/fUCDZyS5"
              target="_blank"
              rel="noopener noreferrer"
              className="md:text-base text-sm font-[500] uppercase"
            >
              Join Discord →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const fadeFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
