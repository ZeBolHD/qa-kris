import { useContext } from "react";
import { TrainingFormContext } from "../TrainingFormProvider";

import BugCheckbox from "./BugCheckbox";

const FoundBugs = () => {
  const { foundBugs, triggerBug } = useContext(TrainingFormContext);

  const onLastClick = () => {
    triggerBug("checkbox");
  };

  return (
    <div className="flex gap-x-10 gap-y-3 flex-wrap">
      {foundBugs.map((bug, index) => (
        <BugCheckbox key={bug.name} index={index} {...bug} onClick={onLastClick} />
      ))}
    </div>
  );
};

export default FoundBugs;
