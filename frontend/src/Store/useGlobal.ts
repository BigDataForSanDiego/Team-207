import { create } from "zustand";
import { createSetter } from "../Utils/Funtions";
import { DiseaseType, SymptomType } from "../Utils/Types";

interface GlobalType {
  searchText: string;
  diseases: DiseaseType[];
  selectedSymptoms: SymptomType[];
  setSearchText: (searchText: string | ((prev: string) => string)) => void;
  setDiseases: (diseases: DiseaseType[] | ((prev: DiseaseType[]) => DiseaseType[])) => void;
  setSelectedSymptoms: (symptoms: SymptomType[] | ((prev: SymptomType[]) => SymptomType[])) => void;
}

const useGlobal = create<GlobalType>((set) => ({
  diseases: [],
  searchText: "",
  selectedSymptoms: [],
  setDiseases: createSetter<GlobalType>(set)("diseases"),
  setSearchText: createSetter<GlobalType>(set)("searchText"),
  setSelectedSymptoms: createSetter<GlobalType>(set)("selectedSymptoms"),
}));

export default useGlobal;
