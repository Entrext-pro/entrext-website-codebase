'use client';
import Flow from "@/public/entrextflow.png";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export function Service() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  const descRef = useRef(null);
  const isDescInView = useInView(descRef, { once: true });

  return (
    <div className="font-mono mt-56 mb-28">
      <div className="flex px-4 md:mb-32 justify-around flex-col md:flex-row gap-20">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-9xl font-medium leading-none "
        >
          <span className="md:pl-10">Partnerships</span>
        </motion.div>

        <motion.div
          ref={descRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isDescInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl md:pl-10 w-full md:w-[700px]"
        >
          <p>
            We’re open to partnerships with visionary non-tech founders, content creators, and strong operators.  If you have a compelling idea, a talent for content, or skills in distribution, branding, or tech, let’s talk. We partner on a model that supports co-creation and leadership.
          </p>
        </motion.div>
      </div>
      <div className="px-5 flex flex-col lg:flex-row justify-around gap-12 mt-10">
        <div className="w-full md:w-[40%] overflow-hidden flex items-start">
          <Image
            priority
            className="w-full md:h-auto max-w-[1000px] object-contain"
            alt="Flow"
            src={Flow}
          />
        </div>


        <div className="flex flex-col gap-10">
          <Content
            title="Partnership with non tech founders"
            content="If you believe you have an idea, and you come from a non tech background and you got no one, pitch us who knows, maybe we make the product with you and work on a partnership model."
            number={1}
          />
          <Content
            title="Partnership with Content Creator Marketors"
            content="If you believe you are great at creating content and want to partner with a product that resonates with you or have an idea for one reach out to us!"
            number={2}
          />
          <Content
            title="Partnership as a Leader / Co-founder"
            content="If you’re strong in distribution, branding, or tech, connect with us. We’re always looking for builders who want to lead the next wave."
            number={3}
          />
        </div>
      </div>
    </div>
  );
}

function Content({
  title,
  content,
  number,
}: {
  title: string;
  content: string;
  number: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="md:w-2xl w-full md:pt-0 pt-20 border-t-2 md:h-[400px] flex items-center border-gray-500 "
    >
      <div className="flex md:gap-6 ">
        <div className="md:w-sm text-xl pt-2">{`(0${number})`}</div>
        <div>
          <div className="pt-2 md:text-3xl flex flex-wrap md:ml-0 ml-2 text-lg font-medium tracking-tight capitalize">
            <h4 className="inline-block">{title}</h4>
          </div>

          <div className="mt-6 md:ml-0 md:text-xl leading-relaxed">{content}</div>

          <CreativeBtn/>
        </div>
      </div>
    </motion.div>
  );
}

function CreativeBtn() {
  return (
    <>
      <div className='group relative cursor-pointer p-2 w-32 border bg-white rounded-full overflow-hidden text-black text-center font-semibold text-xl mt-2'>
        <span className='translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block ml-3'>
          About
        </span>
        <div className='flex gap-5 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300'>
          <span>About</span>
          <ArrowRight />
        </div>
        <div className='absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-black scale-[1] group-hover:bg-yellow-400 group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] '></div>
      </div>
    </>
  );
}

