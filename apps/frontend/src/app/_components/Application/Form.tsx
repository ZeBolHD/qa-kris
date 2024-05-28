"use client";

import { sendApplication } from "@/lib/api/sendApplication";
import { cormorant } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "./FormInputText";
import FormInputText from "./FormInputText";
import FormInputNumber from "./FormInputNumber";
import FormInputTextarea from "./FormInputTextarea";
import FormInputSelect from "./FormInputSelect";

interface FormProps {
  serviceNames: string[];
}

type FormInputType = {
  name: string;
  telegram: string;
  service: string;
  age: number;
  studyStart: string;
  work: string;
  experience: string;
  from: string;
  comment: string;
};

const Form = ({ serviceNames }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputType>();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "idle">("idle");

  const onSubmit: SubmitHandler<FormInputType> = async (data) => {
    setIsLoading(true);
    setStatus("idle");

    const error = await sendApplication(data);

    setIsLoading(false);

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    reset();
  };

  if (status === "success") {
    return (
      <div className="w-full py-[60px] flex items-center justify-center border-[2px] border-primary-bg rounded-[25px]">
        <p
          className={cn(
            cormorant.className,
            "text-center text-[40px] uppercase max-laptop:text-[35px] max-tablet:text-[25px]",
          )}
        >
          Заявка успешно отправлена!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full p-[60px] gap-y-[50px] text-[25px] border-[2px] border-primary-bg rounded-[25px]
      max-desktop:p-[50px] max-laptop:p-[30px] max-tablet:px-[60px] max-mobile:px-[23px] max-mobile:py-[25px] 
      max-desktop:text-[20px] max-laptop:text-[18px] max-tablet:text-[15px]"
    >
      <div className="grid grid-cols-2 gap-x-[50px] gap-y-[25px] max-tablet:grid-cols-1">
        <FormInputText
          register={register}
          errors={errors}
          isLoading={isLoading}
          id="name"
          placeholder="Ваше имя"
        />

        <FormInputText
          register={register}
          errors={errors}
          isLoading={isLoading}
          id="telegram"
          placeholder="Ваш Telegram"
        />

        <FormInputNumber
          register={register}
          errors={errors}
          isLoading={isLoading}
          min={10}
          max={100}
          id="age"
          placeholder="Ваш возраст"
        />

        <FormInputText
          register={register}
          errors={errors}
          isLoading={isLoading}
          id="studyStart"
          placeholder="Как скоро хотите начать обучение?"
        />

        <FormInputTextarea
          id="work"
          register={register}
          errors={errors}
          isLoading={isLoading}
          placeholder="В данный момент работаете? (если да, то опишите, чем занимаетесь)"
        />

        <FormInputTextarea
          id="experience"
          register={register}
          errors={errors}
          isLoading={isLoading}
          placeholder="Был ли опыт в айти? (если да, то опишите какой)"
        />

        <FormInputText
          register={register}
          errors={errors}
          isLoading={isLoading}
          id="from"
          placeholder="Вы из РФ?"
        />

        <FormInputSelect
          options={serviceNames}
          id="service"
          register={register}
          errors={errors}
          isLoading={isLoading}
          placeholder="Какая услуга вас интересует?*"
        />

        <FormInputTextarea
          id="comment"
          register={register}
          errors={errors}
          isLoading={isLoading}
          placeholder="Комментарий"
        />
      </div>

      <div className="mt-[50px]">
        <button
          type="submit"
          className="w-full py-[10px] uppercase text-center rounded-[15px] bg-secondary-dark"
          disabled={isLoading}
        >
          Оставить заявку
        </button>
        <div className="mt-[10px]">
          {status === "error" && (
            <p className="text-red-500">Произошла ошибка при отправке заявки</p>
          )}
        </div>
        <p
          className="mt-[50px] text-center text-[20px] leading-[120%] text-secondary-light 
        max-desktop:text-[17px] max-desktop:mt-[25px] max-laptop:text-[12px]"
        >
          Нажимая на кнопку, вы соглашаетесь с условиями обработки{" "}
          <Link className="underline" href="/privacy">
            персональных данных
          </Link>
          и политикой конфиденциальности
        </p>
      </div>
    </form>
  );
};

export default Form;
