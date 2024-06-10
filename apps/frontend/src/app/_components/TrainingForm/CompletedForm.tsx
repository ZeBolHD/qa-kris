import { cormorant } from "@/lib/fonts";
import Link from "next/link";
import { useContext } from "react";
import { TrainingFormContext } from "./TrainingFormProvider";
import { cn } from "@/lib/utils";

const CompletedForm = () => {
  const { resetBugs } = useContext(TrainingFormContext);

  return (
    <div
      className="max-w-[1160px] mt-[25px] h-full mx-auto max-desktop:max-w-[1010px] max-laptop:max-w-[630px] max-tablet:max-w-[460px] py-[25px]
bg-primary-dark text-primary-bg rounded-[20px] flex flex-col gap-[20px]"
    >
      <h3
        className={cn(
          cormorant.className,
          "uppercase text-center mt-[25px] text-[40px] max-desktop:text-[35px] max-laptop:text-[30px]",
        )}
      >
        Поздравляю! Ты нашёл все баги и опробовал себя в роли тестировщика!
      </h3>

      <Link
        className="py-[10px] px-[25px] w-fit mx-auto bg-primary-bg text-primary-dark rounded-[15px]"
        href="#application"
      >
        Перейти к заявке
      </Link>

      <button
        className="py-[10px] px-[25px] w-fit mx-auto bg-primary-dark text-primary-bg rounded-[15px] border-2 border-primary-bg"
        type="button"
        onClick={resetBugs}
      >
        Попробовать ещё раз
      </button>
    </div>
  );
};

export default CompletedForm;
