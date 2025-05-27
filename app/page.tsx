"use client";

import { useState } from "react";
import CurvedWords from "./(components)/CurvedWords";
import FAQSection from "./(components)/FAQ";
import Hero from "./(components)/Hero";
import { Service } from "./(components)/ServicePage";
import StackingCards from "./(components)/StackingCard";
import SubHero from "./(components)/SubHero";
import SubHeroInfo from "./(components)/SubHeroInfo";
import LoaderLogic from "./(components)/Loader";
import useLenis from "@/hook/useLenis";
import GoToPage from "./(components)/GoToPage";
import GlobeDemo from "./(components)/(animations)/Gloabe";
import { Footer } from "./(components)/Footer";
import ServeTitle from "./(components)/ServerTitle";
import CommingSoon from "./(components)/ComingSoon";
import ProdcutOffers from "./(components)/ProductsOffers";

export default function Home() {
  useLenis();
  const [showSite, setShowSite] = useState(false);

  return (
    <>
      {!showSite && <LoaderLogic onComplete={() => setShowSite(true)} />}
      {showSite && (
        <div>
          <div className="m-2">
            <Hero />
            <ServeTitle/>
            <CurvedWords />
          </div>
          <SubHero />
          <div>
            <SubHeroInfo />
            <ProdcutOffers/>
          </div>

          {/* <div className="">
             <ScrollTextBlur />
          </div> */}
          
          <div className={`relative overflow-hidden w-full h-[500px] lg:h-[800px] md:my-72 mb-44 `}>
                <GlobeDemo/>
          </div>

          <div className="">
             <StackingCards />
             <CommingSoon/>
          </div>
         
          <div className="m-2">
            <Service />
            <GoToPage/>
            <FAQSection />
          </div>
        </div>
      )}
    </>
  );
}
