export default function CurvedTextLine() {
    return (
        <div className="w-full flex justify-center md:my-72 mt-52 ">
            <div className="block sm:hidden">
                <CurvedTextLineMobile />
            </div>
            <div className="hidden sm:block w-full">
                <CurvedTextLineDesktop />
            </div>
        </div>
    );
}

function CurvedTextLineDesktop() {
    return (
        <svg viewBox="0 0 1600 250" className="w-full h-[200px]" preserveAspectRatio="none">
            <path
                id="curvePathDesktop"
                d="M 0 150 
                   Q 200 70, 400 150 
                   Q 600 250, 800 150 
                   Q 1000 50, 1200 150 
                   Q 1400 250, 1600 150"
                fill="transparent"
                stroke="transparent"
            />
            <text fontSize="50" fill="#000">
                <textPath href="#curvePathDesktop" startOffset="0%">
                    founders individuals niche customer B2B org student founders individuals niche customer B2B org student founders individuals niche customer B2B org student
                </textPath>
            </text>
        </svg>
    );
}

function CurvedTextLineMobile() {
    return (
        <svg viewBox="0 0 700 150" className="w-full h-[150px] font-mono" preserveAspectRatio="none">
            <path
                id="curvePathMobileUp"
                d="M 0 120 Q 200 50, 350 50 T 700 120"
                fill="transparent"
                stroke="transparent"
            />
            <text fontSize="28" fill="#000">
                <textPath href="#curvePathMobileUp">
                    founders fresher org student customer B2B org student founders B2B org student fresher niche
                </textPath>
            </text>
        </svg>
    );
}

