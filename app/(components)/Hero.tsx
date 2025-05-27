"use client";

import { useEffect, useState } from "react";
import { RetroGridDemo } from "./RetroGridDemo";
import {TypingAnimation} from "@/components/magicui/typing-animation"; 

export default function Hero() {
    const isMobile = useIsMobile();

    return (
        <div>
            <div className="md:mt-[90px] mt-[70px] md:h-[400px] h-[100px] overflow-hidden">
                <div className="text-[50px] sm:text-[180px] md:text-[160px] lg:text-[250px] font-[1000] leading-[1] tracking-tight flex flex-col">
                    <TypingAnimation delay={0}>ENTERING</TypingAnimation>
                    <TypingAnimation delay={1200}>THE NEXT ERA</TypingAnimation>
                </div>
            </div>

            <div className="relative overflow-hidden w-full h-[400px] lg:h-[800px] mt-16">
                <RetroGridDemo />
            </div>
        </div>
    );
}

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return isMobile;
}