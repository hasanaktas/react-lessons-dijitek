import { atom } from "recoil";

export const countriesAtom = atom({
  key: "countries", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
