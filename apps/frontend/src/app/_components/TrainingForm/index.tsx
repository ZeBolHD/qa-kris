"use client";

import { useContext } from "react";

import { TrainingFormContext } from "./TrainingFormProvider";
import { cn } from "@/lib/utils";
import { cormorant } from "@/lib/fonts";

import Result from "./Result";
import CompletedForm from "./CompletedForm";
import ErrorBlock from "./ErrorBlock";
import Form from "./Form";
import BugList from "./BugList";

const TrainingForm = () => {
  const { completed, resetForm, isFormSubmitted, isError } = useContext(TrainingFormContext);

  return (
    <div className="m-auto mt-[200px] text-[20px]">
      <h2
        className={cn(
          cormorant.className,
          "text-[100px] uppercase leading-[120%] text-center",
          "max-desktop:text-[70px] max-laptop:text-[60px] max-tablet:text-[40px] max-laptop:leading-[100%]",
        )}
      >
        Попробуй себя в роли тестировщика
      </h2>

      <div className="max-laptop:hidden">
        {!completed ? (
          <div
            className="max-w-[1160px] mt-[25px] h-full flex justify-between gap-[10px] mx-auto border-2 border-primary-dark rounded-[15px] 
        max-desktop:max-w-[1010px] max-laptop:max-w-[630px] max-tablet:max-w-[460px]"
          >
            <div className="w-full">
              <div className="py-[20px] text-center">
                <h3 className="w-full font-bold">Создай своего персонажа</h3>
              </div>
              {isFormSubmitted ? <Result /> : <Form />}
            </div>
            <div className="w-full">
              <BugList />
              <div className="p-[20px]">
                <ErrorBlock />

                {isFormSubmitted || isError ? (
                  <div className="mt-[25px] flex justify-center">
                    <button
                      className="text-primary-bg mx-auto bg-secondary-dark py-2 px-5 rounded-[15px]"
                      type="button"
                      onClick={resetForm}
                    >
                      Попробовать ещё раз
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <CompletedForm />
        )}
      </div>

      <div className="laptop:hidden mt-[25px] w-full">
        <p className="text-center font-bold">
          Чтобы протестировать форму создания персонажа, перейди на десктоп версию
        </p>
      </div>
    </div>
  );
};

export default TrainingForm;
