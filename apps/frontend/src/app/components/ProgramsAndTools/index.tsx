import { getHomePageProgramsAndTools } from "@/lib/api/getProgramsAndTools";
import { cormorant } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import ItemsList from "./ItemsList";
import Image from "next/image";

const ProgramsAndTools = async () => {
  const data = await getHomePageProgramsAndTools();

  const programsAndTools = data.homePage?.data?.attributes!.programs_and_tools!;

  const programs = (programsAndTools.programs?.data.map((program) => program.attributes?.name) ||
    []) as string[];
  const tools = (programsAndTools.tools?.data.map((tool) => tool.attributes?.name) ||
    []) as string[];

  return (
    <section
      id="program-and-tools"
      className="mt-[200px] max-desktop:mt-[150px] max-laptop:mt-[100px]"
    >
      <div
        className="mx-auto max-w-[1160px] max-desktop:max-w-[1010px]
        max-laptop:max-w-[630px] max-tablet:max-w-[460px] max-mobile:max-w-[300px]"
      >
        <div className="max-tablet:text-center">
          <h2
            className={cn(
              cormorant.className,
              `text-[100px] w-fit uppercase leading-[120%] relative after:absolute after:content-[''] after:bottom-[-1px] after:left-0
              after:w-full after:block after:h-[1px] after:bg-primary-dark max-desktop:text-[70px] max-laptop:text-[60px] max-tablet:text-[40px]
              max-tablet:w-full max-tablet:text-center`,
            )}
          >
            Программа
          </h2>
          <div className="flex justify-between w-full max-tablet:flex-col">
            <ItemsList items={programs} />
            <div className="w-[400px] min-h-full relative max-tablet:w-full max-tablet:min-h-[180px] max-tablet:my-[50px]">
              <Image
                className="w-[400px] h-[350px] object-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                max-desktop:w-[320px] max-desktop:h-[250px] max-laptop:w-[225px] max-laptop:h-[175px]"
                src={"/programs-and-tools-pattern.svg"}
                alt="star"
                width={400}
                height={350}
              />
              <Image
                className="w-[200px] h-[200px] object-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                max-desktop:w-[166px] max-desktop:h-[166px] max-laptop:w-[116px] max-laptop:h-[116px]"
                src={"/star.svg"}
                alt="star"
                width={200}
                height={200}
              />
            </div>
            <h2 className={cn(cormorant.className, "text-[40px] uppercase tablet:hidden")}>
              Инструменты
            </h2>
            <ItemsList items={tools} reversed />
            <div className="tablet:hidden w-full h-[1px] bg-primary-dark" />
          </div>
          <h2
            className={cn(
              cormorant.className,
              `text-[100px] w-fit mr-0 ml-auto uppercase leading-[120%] relative before:content-[''] before:absolute before:top-[-1px]
              before:w-full before:block before:h-[1px] before:right-0 before:bg-primary-dark max-desktop:text-[70px] max-laptop:text-[60px] max-tablet:text-[40px]
              max-tablet:hidden`,
            )}
          >
            Инструменты
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ProgramsAndTools;
