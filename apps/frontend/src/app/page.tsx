import AboutMe from "./components/AboutMe";
import Application from "./components/Application";
import Hero from "./components/Hero";
import ProgramsAndTools from "./components/ProgramsAndTools";
import Questions from "./components/Questions";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

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
