import { getHomePageAbout } from "@/lib/api/getHomePageAbout";
import Image from "next/image";
import Markdown from "react-markdown";

const AboutMe = async () => {
  const data = await getHomePageAbout();

  const { about_me } = data.homePage?.data?.attributes!;

  return (
    <section className="mt-[200px] max-tablet:mt-[150px] max-mobile:mt-[100px]">
      <div
        className="mx-auto w-full flex justify-between items-center
        max-w-[1160px] max-desktop:max-w-[1010px]
        max-laptop:max-w-[630px] max-tablet:max-w-[460px] max-mobile:max-w-[300px]"
      >
        <Image
          className="w-[85px] h-[85px] max-tablet:w-[75px] max-tablet:h-[75px]
          max-tablet:hidden"
          src={"/star.svg"}
          alt="star"
          width={100}
          height={100}
        />

        <div>
          <Markdown
            className="text-[25px] w-[670px] text-center max-desktop:text-[20px] max-laptop:text-[18px]
          max-tablet:text-[15px] max-laptop:w-auto"
          >
            {about_me}
          </Markdown>
        </div>

        <Image
          className="w-[85px] h-[85px] max-laptop:w-[75px] max-laptop:h-[75px]
          max-tablet:hidden"
          src={"/star.svg"}
          alt="star"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export default AboutMe;
