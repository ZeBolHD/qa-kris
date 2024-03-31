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
    <section className="mt-[250px]">
      <div className="container mx-auto">
        <div>
          <h2
            className={cn(
              cormorant.className,
              `text-[100px] w-fit uppercase leading-[120%] relative after:absolute after:content-[''] after:bottom-[-1px] after:left-0
              after:w-[110%] after:block after:h-[1px] after:bg-primary-dark`,
            )}
          >
            Программа
          </h2>
          <div className="flex justify-between w-full">
            <ItemsList items={programs} />
            <div className="w-[400px] min-h-full relative">
              <Image
                className="w-[400px] h-[350px] object-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src={"/programs-and-tools-pattern.svg"}
                alt="star"
                width={400}
                height={350}
              />
              <Image
                className="w-[200px] h-[200px] object-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src={"/star.svg"}
                alt="star"
                width={200}
                height={200}
              />
            </div>
            <ItemsList items={tools} reversed />
          </div>
          <h2
            className={cn(
              cormorant.className,
              `text-[100px] w-fit mr-0 ml-auto uppercase leading-[120%] relative before:content-[''] before:absolute before:top-[-1px]
              before:w-[110%] before:block before:h-[1px] before:right-0 before:bg-primary-dark`,
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
