import { create } from "zustand";
import { createSetter } from "../Utils/Funtions";
import { DiseaseType, DoctorType, SymptomType } from "../Utils/Types";

interface GlobalType {
  searchText: string;
  doctors: DoctorType[];
  diseases: DiseaseType[];
  selectedSymptoms: SymptomType[];
  setSearchText: (searchText: string | ((prev: string) => string)) => void;
  setDoctors: (doctors: DoctorType[] | ((prev: DoctorType[]) => DoctorType[])) => void;
  setDiseases: (diseases: DiseaseType[] | ((prev: DiseaseType[]) => DiseaseType[])) => void;
  setSelectedSymptoms: (symptoms: SymptomType[] | ((prev: SymptomType[]) => SymptomType[])) => void;
}

const useGlobal = create<GlobalType>((set) => ({
  doctors: [],
  diseases: [],
  searchText: "",
  selectedSymptoms: [],
  setDoctors: createSetter<GlobalType>(set)("doctors"),
  setDiseases: createSetter<GlobalType>(set)("diseases"),
  setSearchText: createSetter<GlobalType>(set)("searchText"),
  setSelectedSymptoms: createSetter<GlobalType>(set)("selectedSymptoms"),
}));

export default useGlobal;
