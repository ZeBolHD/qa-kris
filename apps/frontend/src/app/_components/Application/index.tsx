import { cormorant } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Form from "./Form";
import { getHomePageServices } from "@/lib/api/getHomePageServices";

const Application = async () => {
  const services = await getHomePageServices();

  const serviceNames = services.homePage?.data?.attributes?.services?.data.map(
    (service) => service.attributes?.name,
  ) as string[];

  return (
    <section id="application" className="mt-[200px] max-laptop:mt-[150px] max-tablet:mt-[100px]">
      <div className="w-[95%] mx-auto bg-primary-dark rounded-[15px] max-desktop:w-[98%]">
        <div
          className="w-full mx-auto py-[50px] justify-between gap-x-[40px] text-primary-bg
         max-w-[1160px] max-desktop:max-w-[1010px] max-laptop:max-w-[630px] max-tablet:max-w-[460px] max-mobile:max-w-[300px] 
         max-laptop:justify-start max-laptop:gap-0 max-tablet:py-[30px]"
        >
          <div className="w-full text-center flex flex-col gap-[25px] justify-between max-tablet:gap-[15px]">
            <h2
              className={cn(
                cormorant.className,
                "text-[40px] leading-[120%] uppercase max-laptop:text-[25px] max-tablet:text-[20px] max-tablet:mt-[15px]",
              )}
            >
              Оставьте заявку, и я напишу вам
            </h2>

            <p className="text-[20px] max-desktop:text-[17px] max-laptop:text-[15px] max-tablet:text-[12px] max-tablet:mt-[15px]">
              * Проверьте, что у вас открытый аккаунт, чтобы я могла с вами связаться.
            </p>
          </div>
          <div className="w-full mt-[25px] max-tablet:mt-[15px]">
            <Form serviceNames={serviceNames} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
