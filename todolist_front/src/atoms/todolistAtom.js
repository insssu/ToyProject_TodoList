import { atom } from "recoil";

export const selectMonthAtom = atom({
  key: "selectMonth",
  default: new Date().toISOString().slice(0, 7)
})
