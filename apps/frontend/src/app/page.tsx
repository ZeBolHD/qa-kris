import { Metadata } from "next";

import { getHomePageHero } from "@/lib/api/getHomePageHero";
import { BACKEND_URL } from "@/lib/consts";
import AboutMe from "./_components/AboutMe";
import Application from "./_components/Application";
import Hero from "./_components/Hero";
import ProgramsAndTools from "./_components/ProgramCategories";
import Questions from "./_components/Questions";
import Reviews from "./_components/Reviews";
import Services from "./_components/Services";
import TrainingForm from "./_components/TrainingForm";
import TrainingFormProvider from "./_components/TrainingForm/TrainingFormProvider";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePageHero();

  const imageUrl = data?.homePage?.data?.attributes?.hero?.avatar?.data?.attributes?.url;

  return {
    title: "Kris QA",
    description: "Manual QA Mentor",
    openGraph: {
      title: "Kris QA",
      description: "Manual QA Mentor",
      url: "https://krisqa.com/",
      images: imageUrl
        ? [
            {
              url: BACKEND_URL + imageUrl,
            },
          ]
        : [],
    },
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <TrainingFormProvider>
        <TrainingForm />
      </TrainingFormProvider>
      <ProgramsAndTools />
      <Services />
      <Application />
      <Reviews />
      <Questions />
    </>
  );
}
