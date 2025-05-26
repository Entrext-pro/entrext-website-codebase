import { ShinyButton } from "@/components/magicui/shiny-button";
import curlyArrow from "@/public/curly-image.png"
import Image from "next/image";

export default function GoToPage(){
    return (
        <div className="relative flex justify-center mb-5 gap-10 border-b-2 pb-72 ">
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

