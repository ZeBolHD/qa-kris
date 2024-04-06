"use client";

import { sendApplication } from "@/lib/api/sendApplication";
import { cormorant } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [telegram, setTelegram] = useState<string>("");
  const [service, setService] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "idle">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setStatus("idle");

    const error = await sendApplication(name, telegram, service);

    if (error) {
      setStatus("error");
      setIsLoading(false);
      return;
    }

    setStatus("success");
    setName("");
    setTelegram("");
    setService("");
    setIsLoading(false);
  };

  if (status === "success") {
    return (
      <div className="w-full py-[60px] min-h-[525px] flex items-center justify-center border-[2px] border-primary-bg rounded-[25px]">
        <p className={cn(cormorant.className, "text-center text-[40px]")}>
          Заявка успешно отправлена!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full p-[60px] flex flex-col gap-y-[50px] text-[25px] border-[2px] border-primary-bg rounded-[25px]
      max-desktop:p-[50px] max-laptop:p-[30px] max-tablet:px-[60px] max-mobile:px-[23px] max-mobile:py-[25px] 
      max-desktop:text-[20px] max-laptop:text-[18px] max-tablet:text-[15px]"
    >
      <input
        className="w-full bg-transparent border-b-[1px] border-primary-bg focus:outline-none"
        id="name"
        type="text"
        placeholder="Ваше имя*"
        minLength={2}
        onChange={(e) => setName(e.target.value)}
        value={name}
        required
        disabled={isLoading}
      />

      <input
        className="w-full bg-transparent border-b-[1px] border-primary-bg focus:outline-none"
        id="telegram"
        type="text"
        placeholder="Ваш телеграм*"
        minLength={4}
        onChange={(e) => setTelegram(e.target.value)}
        value={telegram}
        required
        disabled={isLoading}
      />

      <input
        className="w-full bg-transparent border-b-[1px] border-primary-bg focus:outline-none"
        id="service"
        type="text"
        placeholder="Какая услуга вас интересует?*"
        minLength={4}
        onChange={(e) => setService(e.target.value)}
        value={service}
        required
        disabled={isLoading}
      />

      <div>
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
        <p className="mt-[50px] text-[20px] leading-[120%] text-secondary-light max-desktop:text-[17px] max-desktop:mt-[25px] max-laptop:text-[12px]">
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
