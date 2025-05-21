import CurvedWords from "./(components)/CurvedWords";
import Header from "./(components)/Header";
import Hero from "./(components)/Hero";
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
    </div>
  );
}
