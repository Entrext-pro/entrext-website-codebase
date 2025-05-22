import CurvedWords from "./(components)/CurvedWords";
import Header from "./(components)/Header";
import Hero from "./(components)/Hero";
import ScrollWords from "./(components)/ScrollWords";
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
      <ScrollWords/>
      <StackingCards/>
      <Service/>
    </div>
  );
}
