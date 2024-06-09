import { useEffect, useState } from "react";
import { Bug } from "../types";

interface BugCheckboxProps extends Bug {
  index: number;
  onClick?: () => void;
}

const BugCheckbox = ({ name, triggered, index, onClick }: BugCheckboxProps) => {
  const [checked, setIsChecked] = useState(false);

  useEffect(() => {
    if (triggered) {
      setIsChecked((prev) => !prev);
    }
  }, [triggered]);

  return (
    <div className="flex gap-2">
      <label htmlFor={name}>Ошибка {index + 1}</label>
      <input
        type="checkbox"
        id={name}
        key={name}
        checked={checked}
        onClick={() => (name === "checkbox" ? onClick?.() : null)}
        onChange={() => setIsChecked((prev) => !prev)}
      />
    </div>
  );
};

export default BugCheckbox;
