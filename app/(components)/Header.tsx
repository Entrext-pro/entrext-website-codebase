"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "@/public/1.png"
import Image2 from "@/public/2.png"
import Image from "next/image";
import ApplyModal from "./ApplyModal";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="sticky top-0 z-50 py-5 bg-white">
      <div className="flex justify-between items-center ">
        <motion.div
          initial={false}
          animate={{ rotate: scrolled ? 360 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="md:size-16 size-10 relative"
        >
          <Image
            src={scrolled ? Image2 : Image1}
            alt="Entrext Logo"
            fill
            className="object-contain transition-opacity duration-300 rounded-md"
          />
        </motion.div>


        <div className="md:flex gap-28 mr-10 hidden">
          <Navigate text="Partnerships" />
          <Navigate text="Products" />
          <Navigate text="Culture" />
          <Navigate text="Apply" onClick={() => setApplyModalOpen(true)} />
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full h-full bg-black text-white z-50 flex flex-col items-end justify-start pt-50"
            >
              <div className="flex justify-between items-center w-full">
                <h4 className="md:w-16 w-4 font-[700] text-white md:text-3xl text-xl leading-[1] absolute top-5 left-5">
                  Entrext Logo
                </h4>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-5 right-5"
                >
                  <X className="w-8 h-8 text-white" />
                </button>
              </div>

              <NavigateMobile title="Partnerships" />
              <NavigateMobile title="Products" />
              <NavigateMobile title="Culture" />
              <NavigateMobile title="Apply" onClick={() => {
                  setMenuOpen(false)
                  setApplyModalOpen(true)
                }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <ApplyModal open={applyModalOpen} setOpen={setApplyModalOpen} />
    </div>
  );
}

function Navigate({ text, onClick }: { text: string, onClick?: () => void }) {
  return (
    <div>
      <div onClick={onClick} className="relative font-mono text-[18px] font-[300] hover:text-gray-500 transition-all ease-in-out delay-75 group cursor-pointer">
        {text}
        <span className="absolute left-1/2 bottom-0 h-[1px] w-0 bg-gray-600 transition-all duration-300 ease-in-out transform -translate-x-1/2 origin-center group-hover:w-full group-hover:-translate-x-1/2 group-hover:origin-left"></span>
      </div>
    </div>
  );
}

function NavigateMobile({ title, onClick }: { title: string, onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="text-4xl font-[1000] mr-7 hover:text-gray-400 transition active:text-gray-500 cursor-pointer"
    >
      {title}
    </div>
  )
}
