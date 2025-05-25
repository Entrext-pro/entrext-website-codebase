"use client";
import Image from "next/image";
import footer from '@/public/footer_label_pc.svg';
import { useEffect, useState } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="md:-mx-5 overflow-x-hidden">
      <div className="w-full md:mt-40 mt-20 md:h-[500px] h-[200px]">
        <Image
          src={footer}
          alt="footer"
          className="w-full h-auto object-left transform scale-y-[1] md:scale-y-[0.7]"
        />
      </div>

      <div className="overflow-hidden">
        {isMobile ? <MobileFooter /> : <DesktopFooter />}
      </div>
    </div>
  );
}

function MobileFooter() {
  return (
    <div className="w-full h-full bg-black text-white font-mono px-4 py-6 flex flex-col gap-8 overflow-hidden">
      
      <div className="flex justify-between items-center">
        <h1 className="font-[900] text-2xl">Extrext</h1>
        <div className="flex gap-3 text-sm">
          <a className="hover:text-yellow-300" href="#">Instagram</a>
          <p>{"//"}</p>
          <a className="hover:text-yellow-300" href="#">Linkedin</a>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4">
          <p className="text-black text-xl w-8 h-8 bg-white rounded-full flex items-center justify-center">D</p>
          <h1 className="text-3xl font-[700] tracking-tight">{"LET'S TALK"}</h1>
        </div>

        <div className="pl-2">
          <h1 className="text-3xl text-yellow-300 font-[700] tracking-tighter">REACH OUT</h1>
        </div>
      </div>
      <div className="flex justify-center gap-4 text-xs text-gray-400 pt-4 border-t border-white/20">
        <p>&copy; Extrext</p>
        <p>{"All rights reserved ‘25"}</p>
      </div>
    </div>
  );
}


function DesktopFooter() {
  return (
    <div className="w-full bg-black h-full flex justify-between text-white font-mono p-5">
      <div>
        <h1 className="font-[900] text-4xl">Extrext</h1>
      </div>

      <div>
        <div className="flex flex-col gap-10">
          <div className="flex">
            <p className="text-black text-xl w-10 h-10 bg-white rounded-full flex items-center justify-center">D</p>
            <h1 className="text-9xl font-[700] tracking-tighter">{"LET'S TALK"}</h1>
          </div>

          <div className="text-center mt-8 ml-8">
            <h1 className="text-9xl [transform:scale(1.7,2)] text-yellow-300 font-[700] tracking-tighter">REACH OUT</h1>
          </div>

          <div className="flex mt-10 text-xl gap-20 justify-center">
            <p>&copy; Extrext</p>
            <p>{"All rights reserved ‘25"}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 text-xl">
        <a className="hover:text-yellow-300" href="">Instagram</a>
        <p>{"//"}</p>
        <a className="hover:text-yellow-300" href="">Linkedin</a>
      </div>
    </div>
  );
}
