import AboutMe from "./_components/AboutMe";
import Application from "./_components/Application";
import Hero from "./_components/Hero";
import ProgramsAndTools from "./_components/ProgramsAndTools";
import Questions from "./_components/Questions";
import Reviews from "./_components/Reviews";
import Services from "./_components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <ProgramsAndTools />
      <Services />
      <Application />
      <Reviews />
      <Questions />
    </>
  );
}
