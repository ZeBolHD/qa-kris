import Markdown from "react-markdown";
import Image from "next/image";

import { getHomePageHero } from "@/lib/api/getHomePageHero";
import { BACKEND_URL } from "@/lib/consts";
import { cormorant } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import styles from "@/styles/markdown.module.scss";

const Hero = async () => {
  const data = await getHomePageHero();

  if (!data) return null;

  const { avatar, title, offers } = data.homePage?.data?.attributes?.hero!;

  const avatarURL = BACKEND_URL + avatar?.data?.attributes?.url! + `?${new Date().getTime()}` || "";

  return (
    <section className="w-full">
      <div className="w-[95%] rounded-[15px] mx-auto bg-primary-dark text-primary-bg max-desktop:w-[98%]">
        <div
          className="max-w-[1160px] mx-auto py-[115px] flex justify-between relative
          max-desktop:max-w-[1010px] max-laptop:max-w-[630px] max-tablet:max-w-[460px] max-mobile:max-w-[300px]
          max-desktop:py-[75px] max-laptop:py-[50px] max-tablet:py-[35px] max-tablet:flex-col
          max-tablet:text-center max-tablet:gap-[50px]"
        >
          <div
            className="max-w-[600px] flex flex-col justify-between max-desktop:max-w-[50%]
          max-laptop:max-w-none"
          >
            <h1
              className={cn(
                cormorant.className,
                "text-[100px] uppercase leading-[120%]",
                "max-desktop:text-[70px] max-laptop:text-[60px] max-tablet:text-[40px] max-laptop:leading-[100%]",
              )}
            >
              {title}
            </h1>
            <Markdown
              className={cn(
                styles.markdown,
                "text-[25px] flex flex-col gap-5 max-desktop:text-[20px] max-laptop:text-[18px] max-tablet:text-[15px] max-laptop:max-w-[300px]",
                "max-tablet:hidden",
              )}
            >
              {offers}
            </Markdown>
          </div>
          <div className="relative max-mobile:w-full text-center flex justify-center items-center">
            <Image
              className="w-[400px] h-[515px] relative z-50 object-cover border-[3px] border-primary-bg rounded-[15px] rounded-t-[250px]
              max-desktop:w-[300px] max-desktop:h-[400px] 
              max-laptop:min-w-[230px] max-laptop:h-[300px] max-tablet:w-[230px]"
              src={avatarURL}
              alt="avatar"
              width={avatar.data!.attributes!.width as number}
              height={avatar.data!.attributes!.height as number}
            />

            <Image
              className="absolute z-0 top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 scale-[0.85] 
              min-w-[750px] min-h-[650px] object-center max-desktop:min-w-[600px] max-desktop:min-h-[400px] 
              max-laptop:min-w-[430px] max-laptop:min-h-[380px] max-tablet:min-w-[400px] max-tablet:min-h-[300px]"
              src={"/avatar-pattern.svg"}
              alt="avatar pattern"
              width={750}
              height={650}
            />
          </div>
          <Markdown className={cn(styles.markdown, "max-tablet:text-[15px] tablet:hidden")}>
            {offers}
          </Markdown>
        </div>
      </div>
    </section>
  );
};

export default Hero;
