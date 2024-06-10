import { useContext } from "react";
import { TrainingFormContext } from "../TrainingFormProvider";
import BugCheckbox from "./BugCheckbox";

const BugList = () => {
  const { foundBugs, triggerBug } = useContext(TrainingFormContext);

  const onLastClick = () => {
    triggerBug("checkbox");
  };

  return (
    <ul className="flex justify-between flex-wrap p-[20px]">
      {foundBugs.map((bug, index) => (
        <BugCheckbox
          key={bug.name}
          index={index}
          {...bug}
          onClick={bug.name === "checkbox" ? onLastClick : undefined}
        />
      ))}
    </ul>
  );
};

export default BugList;
