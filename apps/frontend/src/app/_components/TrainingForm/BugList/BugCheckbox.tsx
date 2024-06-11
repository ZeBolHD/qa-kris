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
    <li className="flex gap-2">
      <label htmlFor={name}>Баг {index + 1}</label>
      <input
        type="checkbox"
        id={name}
        key={name}
        checked={checked}
        onClick={onClick}
        onChange={() => setIsChecked((prev) => (name === "checkbox" ? !prev : prev))}
      />
    </li>
  );
};

export default BugCheckbox;
