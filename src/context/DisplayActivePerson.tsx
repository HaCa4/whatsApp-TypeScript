import { InitialSelectedPerson } from "../Constants/Types";
import React, { createContext, useState } from "react";

type ActivePersonType = {
  selectedPerson: InitialSelectedPerson | null;
  setSelectedPerson: React.Dispatch<React.SetStateAction<InitialSelectedPerson | null>>;
};
type DisplayActivePersonProviderProps = {
  children: React.ReactNode;
};
export const DisplayActivePerson = createContext({} as ActivePersonType);

export const DisplayActivePersonProvider = ({ children }: DisplayActivePersonProviderProps) => {
  const [selectedPerson, setSelectedPerson] = useState<InitialSelectedPerson | null>(null);
  return (
    <DisplayActivePerson.Provider value={{ selectedPerson, setSelectedPerson }}>
      {children}
    </DisplayActivePerson.Provider>
  );
};
