"use client";

import { sendApplication } from "@/lib/api/sendApplication";
import { cormorant } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormProps {
  serviceNames: string[];
}

type FromInput = {
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
  } = useForm<FromInput>();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "idle">("idle");

  const onSubmit: SubmitHandler<FromInput> = async (data) => {
    console.log(data);

    setIsLoading(true);
    setStatus("idle");

    const error = await sendApplication(data);

    if (error) {
      setStatus("error");
      setIsLoading(false);
      return;
    }

    setStatus("success");
    reset();
    setIsLoading(false);
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
        <div className="w-full">
          <input
            className="w-full bg-transparent border-b-[1px] border-primary-bg focus:outline-none"
            id="name"
            type="text"
            placeholder="Ваше имя"
            minLength={2}
            required
            {...register("name", {
              required: true,
            })}
            disabled={isLoading}
          />
          {errors.name && <p className="text-red-500">Поле обязательно для заполнения</p>}
        </div>

        <div className="w-full">
          <input
            className="w-full bg-transparent border-b-[1px] border-primary-bg focus:outline-none"
            id="telegram"
            type="text"
            placeholder="Ваш телеграм"
            minLength={4}
            {...register("telegram", {
              required: true,
            })}
            required
            disabled={isLoading}
          />
          {errors.telegram && <p className="text-red-500">Поле обязательно для заполнения</p>}
        </div>

        <div className="w-full">
          <input
            className="w-full bg-transparent border-b-[1px] border-primary-bg focus:outline-none"
            id="age"
            type="number"
            placeholder="Ваш возраст"
            min={10}
            max={100}
            {...register("age", {
              required: true,
              min: 10,
              max: 100,
              valueAsNumber: true,
            })}
            required
            disabled={isLoading}
          />
          {errors.age && <p className="text-red-500">Поле обязательно для заполнения</p>}
        </div>

        <div className="w-full">
          <input
            className="w-full bg-transparent border-b-[1px] border-primary-bg focus:outline-none"
            id="study_start"
            type="text"
            placeholder="Как скоро хотите начать обучение"
            {...register("studyStart", {
              required: true,
            })}
            required
            disabled={isLoading}
          />
          {errors.studyStart && <p className="text-red-500">Поле обязательно для заполнения</p>}
        </div>

        <div className="w-full">
          <textarea
            className="w-full min-h-full bg-transparent border-b-[1px] border-primary-bg focus:outline-none"
            id="work"
            placeholder="В данный момент работаете? (если да, то опишите чем занимаетесь)"
            minLength={4}
            {...register("work", {
              required: true,
            })}
            required
            disabled={isLoading}
          />
          {errors.work && <p className="text-red-500">Поле обязательно для заполнения</p>}
        </div>

        <div className="w-full">
          <textarea
            className="w-full min-h-full bg-transparent border-b-[1px] border-primary-bg focus:outline-none"
            id="experience"
            placeholder="Был ли опыт в айти? (если да, то опишите какой)"
            minLength={4}
            {...register("experience", {
              required: true,
            })}
            required
            disabled={isLoading}
          />
          {errors.experience && <p className="text-red-500">Поле обязательно для заполнения</p>}
        </div>

        <div className="w-full">
          <input
            className="w-full bg-transparent border-b-[1px] border-primary-bg focus:outline-none"
            id="from"
            type="text"
            placeholder="Вы из РФ?"
            {...register("from", {
              required: true,
            })}
            required
            disabled={isLoading}
          />
          {errors.from && <p className="text-red-500">Поле обязательно для заполнения</p>}
        </div>

        <div className="w-full">
          <select
            id="service"
            className="w-full bg-transparent border-b-[1px] border-primary-bg focus:outline-none"
            {...register("service", {
              required: true,
            })}
            defaultValue={""}
          >
            <option className="w-full bg-primary-dark text-secondary-light" disabled value={""}>
              Какая услуга вас интересует?*
            </option>
            {serviceNames.map((service) => (
              <option key={service} value={service} className="w-full bg-primary-dark">
                {service}
              </option>
            ))}
          </select>

          {errors.service && <p className="text-red-500">Выберите услугу из списка</p>}
        </div>

        <div className="w-full">
          <textarea
            className="w-full bg-transparent border-b-[1px] border-primary-bg focus:outline-none"
            id="comment"
            placeholder="Комментарий"
            {...register("comment")}
            disabled={isLoading}
          />
        </div>
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
