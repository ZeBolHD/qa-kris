"use client";

import { createContext, useEffect, useState } from "react";
import { Bug, BugName, Character } from "./types";
import { bugs, initialCharacter } from "./consts";

interface TrainingFormContextProps {
  isError: boolean;
  errorText: string;
  resetError: () => void;
  foundBugs: Bug[];
  character: Character;
  setCharacter: (character: Character) => void;
  triggerBug: (name: BugName) => void;
  completed: boolean;
  resetForm: () => void;
}

const initialState: TrainingFormContextProps = {
  isError: false,
  errorText: "",
  resetError: () => {},
  foundBugs: bugs,
  character: initialCharacter,
  setCharacter: () => {},
  triggerBug: () => {},
  completed: false,
  resetForm: () => {},
};

export const TrainingFormContext = createContext<TrainingFormContextProps>(initialState);

interface TrainingFormProviderProps {
  children: React.ReactNode;
}

const TrainingFormProvider = ({ children }: TrainingFormProviderProps) => {
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [foundBugs, setFoundBugs] = useState(bugs);
  const [character, setCharacter] = useState(initialCharacter);
  const [completed, setCompleted] = useState(false);

  const resetForm = () => {
    setCharacter(initialCharacter);
    setFoundBugs(bugs);
    setCompleted(false);

    sessionStorage.setItem("foundBugs", JSON.stringify(bugs));
    sessionStorage.setItem("completed", JSON.stringify(false));
  };

  const resetError = () => {
    setIsError(false);
    setErrorText("");
  };

  const checkIsCompleted = () => {
    console.log(foundBugs, completed);
    if (foundBugs.filter((bug) => !bug.triggered).length === 0 && !completed) {
      setCompleted(true);
      sessionStorage.setItem("completed", "true");
    }
  };

  const triggerBug = (name: BugName) => {
    const newFoundBugs = foundBugs.map((bug) =>
      bug.name === name ? { ...bug, triggered: true } : bug,
    );

    setFoundBugs(newFoundBugs);

    sessionStorage.setItem("foundBugs", JSON.stringify(newFoundBugs));
  };

  const setNewCharacter = ({ gender, cloth, hairColor, superpower, characteristic }: Character) => {
    switch (true) {
      case !gender:
        triggerBug("emptyGender");
        setIsError(true);
        setErrorText("Если не выбирать пол персонажа происходит сбой");
        break;

      case !cloth || !hairColor || !gender:
        triggerBug("notRequiredFields");
        setIsError(true);
        setErrorText("Если не заполнять все обязательные поля происходит сбой");
        break;

      case superpower !== superpower?.trim() || characteristic !== characteristic?.trim():
        triggerBug("emptyInput");
        setIsError(true);
        setErrorText("Если заполнить пробелами текстовые поля происходит сбой");
        break;

      case (superpower && superpower.length > 20) || (characteristic && characteristic.length > 20):
        triggerBug("minValue");
        setIsError(true);
        setErrorText("Если написать больше 20 символов в текстовые поля, то произойдет сбой");
        break;
    }

    if (!isError) {
      setCharacter({ gender, cloth, hairColor, superpower, characteristic });
    }
  };

  useEffect(() => {
    const sessionBugs = sessionStorage.getItem("foundBugs");
    const sessionCompleted = sessionStorage.getItem("completed");

    if (!sessionBugs || !sessionCompleted) {
      sessionStorage.setItem("foundBugs", JSON.stringify(foundBugs));
      sessionStorage.setItem("completed", JSON.stringify(completed));
    } else {
      setFoundBugs(JSON.parse(sessionBugs));
      setCompleted(JSON.parse(sessionCompleted) === "true");
    }
  }, []);

  useEffect(() => {
    checkIsCompleted();
  }, [foundBugs]);

  return (
    <TrainingFormContext.Provider
      value={{
        foundBugs,
        isError,
        errorText,
        resetError,
        character,
        triggerBug,
        completed,
        resetForm,
        setCharacter: setNewCharacter,
      }}
    >
      {children}
    </TrainingFormContext.Provider>
  );
};

export default TrainingFormProvider;
