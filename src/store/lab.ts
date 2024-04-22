import { create } from "zustand";

interface ILab {
  id: number;
  designation: string;
  functional: number;
  nonFunctional: number;
  numberTotal: number;
}

interface Lab {
  labs: ILab[];
  errors: string;
  backetLabs: ILab[];
  updateLab(newLabs: ILab[]): void;
  updateErros(message: string): void;
}

export const useStore = create<Lab>((set) => ({
  labs: [
    {
      id: 1,
      designation: "Sala de aula Teórica",
      functional: 0,
      nonFunctional: 0,
      numberTotal: 0,
    },
    {
      id: 2,
      designation: "Sala de informatica",
      functional: 1,
      nonFunctional: 1,
      numberTotal: 1,
    },
    {
      id: 3,
      designation: "Laboratório de Automação",
      functional: 1,
      nonFunctional: 1,
      numberTotal: 1,
    },
  ],
  errors: "",
  backetLabs: [],
  updateLab: (newLabs) => set({ labs: newLabs }),
  updateErros: (message) => set({ errors: message }),
}));
