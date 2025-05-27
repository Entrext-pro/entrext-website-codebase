import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

export default function CurvedTextLine() {
    return (
        <div className="w-full flex justify-center md:mb-72 mb-24">
            <div className="w-full">
                <MarqueeDemo/>
            </div>
        </div>
    );
}

const words = [
  "founders",
  "individuals",
  "niche",
  "customer",
  "B2B",
  "org",
  "student",
  "founders",
  "individuals",
  "niche",
  "customer",
  "B2B",
  "org",
  "student",
  "founders",
  "individuals",
  "niche",
  "customer",
  "B2B",
  "org",
  "student"
];

const words2 = [
  "Behave",
  "Confidence",
  "Sound-Good",
  "Optimist",
  "Planning",
  "Creative",
  "Not-Feared",
  "Creative",
  "Life-Time",
  "Once",
  "Well-Bring",
  "Difference",
  "Possible",
  "Heart",
  "Need",
  "Honesty",
  "Enough",
  "Intelligence",
  "Confidence",
  "Optimist",
  "Heart"
];


const firstRow = words.slice(0, words.length);
const secondRow = words2.slice(0, words.length);

const ReviewCard = ({
  name
}: {
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full md:w-64 w-32 cursor-pointer overflow-hidden rounded-xl border md:p-4 p-2",
        "bg-slate-100 ",
      )}
    >
      <div className="flex justify-center capitalize ">
        <div className="text-center">
          <figcaption className="md:text-3xl text-lg font-medium">
            {name}
          </figcaption>
        </div>
    </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review,index) => (
          <ReviewCard name={review} key={index} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}


export function MarqueeDemo2() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {secondRow.map((review,index) => (
          <ReviewCard name={review} key={index} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

