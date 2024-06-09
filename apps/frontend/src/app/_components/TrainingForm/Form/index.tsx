import { SubmitHandler, useForm } from "react-hook-form";
import { Character } from "../types";
import { useContext, useState } from "react";
import { TrainingFormContext } from "../TrainingFormProvider";
import { clothes, clothesKeys, genderKeys, genders, hairColors, hairColorsKeys } from "../consts";
import { cn } from "@/lib/utils";

const Form = () => {
  const { register, handleSubmit, reset } = useForm<Character>();
  const { setCharacter, isError } = useContext(TrainingFormContext);

  const [isSuperpower, setIsSuperpower] = useState(false);

  const onSubmit: SubmitHandler<Character> = (character) => {
    setCharacter(character);
  };

  if (isError) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <h3 className="text-center">Кажется, что-то пошло не так. Попробуйте ещё раз!</h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="font-light">
      <div className="flex gap-[60px] max-laptop:gap-0 max-laptop:justify-between max-tablet:flex-col max-tablet:gap-y-5">
        <div>
          <label htmlFor="gender">Пол:*</label>
          <div className="mt-[15px] py-[15px] px-[20px] w-fit flex flex-col gap-[15px] border-secondary-dark border-2  rounded-[15px]">
            {genderKeys.map((gender) => (
              <div key={gender} className="flex gap-3 items-center">
                <input
                  type="radio"
                  id={`gender_${gender}`}
                  value={gender}
                  className="h-[15px] w-[15px]"
                  {...register("gender")}
                />
                <label htmlFor={`gender_${gender}`}>{genders[gender]}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="hairColor">Цвет волос:*</label>
          <select
            className="mt-[15px] w-[275px] py-[10px] px-[20px] bg-transparent border-2 border-secondary-dark rounded-[15px]"
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
      </div>

      <div className="mt-5 flex flex-col">
        <label htmlFor="cloth">Тип одежды:*</label>
        <select
          className="mt-[15px] w-[280px] py-[10px] px-[20px] bg-transparent border-2 border-secondary-dark rounded-[15px]"
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

      <div className="mt-5">
        <div className="flex items-center">
          <label htmlFor="superpower_checkbox">Суперспособность:</label>
          <input
            type="checkbox"
            id="superpower_checkbox"
            className="ml-[10px] h-[16px] w-[16px]"
            checked={isSuperpower}
            onChange={() => {
              setIsSuperpower(!isSuperpower);
              reset({ superpower: "" });
            }}
          />
        </div>

        <input
          type="text"
          id="superpower"
          disabled={!isSuperpower}
          {...register("superpower")}
          placeholder="Введите суперспособность"
          className={cn(
            "mt-[15px] w-[350px] py-[5px] px-[20px] bg-transparent border-2 border-secondary-dark rounded-[15px] max-tablet:w-[300px]",
            !isSuperpower && "bg-secondary-dark bg-opacity-15",
          )}
        />
        <p className="mt-2 text-[16px]">Максимальная длина: 20</p>
      </div>

      <div className="mt-5 flex flex-col">
        <label htmlFor="characteristic">Характеристика:</label>
        <input
          type="text"
          id="characteristic"
          placeholder="Характеристика"
          {...register("characteristic")}
          className="mt-[15px] w-[350px] py-[5px] px-[20px] bg-transparent border-2 border-secondary-dark rounded-[15px] max-tablet:w-[300px]"
        />
        <p className="mt-2 text-[16px]">Максимальная длина: 20</p>
      </div>

      <div className="mt-5 flex">
        <button
          className="text-primary-bg bg-secondary-dark py-2 px-5 rounded-[15px]"
          type="submit"
        >
          Создать
        </button>
        <button
          className="py-[10px] px-[25px] w-fit mx-auto bg-primary-bg text-primary-dark rounded-[15px] border-2 border-primary-dark"
          type="button"
          onClick={() => reset()}
        >
          Сбросить форму
        </button>
      </div>
    </form>
  );
};

export default Form;
