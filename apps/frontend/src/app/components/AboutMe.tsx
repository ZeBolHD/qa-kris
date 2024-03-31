import { getHomePageAbout } from "@/lib/api/getHomePageAbout";
import Image from "next/image";
import Markdown from "react-markdown";

const AboutMe = async () => {
  const data = await getHomePageAbout();

  const { about_me } = data.homePage?.data?.attributes!;

  return (
    <section className="container mx-auto mt-[240px]">
      <div className="w-full flex gap-[150px] items-center">
        <Image className="w-[85px] h-[85px]" src={"/star.svg"} alt="star" width={100} height={100} />

        <div>
          <Markdown className="text-[25px] text-center">{about_me}</Markdown>
        </div>

        <Image className="w-[85px] h-[85px]" src={"/star.svg"} alt="star" width={100} height={100} />
      </div>
    </section>
  );
};

export default AboutMe;
