import { AuroraText } from "@/components/magicui/aurora-text";
import { BoxReveal } from "@/components/magicui/box-reveal";

export default function ServeTitle(){
    return (
        <div className="md:mt-72 md:mb-20 mb-5 md:ml-4 font-mono">
            <BoxReveal>
                <div className="md:text-7xl text-4xl font-[700]">
                    <AuroraText>
                        Whom do we serve
                    </AuroraText>
                </div>
            </BoxReveal>
        </div>
    )
}