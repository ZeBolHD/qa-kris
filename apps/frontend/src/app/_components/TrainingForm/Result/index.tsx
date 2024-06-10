import { useContext } from "react";
import { TrainingFormContext } from "../TrainingFormProvider";
import Character from "./Character";

const Result = () => {
  const { isError } = useContext(TrainingFormContext);

  if (isError) {
    return (
      <div className="flex justify-center items-center w-full mt-[25px]">
        <h3 className="text-center">Кажется, что-то пошло не так.</h3>
      </div>
    );
  }

  return <Character />;
};

export default Result;
