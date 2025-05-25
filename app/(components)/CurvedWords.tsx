export default function CurvedTextLine() {
    return (
        <div className="w-full flex justify-center md:my-52 mt-20">
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
        <svg viewBox="0 0 1600 200" className="w-full h-[200px]" preserveAspectRatio="none">
            <path
                id="curvePathDesktop"
                d="M 0 150 Q 400 50, 800 150 T 1600 150"
                fill="transparent"
                stroke="transparent"
                
            />
            <text fontSize="44" fill="#000" >
                <textPath href="#curvePathDesktop">
                    founders individuals niche customer B2B org student founders individuals niche customer B2B org student
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
                d="M 0 140 Q 200 50, 350 50 T 700 150"
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

