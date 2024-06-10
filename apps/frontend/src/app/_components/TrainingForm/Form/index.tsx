import { SubmitHandler, useForm } from "react-hook-form";
import { Character } from "../types";
import { useContext, useState } from "react";
import { TrainingFormContext } from "../TrainingFormProvider";
import { clothes, clothesKeys, genderKeys, genders, hairColors, hairColorsKeys } from "../consts";
import { cn } from "@/lib/utils";

const Form = () => {
  const { register, handleSubmit, reset } = useForm<Character>();
  const { setCharacter } = useContext(TrainingFormContext);

  const onSubmit: SubmitHandler<Character> = (character) => {
    setCharacter(character);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-[20px] font-normal">
      <div className="w-full flex justify-between items-center">
        <label className="font-bold" htmlFor="gender">
          Пол:*
        </label>
        <div className="flex gap-[15px]">
          {genderKeys.map((gender) => (
            <div key={gender} className="flex gap-3 items-center">
              <input
                type="radio"
                id={`gender_${gender}`}
                value={gender}
                className="h-[20px] w-[20px]"
                {...register("gender")}
              />
              <label htmlFor={`gender_${gender}`}>{genders[gender]}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-[25px] flex justify-between h-fit items-center">
        <label htmlFor="hairColor" className="font-bold">
          Цвет волос:*
        </label>
        <select
          className="w-[280px] py-[5px] px-[20px] bg-transparent border-2 border-secondary-dark rounded-[15px]"
          id="hairColor"
          defaultValue=""
          {...register("hairColor")}
        >
          <option value="" disabled>
            Выберите цвет волос*
          </option>
          {hairColorsKeys.map((hairColor) => (
            <option key={hairColor} value={hairColor}>
              {hairColors[hairColor]}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full mt-[25px] flex justify-between h-fit items-center">
        <label htmlFor="cloth" className="font-bold">
          Тип одежды:*
        </label>
        <select
          className="w-[280px] py-[5px] px-[20px] bg-transparent border-2 border-secondary-dark rounded-[15px]"
          id="cloth"
          defaultValue=""
          {...register("cloth")}
        >
          <option value="" disabled>
            Выберите тип одежды
          </option>
          {clothesKeys.map((cloth) => (
            <option key={cloth} value={cloth}>
              {clothes[cloth]}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full mt-[25px] justify-between h-fit items-center">
        <div className="flex w-full items-center justify-between">
          <label htmlFor="superpower" className="font-bold">
            Суперспособность:
          </label>
          <input
            type="text"
            id="superpower"
            {...register("superpower")}
            placeholder="Unknown"
            className="w-[280px] py-[4px] px-[20px] bg-transparent border-2 border-secondary-dark rounded-[15px] max-tablet:w-[300px]"
          />
        </div>

        <p className="mt-2 text-[14px] text-right">Максимальная длина: 20</p>
      </div>

      <div className="w-full mt-[25px] h-fit">
        <div className="flex w-full items-center justify-between">
          <label htmlFor="characteristic" className="font-bold">
            Характеристика:
          </label>
          <input
            type="text"
            id="characteristic"
            {...register("characteristic")}
            placeholder="Unknown"
            className="w-[280px] py-[4px] px-[20px] bg-transparent border-2 border-secondary-dark rounded-[15px] max-tablet:w-[300px]"
          />
        </div>
        <p className="mt-2 text-[14px] text-right">Максимальная длина: 20</p>
      </div>

      <div className="mt-5 w-full flex justify-center">
        <button
          className="text-primary-bg mx-auto bg-secondary-dark py-2 px-5 rounded-[15px]"
          type="submit"
        >
          Создать
        </button>
      </div>
    </form>
  );
};

export default Form;
