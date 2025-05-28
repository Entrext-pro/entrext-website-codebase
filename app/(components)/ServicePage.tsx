'use client';
import Flow from "@/public/finalExtrext.png";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function Service() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  const descRef = useRef(null);
  const isDescInView = useInView(descRef, { once: true });

  return (
    <div className="font-mono md:mt-56 mt-30 mb-28">
      <div className="flex px-4 md:mb-32 justify-around flex-col md:flex-row md:gap-20 gap-5">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl text-left font-medium leading-none "
        >
          <span className="md:pl-10 tracking-tighter">Join the Sport, Play the Game</span>
        </motion.div>

        <motion.div
          ref={descRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isDescInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl md:pl-10 pl-3 w-full md:w-[700px] "
        >
          <p>
            {"We’re building a core team of amplified leaders ready to shape the future from day zero. If you're driven by vision, creativity, and execution, Entrext is where your skills turn into real-world impact. Whether you’re a non-technical founder with a powerful idea, a content creator with a voice that moves people, or a strong operator in branding, tech, or distribution we want to build with you. This isn’t a partnership  this is co-creation at the core. A chance to lead, build, and grow with us"}
          </p>
        </motion.div>
      </div>
      <div className="px-5 flex flex-col lg:flex-row justify-around gap-12 md:mt-10">
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
            title="Non-Tech Founders"
            content="You’ve got vision but no tech background? Perfect. If your idea is strong, we’ll build with you. Join us as a core founder and let’s bring it to life."
            number={1}
          />
          <Content
            title="Content Creators / Marketers"
            content="You create, storytell, and know how to build attention. If you want to co-lead a product or bring one to life with us, this is your lane."
            number={2}
          />
          <Content
            title="Builders & Operators"
            content="If you're strong in tech, branding, or distribution, and you're ready to lead from the front, we want you on the core team."
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
      className="md:w-2xl w-full md:pt-0 pt-10 border-t-2 md:h-[400px] flex items-center border-gray-500 "
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

function CreativeBtn(){
  const router = useRouter()
  return (
    <>
      <div
      onClick={()=>{
        router.push("https://deformity.ai/d/C-P5znqtG_ZZ")
      }}
      className='group relative cursor-pointer p-2 md:w-32 w-24 border bg-white rounded-full overflow-hidden text-black text-center font-semibold md:text-xl mt-2'>
        <span className='translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block ml-3'>
          Apply
        </span>
        <div className='flex gap-5 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300'>
          <span>Apply</span>
          <ArrowRight />
        </div>
        <div className='absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-black scale-[1] group-hover:bg-yellow-400 group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] '></div>
      </div>
    </>
  );
}

