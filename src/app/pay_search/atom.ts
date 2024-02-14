import { atom } from "jotai";

export interface Patient {
  name: string;
  number: string;
}

export const patientInfoAtom = atom<Patient | undefined>(undefined);
