import Image from "next/image"
import { useRouter } from "next/navigation"

export default function PartnershipPlans() {
    return (
        <div className="mt-20 md:mt-80 px-4 md:px-0">
            <div className="w-full flex flex-col items-center justify-center">
                <h3 className="text-4xl md:text-7xl font-[600] text-center">Join the Entrext Builder Core</h3>
                <p className="text-lg md:text-3xl mt-3 text-center max-w-4xl">Not just partners. Core team. Co-builders. Founders-in-the-making.</p>
            </div>

            <div className="flex flex-col items-center justify-center mt-8 md:mt-12 max-w-5xl mx-auto">
                <div className="text-center space-y-4 md:space-y-6 text-lg md:text-2xl">
                    <p>{"We don't do clients. We don't do freelancing."}</p>
                    <p>{"We build real products — with people who bring real energy."}</p>
                    <p>{"If you're someone with vision, distribution, storytelling, or technical firepower — you might belong on our internal team of builders."}</p>
                    <p className="font-[500]">{"Each partnership below is not a transaction. It's a path into Entrext — a shared journey of building, shipping, and scaling."}</p>
                </div>
            </div>

            <div className="flex flex-col w-full items-center justify-center gap-8 lg:gap-12 mt-12 md:mt-16">
                <TrackComponent1 />
                <TrackComponent2 />
                <TrackComponent3 />
            </div>
        </div>
    )
}

function TrackComponent1() {
    const router = useRouter()
    return (
        <div className="flex flex-col w-full max-w-[900px] font-mono border-2 border-slate-300 rounded-xl p-6 md:p-8 bg-gradient-to-br from-white to-gray-50">
            <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex items-center gap-4">
                    <span className="text-3xl md:text-4xl font-bold text-gray-400">(01)</span>
                    <h3 className="text-orange-700 text-2xl md:text-3xl font-[600]">Non-Tech Founder Track</h3>
                </div>
                <p className="text-xl md:text-2xl font-[500] text-gray-800">{"Have the vision. Lead the growth. We'll build the tech."}</p>
                <p className="text-lg md:text-xl text-gray-600">{"You know the problem space. You have ideas. Maybe you've done sales, branding, or community — but you don't code, and you don't have a tech team. No worries. You bring the energy, we bring the engineering."}</p>
            </div>

            <div className="flex flex-col gap-6 mt-8">
                <div>
                    <h4 className="text-2xl md:text-3xl font-[600] mb-4">{"What You Get:"}</h4>
                    <div className="space-y-3">
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">{"Full product build (AI, software, backend, frontend)"}</p>
                        </div>
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">{"Assigned core tech team (Engineer, Designer, QA)"}</p>
                        </div>
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">{"You focus on testing, feedback, and distribution"}</p>
                        </div>
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">Long-term role as a co-builder with us</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-2xl md:text-3xl font-[600] mb-4">{"You're a Fit If:"}</h4>
                    <div className="space-y-3">
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">{"You've always wanted to build, but lacked a dev team"}</p>
                        </div>
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">{"You're confident in your ability to grow or sell"}</p>
                        </div>
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">{"You want to build your next chapter with a team that moves"}</p>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-6">
                    <button
                        onClick={() => {
                            router.push("https://deformity.ai/d/C-P5znqtG_ZZ")
                        }}
                        className="bg-orange-600 hover:bg-orange-700 text-white w-full p-4 text-xl md:text-2xl rounded-xl font-[500] transition-colors">Apply for Non-Tech Track</button>
                </div>
            </div>
        </div>
    )
}

