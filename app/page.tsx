import CurvedWords from "./(components)/CurvedWords";
import FAQSection from "./(components)/FAQ";
import Footer from "./(components)/Footer";
import Header from "./(components)/Header";
import Hero from "./(components)/Hero";
import ScrollTextBlur from "./(components)/ScrollWorldNew";
import { Service } from "./(components)/ServicePage";
import StackingCards from "./(components)/StackingCard";
import SubHero from "./(components)/SubHero";
import SubHeroInfo from "./(components)/SubHeroInfo";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <CurvedWords/>
      <SubHero/>
      <SubHeroInfo/>
      <ScrollTextBlur/>
      <StackingCards/>
      <Service/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}
