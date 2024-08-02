import { atom } from "recoil";

export const selectMonthAtoms = atom({
    key: "selectMonth",
    default: new Date().toISOString().slice(0, 7)
})