'use client';
import Flow from "@/public/img_figure01.webp";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Service() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  const descRef = useRef(null);
  const isDescInView = useInView(descRef, { once: true });

  return (
    <div className="">
      <div className="flex px-10 md:px-20 justify-between flex-col md:flex-row gap-12 ">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-9xl font-medium leading-none "
        >
          Our<br />
          <span className="pl-4 md:pl-10">Service</span>
        </motion.div>

        <motion.div
          ref={descRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isDescInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl w-full md:w-[700px]"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nulla ab natus animi itaque nisi minus quisquam excepturi saepe nobis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis officiis cupiditate ab distinctio quae sed eum, dicta doloribus quia quidem!
          </p>
        </motion.div>
      </div>
      <div className="px-10 md:px-20 flex flex-col lg:flex-row justify-between gap-12 mt-10">
        <div>
          <Image
            priority
            className="md:w-[550px] w-[400px] md:h-[600px] h-[300px] object-contain "
            alt="Notebook"
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
            content="If you believe you are great at creating content and want to partner with a product that resonates with you — or have an idea for one — reach out to us!"
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
      className="md:w-2xl w-[300px] border-t-2 h-[300px] flex items-center border-gray-500"
    >
      <div className="flex md:gap-6 ">
        <div className="md:w-sm text-xl pt-2">{`(0${number})`}</div>
        <div>
          <div className="pt-2 md:text-3xl flex flex-wrap md:ml-0 ml-2 text-lg font-medium tracking-tight capitalize">
            <h4 className="inline-block">{title}</h4>
          </div>

          <div className="mt-6 md:ml-0 ml-2 text-lg leading-relaxed">{content}</div>
        </div>
      </div>
    </motion.div>
  );
}
