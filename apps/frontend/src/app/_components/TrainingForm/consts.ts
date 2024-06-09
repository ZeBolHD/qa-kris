import { Bug, Character, Cloth, Gender, HairColor } from "./types";

export const hairColors: Record<HairColor, string> = {
  brown: "Брюнет",
  ginger: "Рыжий",
  blond: "Блондин",
  bald: "Лысый",
};

export const genders: Record<Gender, string> = {
  male: "Мужской",
  female: "Женский",
};

export const clothes: Record<Cloth, string> = {
  classic: "Классическая",
  sport: "Спортивная",
  home: "Домашняя",
};

export const genderKeys = Object.keys(genders) as Gender[];
export const hairColorsKeys = Object.keys(hairColors) as HairColor[];
export const clothesKeys = Object.keys(clothes) as Cloth[];

export const bugs: Bug[] = [
  { name: "emptyInput", triggered: false },
  { name: "notRequiredFields", triggered: false },
  { name: "minValue", triggered: false },
  { name: "emptyGender", triggered: false },
  { name: "checkbox", triggered: false },
];

export const initialCharacter: Character = {};
