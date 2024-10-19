export interface SymptomType {
  name: string;
  description: string;
}

export interface DiseaseType {
  name: string;
  probability: number;
  description: string;
  precautions: string[];
  treatments: string[];
}

export interface DoctorType {
  name: string;
  picture: string;
  specialties: string[];
  contacts: string[];
  locations: string[];
  rating: number;
  score: number;
}