import { useContext } from "react";
import { TrainingFormContext } from "./TrainingFormProvider";

const ErrorBlock = () => {
  const { errorText, isError } = useContext(TrainingFormContext);

  if (!isError) {
    return (
      <div>
        <p>Протестируй модуль создания персонажа и найди 5 ошибок.</p>
        <p>
          Для поиска ошибок необходимо попробовать создать персонажа с различными вариантами
          заполнения полей.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-green-400 p-[20px]">
      <h4>Найден баг!</h4>

      <p>{errorText}</p>
    </div>
  );
};

export default ErrorBlock;
