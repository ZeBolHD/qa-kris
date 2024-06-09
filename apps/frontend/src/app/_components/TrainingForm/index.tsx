"use client";

import { useContext } from "react";
import Form from "./Form";
import Result from "./Result";
import FoundBugs from "./Result/FoundBugs";
import { TrainingFormContext } from "./TrainingFormProvider";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { cormorant } from "@/lib/fonts";

const TrainingForm = () => {
  const { completed, resetForm } = useContext(TrainingFormContext);

  return (
    <div className="m-auto mt-[200px] w-[95%] max-desktop:w-[98%] text-[20px] max-desktop:text-[18px] max-tablet:text-[15px]">
      <h2
        className={cn(
          cormorant.className,
          "text-[100px] uppercase leading-[120%] text-center",
          "max-desktop:text-[70px] max-laptop:text-[60px] max-tablet:text-[40px] max-laptop:leading-[100%]",
        )}
      >
        Попробуй себя в роли тестировщика
      </h2>

      {!completed ? (
        <div className="mx-auto min-w-full mt-[25px] border-[2px] border-primary-dark rounded-[15px] p-[25px] min-h-full">
          <div className="max-w-[1160px] h-full mx-auto max-desktop:max-w-[1010px] max-laptop:max-w-[630px] max-tablet:max-w-[460px] ">
            <p>
              Представь что ты создаешь персонажа со стартовым 0 уровнем. <br /> Протестируй форму
              создания своего персонажа!
            </p>

            <div className="flex max-laptop:flex-col mt-5 gap-[10px]">
              <div className="w-full laptop:hidden">
                <FoundBugs />
              </div>
              <div className="w-1/2 min-h-full max-laptop:w-full max-laptop:mt-10">
                <Form />
              </div>
              <div className="w-1/2 min-h-full max-laptop:w-full">
                <Result />
              </div>
            </div>
          </div>
        </div>
      ) : (
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
            Поздравляю! Ты опробовал себя в роли тестировщика!
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
            onClick={resetForm}
          >
            Попробовать ещё раз
          </button>
        </div>
      )}
    </div>
  );
};

export default TrainingForm;
