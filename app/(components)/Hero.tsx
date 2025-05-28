"use client";

import { useEffect, useState } from "react";
import { RetroGridDemo } from "./RetroGridDemo";
import { motion } from "framer-motion";

export default function Hero() {
    const isMobile = useIsMobile();

    return (
        <div>
            <div className="md:mt-[90px] mt-[70px] md:h-[600px] h-[100px] overflow-hidden">
                <div className="text-[50px] sm:text-[180px] md:text-[160px] lg:text-[220px] font-[1000] leading-[1] tracking-tight flex flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        ENTERING
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                    >
                        THE NEXT ERA
                    </motion.div>
                </div>
            </div>

            <div className="relative overflow-hidden w-full h-[400px] lg:h-[800px]  md:mb-0 mb-32">
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
