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
    <div className="md:-mx-5 overflow-hidden">
      <div className="w-full md:mt-40 mt-20 md:h-[500px] h-[100px]">
        <Image
          src={footer}
          alt="footer"
          className="w-full h-auto object-left transform scale-y-[1] md:scale-y-[0.7]"
        />
      </div>
    </div>
  );
}


