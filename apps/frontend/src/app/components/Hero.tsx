import { getHomePageHero } from "@/lib/api";
import { BACKEND_URL } from "@/lib/consts";
import { cormorant } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Markdown from "react-markdown";

const Hero = async () => {
  const data = await getHomePageHero();

  if (!data) return null;

  const { avatar, title, offers } = data.homePage?.data?.attributes?.hero!;

  const offersTextList = offers?.split("\n");

  console.log(data.homePage?.data?.attributes?.hero);

  const avatarURL = BACKEND_URL + avatar?.data?.attributes?.url!;

  return (
    <section className="w-[95%] rounded-[15px] mx-auto bg-primary-dark text-primary-bg">
      <div className="container mx-auto min-h-[500px] py-[115px] flex justify-between relative">
        <div className="max-w-[600px] flex flex-col justify-between">
          <h1 className={cn(cormorant.className, " text-[100px] uppercase leading-[120%]")}>{title}</h1>
          {/* <ul className="flex flex-col gap-5">
            {offersTextList?.map((offer, index) => (
              <li key={index}>
                <p className="text-[25px]">{offer}</p>
              </li>
            ))}
          </ul> */}
          <Markdown className={"text-[25px] flex flex-col gap-5"}>{offers}</Markdown>
        </div>
        <div className="relative h-full">
          <Image
            className="w-[400px] h-[515px] relative z-50 object-cover border-[3px] border-primary-bg rounded-[15px] rounded-t-[250px]"
            src={avatarURL!}
            alt="avatar"
            width={avatar.data!.attributes!.width as number}
            height={avatar.data!.attributes!.height as number}
          />

          <Image
            className="absolute z-0 top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 scale-[0.85] min-w-[750px] min-h-[650px] object-center"
            src={"/avatar-pattern.svg"}
            alt="avatar pattern"
            width={750}
            height={650}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
