import { cormorant } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Form from "./Form";

const Application = () => {
  return (
    <section id="application" className="mt-[200px] max-laptop:mt-[150px] max-tablet:mt-[100px]">
      <div className="w-[95%] mx-auto bg-primary-dark rounded-[15px] max-desktop:w-[98%]">
        <div
          className="w-full flex mx-auto py-[50px] justify-between gap-x-[40px] text-primary-bg
         max-w-[1160px] max-desktop:max-w-[1010px] max-laptop:max-w-[630px] max-tablet:max-w-[460px] max-mobile:max-w-[300px] 
         max-laptop:justify-start max-laptop:gap-0 max-tablet:flex-col max-tablet:py-[30px]"
        >
          <div className="w-full flex flex-col justify-between max-laptop:max-w-[220px] max-tablet:max-w-none max-tablet:text-center">
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
          <div className="w-full max-tablet:mt-[15px]">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
