import { useContext } from "react";
import { TrainingFormContext } from "../TrainingFormProvider";
import FoundBugs from "./FoundBugs";
import ErrorBlock from "./ErrorBlock";
import CharacterImage from "./CharacterImage";
import Link from "next/link";

const Result = () => {
  const { isError } = useContext(TrainingFormContext);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="w-full max-laptop:hidden">
        <FoundBugs />
      </div>
      <div className="flex h-full w-full items-center justify-center">
        {isError ? <ErrorBlock /> : <CharacterImage />}
      </div>
    </div>
  );
};

export default Result;
