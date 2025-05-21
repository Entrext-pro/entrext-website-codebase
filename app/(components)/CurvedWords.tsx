export default function CurvedTextLine() {
    return (
        <div className="w-full flex justify-center mt-2">
            <div className="block sm:hidden">
                <CurvedTextLineMobile />
            </div>
            <div className="hidden sm:block">
                <CurvedTextLineDesktop />
            </div>
        </div>
    );
}

function CurvedTextLineDesktop() {
    return (
        <svg viewBox="0 0 1600 200" className="w-full h-[200px]">
            <path
                id="curvePathDesktop"
                d="M 0 150 Q 400 50, 800 150 T 1600 150"
                fill="transparent"
                stroke="transparent"
            />
            <text fontSize="32" fill="#000">
                <textPath href="#curvePathDesktop">
                    founders individuals fresher niche customer B2B org student founders individuals fresher niche customer B2B org student
                </textPath>
            </text>
        </svg>
    );
}

function CurvedTextLineMobile() {
    return (
        <svg viewBox="0 0 700 100" className="w-full h-[150px]">
            <path
                id="curvePathMobileUp"
                d="M 0 140 Q 200 50, 350 50 T 700 150"
                fill="transparent"
                stroke="transparent"
            />
            <text fontSize="30" fill="#000">
                <textPath href="#curvePathMobileUp">
                    founders fresher org student customer B2B org student founders B2B org student fresher niche
                </textPath>
            </text>
        </svg>
    );
}

