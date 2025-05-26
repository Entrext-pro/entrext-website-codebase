import { ShinyButton } from "@/components/magicui/shiny-button";
import curlyArrow from "@/public/curly-image.png"
import Image from "next/image";

export default function GoToPage(){
    return (
        <div className="relative flex justify-center gap-10 border-b-2 md:pb-72 pb-30">
            <Image
                src={curlyArrow}
                alt="Arrow"
                className="absolute top-20 left-[38%] rotate-90"
            />
             <ShinyButtonDemo/>
        </div>
       
    )
}


export function ShinyButtonDemo() {
  return <ShinyButton className="px-10 py-4">Go to Partnerships</ShinyButton>;
}

