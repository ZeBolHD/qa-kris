import { useContext } from "react";
import { TrainingFormContext } from "../TrainingFormProvider";
import Image from "next/image";

const CharacterImage = () => {
  const { character } = useContext(TrainingFormContext);

  const src = `/characters/${character.gender}-${character.hairColor}-${character.cloth}.png`;

  if (!character.cloth || !character.gender || !character.hairColor) {
    return <p className="text-[20px] max-laptop:mt-5">Создайте своего персонажа</p>;
  }

  return (
    <div className="w-full font-light">
      <Image
        className="mx-auto w-[325px] h-[325px] object-cover"
        src={src}
        alt="character"
        width={500}
        height={500}
      />
      <p className="mt-5">
        Суперспособность: {character.superpower ? character.superpower : "unknown"}
      </p>
      <p className="mt-3">
        Характеристика: {character.characteristic ? character.characteristic : "unknown"}
      </p>
    </div>
  );
};

export default CharacterImage;
