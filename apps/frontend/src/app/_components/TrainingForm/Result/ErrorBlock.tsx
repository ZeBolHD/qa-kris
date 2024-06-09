import { useContext, useState } from "react";
import { TrainingFormContext } from "../TrainingFormProvider";

const ErrorBlock = () => {
  const { errorText, resetError } = useContext(TrainingFormContext);

  return (
    <div className="text-center mt-5">
      <p className="">{errorText}</p>
      <button
        className="py-2 px-5 rounded-[15px] text-primary-bg bg-secondary-dark mt-5"
        onClick={resetError}
      >
        Попробуйте ещё раз
      </button>
    </div>
  );
};

export default ErrorBlock;
