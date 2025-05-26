import { Globe } from "@/components/magicui/globe";

export default function GlobeDemo() {
  return (
    <div className="relative flex w-full h-full items-center justify-center overflow-hidden rounded-lg border bg-background px-6 pt-12 pb-20  md:pt-24 md:pb-48">


      <Globe className="absolute top-[20%] md:top-[10%]" />

      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
