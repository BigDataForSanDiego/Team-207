import { create } from "zustand";
import { createSetter } from "../Utils/Funtions";
import { SymptomType } from "../Utils/Types";

interface GlobalType {
  searchText: string;
  selectedSymptoms: SymptomType[];
  setSearchText: (searchText: string | ((prev: string) => string)) => void;
  setSelectedSymptoms: (symptoms: SymptomType[] | ((prev: SymptomType[]) => SymptomType[])) => void;
}

const useGlobal = create<GlobalType>((set) => ({
  searchText: "",
  selectedSymptoms: [],
  setSearchText: createSetter<GlobalType>(set)("searchText"),
  setSelectedSymptoms: createSetter<GlobalType>(set)("selectedSymptoms"),
}));

export default useGlobal;
