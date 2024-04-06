import { getPrivacyPageText } from "@/lib/api/getPrivacyPageText";
import { cormorant } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";

export default async function PrivacyPage() {
  const policy = await getPrivacyPageText();

  const text = policy?.privacyPage?.data?.attributes?.text;

  console.log(text);

  return (
    <section className="w-full mt-[50px] max-laptop:mt-[30px] max-tablet:mt-[25px]">
      <div
        className="mx-auto max-w-[1160px] max-desktop:max-w-[1010px] max-laptop:max-w-[630px] 
    max-tablet:max-w-[460px] max-mobile:max-w-[300px] max-desktop:text-[20px] max-laptop:text-[18px]
    max-tablet:text-[15px]"
      >
        <h2
          className={cn(
            cormorant.className,
            "text-[80px] leading-[120%] max-desktop:text-[70px] max-laptop:text-[60px] max-tablet:text-[35px]",
          )}
        >
          Политика конфиденциальности
        </h2>
        <Markdown
          className="mt-[50px] text-[20px] max-desktop:text-[17px] max-laptop:text-[15px] max-tablet:text-[12px]
          max-desktop:mt-[30px] max-laptop:mt-[40px] max-tablet:mt-[25px]"
        >
          {text}
        </Markdown>
      </div>
    </section>
  );
}
