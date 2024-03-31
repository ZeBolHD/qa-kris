import AboutMe from "./components/AboutMe";
import Application from "./components/Application";
import Hero from "./components/Hero";
import ProgramsAndTools from "./components/ProgramsAndTools";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <ProgramsAndTools />
      <Services />
      <Application />
    </>
  );
}
