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
  image: string;
  description: string;
  specializations: string[];
  contact: string;
  location: string;
  rating: number;
  reviews: number;
}