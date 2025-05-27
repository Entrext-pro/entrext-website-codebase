import MoneyBag from "@/public/icons8-money-bag-50.png"
import Rocket from "@/public/icons8-rocket-50.png"
import Image from "next/image"

export default function PartnershipPlans() {
    return (
        <div className="mt-80">
            <div className="w-full flex flex-col items-center justify-center">
                <h3 className="text-7xl font-[600]">Partnership Plans</h3>
                <p className="text-3xl mt-3">Equity-based partnerships to build your AI product with zero upfront cost.</p>
            </div>

            <div className="flex w-full items-center justify-center gap-20 mt-10">
                <PlanComponent1 />
                <PlanComponent2 />
            </div>
        </div>
    )
}

function PlanComponent1() {
    return (
        <div className="flex flex-col w-[750px] h-[1200px] font-mono border p-10">
            <div className="flex flex-col gap-8">
                <h3 className="text-orange-700 text-3xl">Non-Tech Founder Plan</h3>
                <div className="flex gap-3">
                    <h1 className="text-5xl font-[500]">30-40%</h1>
                    <p className="flex items-end text-gray-700 text-2xl">Equity</p>
                </div>
                <p className="text-2xl">For non-tech founders who have a strong AI product idea but lack technical resources. We take 30-40% equity in exchange for full product development.</p>
            </div>

            <div className="flex flex-col gap-5 mt-4">
                <h1 className="text-3xl font-[500]">What You Get:</h1>
                <div>
                    <div className="flex gap-2">
                        <TickSvg />
                        <p className="text-xl font-[500]">Full-service MVP development (AI, software, backend, frontend)</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <TickSvg />
                            <p className="text-xl font-[500]">Dedicated Team:</p>
                        </div>
                        <div className="ml-20 text-xl">
                            <ul>
                                <li>1 Lead Engineer (Full-Stack)</li>
                                <li>1 UX/UI Designer</li>
                                <li>1 QA Specialist</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <TickSvg />
                        <p className="text-xl font-[500]">Market research & strategy alignment</p>
                    </div>
                    <div className="flex gap-2">
                        <TickSvg />
                        <p className="text-xl font-[500]">Ongoing product optimization & scaling post-launch</p>
                    </div>
                    <div className="flex gap-2">
                        <TickSvg />
                        <p className="text-xl font-[500]">Long-term partnership to ensure the products success</p>
                    </div>
                </div>

                <div>
                    <div className="flex gap-3">
                        <Image
                            src={MoneyBag}
                            alt="Money Bag"
                            className="size-7"
                        />
                        <p className="text-3xl font-[500]">Equity Split:</p>
                    </div>
                    <div className="ml-20">
                        <ul className="gap-2 flex flex-col text-xl">
                            <li>30-40% equity retained by us for development & ongoing support</li>
                            <li>If any fixed costs arise (e.g., API usage, cloud costs, or external tools), you cover them</li>
                            <li>If you are raising funds, we must be informed to align strategies</li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex gap-3 mt-5">
                            <Image
                                src={Rocket}
                                alt="Money Bag"
                                className="size-7"
                            />
                            <h1 className="text-3xl font-[500]">Perfect For:</h1>
                        </div>
                        <div className="ml-20">
                            <ul className="flex flex-col gap-2 text-xl">
                                <li>Non-tech founders with a scalable AI product vision</li>
                                <li>Those looking for a long-term partnership with expert AI developers</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <button className="bg-slate-300 w-full p-3 text-2xl rounded-2xl cursor-pointer hover:bg-slate-400">Book a Call</button>
                </div>
            </div>
        </div>
    )
}

function PlanComponent2() {
    return (
        <div className="flex flex-col w-[750px] h-[1200px] font-mono border p-10">
            <div className="flex flex-col gap-3">
                <h3 className="text-orange-700 text-3xl">Content Creator Plan</h3>
                <div className="flex gap-3">
                    <h1 className="text-5xl font-[500]">20%</h1>
                    <p className="flex items-end text-gray-700 text-2xl">Equity</p>
                </div>
                <p className="text-2xl">For content creators who want to be the face of an AI product, using their brand, audience, or marketing expertise to scale it.</p>
            </div>

            <div className="flex flex-col gap-5 mt-4">
                <h1 className="text-3xl font-[500]">What You Get:</h1>
                <div>
                    <div className="flex gap-2">
                        <TickSvg />
                        <p className="text-xl font-[500]">20% ownership in the AI product until exit</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <TickSvg />
                            <p className="text-xl font-[500]">A fully built AI product</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <TickSvg />
                        <p className="text-xl font-[500]">Strategic positioning as the face of the brand</p>
                    </div>
                    <div className="flex gap-2">
                        <TickSvg />
                        <p className="text-xl font-[500]">Marketing & launch support from our team</p>
                    </div>
                    <div className="flex gap-2">
                        <TickSvg />
                        <p className="text-xl font-[500]">Long-term revenue potential from product growth</p>
                    </div>
                </div>

                <div>
                    <div className="flex gap-3 mt-5">
                        <Image
                            src={Rocket}
                            alt="Money Bag"
                            className="size-7"
                        />
                        <h1 className="text-3xl font-[500]">Your Role:</h1>
                    </div>
                    <div className="ml-20">
                        <ul className="flex flex-col gap-2 text-xl">
                            <li>Promote and market the AI product to your audience</li>
                            <li>Drive user adoption through content and community-building</li>
                            <li>Partner with us in scaling the product for long-term success</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="flex gap-3">
                        <Image
                            src={MoneyBag}
                            alt="Money Bag"
                            className="size-7"
                        />
                        <p className="text-3xl font-[500]">Equity Split:</p>
                    </div>
                    <div className="ml-20">
                        <ul className="gap-2 flex flex-col text-xl">
                            <li>20% for content creators</li>
                            <li>We manage product development, tech infrastructure, and scaling</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="flex gap-3 mt-5">
                        <Image
                            src={Rocket}
                            alt="Money Bag"
                            className="size-7"
                        />
                        <h1 className="text-3xl font-[500]">Perfect for:</h1>
                    </div>
                    <div className="ml-20">
                        <ul className="flex flex-col gap-2 text-xl">
                            <li>Influencers, creators, and personal brands who want equity in an AI product</li>
                            <li>Anyone looking to co-own and promote an AI-driven startup</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full">
                    <button className="bg-slate-300 w-full p-3 text-2xl rounded-2xl cursor-pointer hover:bg-slate-400">Book a Call</button>
                </div>
            </div>
        </div>
    )
}

function TickSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="mt-2" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
            <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
        </svg>
    )
}
