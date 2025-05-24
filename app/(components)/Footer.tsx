import Image from "next/image";
import footer from '@/public/footer_label_pc.svg'

export default function Footer(){
    return <div className="w-full md:h-[600px] mt-30">
        <Image
            src={footer}
            alt="footer"
            className="w-full h-full md:object-cover object-left"
        />
    </div>
}