function TrackComponent2() {
    const router = useRouter()
    return (
        <div className="flex flex-col w-full max-w-[900px] font-mono border-2 border-slate-300 rounded-xl p-6 md:p-8 bg-gradient-to-br from-white to-gray-50">
            <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex items-center gap-4">
                    <span className="text-3xl md:text-4xl font-bold text-gray-400">(02)</span>
                    <h3 className="text-orange-700 text-2xl md:text-3xl font-[600]">Content Creator Track</h3>
                </div>
                <p className="text-xl md:text-2xl font-[500] text-gray-800">Be the face. Own the story. Help grow something that fits your vibe.</p>
                <p className="text-lg md:text-xl text-gray-600">{"You're a creator. You know what resonates. You've built an audience — or know how to. We're looking for people like you to co-own and grow products that actually solve problems."}</p>
            </div>

            <div className="flex flex-col gap-6 mt-8">
                <div>
                    <h4 className="text-2xl md:text-3xl font-[600] mb-4">What You Get:</h4>
                    <div className="space-y-3">
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">A fully built AI product you can stand behind</p>
                        </div>
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">Support from our design and launch team</p>
                        </div>
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">A seat at the table as a core growth partner</p>
                        </div>
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">Flexible terms shaped around how you want to grow</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-2xl md:text-3xl font-[600] mb-4">{"You're a Fit If:"}</h4>
                    <div className="space-y-3">
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">{"You're a content machine with real reach"}</p>
                        </div>
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">{"You've always wanted to be part of something you own"}</p>
                        </div>
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">{"You're done promoting other people's stuff — ready to build your own"}</p>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-6">
                    <button
                        onClick={() => {
                            router.push("https://deformity.ai/d/C-P5znqtG_ZZ")
                        }}
                        className="bg-orange-600 hover:bg-orange-700 text-white w-full p-4 text-xl md:text-2xl rounded-xl font-[500] transition-colors">Apply for Creator Track</button>
                </div>
            </div>
        </div>
    )
}

function TrackComponent3() {
    const router = useRouter()
    return (
        <div className="flex flex-col w-full max-w-[900px] font-mono border-2 border-slate-300 rounded-xl p-6 md:p-8 bg-gradient-to-br from-white to-gray-50">
            <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex items-center gap-4">
                    <span className="text-3xl md:text-4xl font-bold text-gray-400">(03)</span>
                    <h3 className="text-orange-700 text-2xl md:text-3xl font-[600]">Tech Builder Track</h3>
                </div>
                <p className="text-xl md:text-2xl font-[500] text-gray-800">{"You're technical. You ship fast. You're ready to co-lead."}</p>
                <p className="text-lg md:text-xl text-gray-600">{"You build. Maybe you've freelanced, maybe you've led teams. Either way — you're ready to stop working for products and start building with the right crew. Join us as a core builder, and help shape what we launch next."}</p>
            </div>

            <div className="flex flex-col gap-6 mt-8">
                <div>
                    <h4 className="text-2xl md:text-3xl font-[600] mb-4">What You Get:</h4>
                    <div className="space-y-3">
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">A say in what we build and how</p>
                        </div>
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">Full creative control within product tracks</p>
                        </div>
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">Design, research, and community support from our side</p>
                        </div>
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">A seat in the Entrext builder core</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-2xl md:text-3xl font-[600] mb-4">{"You're a Fit If:"}</h4>
                    <div className="space-y-3">
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">{"You're an engineer, product builder, or technical founder-type"}</p>
                        </div>
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">{"You've got ideas — or just want to co-own something that matters"}</p>
                        </div>
                        <div className="flex gap-3">
                            <TickSvg />
                            <p className="text-lg md:text-xl">{"You're looking for more than a gig — you're looking for your people"}</p>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-6">
                    <button
                        onClick={() => {
                            router.push("https://deformity.ai/d/C-P5znqtG_ZZ")
                        }}
                        className="bg-orange-600 hover:bg-orange-700 text-white w-full p-4 text-xl md:text-2xl rounded-xl font-[500] transition-colors">Apply for Tech Track</button>
                </div>
            </div>
        </div>
    )
}

function TickSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
            <path fill="#ea580c" d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
        </svg>
    )
}