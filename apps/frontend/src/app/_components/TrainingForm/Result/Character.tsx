import { useContext } from "react";
import { TrainingFormContext } from "../TrainingFormProvider";
import Image from "next/image";

const Character = () => {
  const { character } = useContext(TrainingFormContext);

  const src = `/characters/${character.gender}-${character.hairColor}-${character.cloth}.png`;

  return (
    <div className="w-full font-normal p-[20px]">
      <Image
        className="mx-auto w-[250px] h-[250px] object-cover"
        src={src}
        alt="character"
        width={500}
        height={500}
      />
      <p className="mt-[10px]">
        Суперспособность: {character.superpower ? character.superpower : "unknown"}
      </p>
      <p className="mt-[10px]">
        Характеристика: {character.characteristic ? character.characteristic : "unknown"}
      </p>
    </div>
  );
};

export default Character;
