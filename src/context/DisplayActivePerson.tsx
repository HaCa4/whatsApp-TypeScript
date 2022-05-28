import { InitialSelectedPerson, initialSelectedPerson } from "../Constants/AppConstants";
import React, { createContext, useState } from "react";

type ActivePersonType = {
  selectedPerson: InitialSelectedPerson | null;
  setSelectedPerson: React.Dispatch<React.SetStateAction<InitialSelectedPerson | null>>;
};
type DisplayActivePersonProviderProps = {
  children: React.ReactNode;
};
export const DisplayActivePerson = createContext<ActivePersonType | null>(null);

export const DisplayActivePersonProvider = ({ children }: DisplayActivePersonProviderProps) => {
  const [selectedPerson, setSelectedPerson] = useState<InitialSelectedPerson | null>(null);
  return (
    <DisplayActivePerson.Provider value={{ selectedPerson, setSelectedPerson }}>
      {children}
    </DisplayActivePerson.Provider>
  );
};