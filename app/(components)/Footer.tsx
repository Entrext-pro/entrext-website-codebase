import Image from "next/image";
import footer from '@/public/footer_label_pc.svg'

export default function Footer() {
  return (
    <div className="w-full md:h-[600px] mt-30 overflow-hidden">
      <Image
        src={footer}
        alt="footer"
        className="w-full h-full object-left md:object-contain transform scale-125 md:scale-110"
      />
    </div>
  );
}
