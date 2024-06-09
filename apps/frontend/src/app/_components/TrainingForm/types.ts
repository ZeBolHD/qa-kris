export type Gender = "male" | "female";
export type HairColor = "brown" | "ginger" | "blond" | "bald";
export type Cloth = "classic" | "sport" | "home";
export type Superpower = string | undefined;
export type Characteristic = string;

export type Character = {
  gender?: Gender;
  hairColor?: HairColor;
  cloth?: Cloth;
  superpower?: Superpower;
  characteristic?: Characteristic;
};

export type BugName = "emptyInput" | "notRequiredFields" | "minValue" | "emptyGender" | "checkbox";

export type Bug = {
  name: BugName;
  triggered: boolean;
};
