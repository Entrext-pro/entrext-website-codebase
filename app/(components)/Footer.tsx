import Image from "next/image";
import footer from '@/public/footer_label_pc.svg'

export default function Footer() {
  return (
    <div className="w-full md:mt-40 mt-20  md:h-[500px] h-[200px]">
      <Image
        src={footer}
        alt="footer"
        className="w-full h-auto object-left transform scale-y-[0.5] md:scale-y-[0.7]"
      />
    </div>
  );
}
