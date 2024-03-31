import { cormorant } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Form from "./Form";

const Application = () => {
  return (
    <section id="application" className="mt-[225px]">
      <div className="w-[95%] mx-auto bg-primary-dark rounded-[15px]">
        <div className="w-full container flex mx-auto py-[115px] justify-between gap-x-[40px] text-primary-bg">
          <div className="w-full flex flex-col justify-between">
            <h2 className={cn(cormorant.className, "text-[40px] leading-[120%]")}>
              Оставьте заявку, и я напишу вам
            </h2>

            <p className="text-[20px]">
              * Проверьте, что у вас открытый аккаунт, чтобы я могла с вами связаться.
            </p>
          </div>
          <div className="w-full">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
