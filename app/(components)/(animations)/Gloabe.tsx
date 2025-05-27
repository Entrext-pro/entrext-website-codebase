import { Globe } from "@/components/magicui/globe";

export default function GlobeDemo() {
  return (
    <div className="relative flex w-full h-full items-center justify-center overflow-hidden rounded-lg  bg-background px-6 pt-12 pb-20  md:pt-24 md:pb-48">
      <Globe className="absolute top-[10%] md:top-[5%]" />
      <span className="pointer-events-none absolute md:top-[75%] top-[85%] whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center md:text-8xl text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Serving Globally 
      </span>
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.0),rgba(255,255,255,0))]" />
    </div>
  );
}
