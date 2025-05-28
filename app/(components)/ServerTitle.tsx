import { AuroraText } from "@/components/magicui/aurora-text";
import { BoxReveal } from "@/components/magicui/box-reveal";

export default function ServeTitle() {
    return (
        <div className="md:mt-72 md:mb-20 mb-5 md:ml-4 font-mono">
            <BoxReveal>
                <div className="md:text-5xl text-2xl font-[700] tracking-tighter flex gap-2 items-center">
                    <AuroraText>
                        Whom do we serve
                    </AuroraText>
                    <DownArrow/>
                </div>
            </BoxReveal>
        </div>
    )
}

function DownArrow() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:size-12 size-10 pt-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.99 16.5 3.75 3.75m0 0 3.75-3.75m-3.75 3.75V3.75H4.49" />
        </svg>
    )
}