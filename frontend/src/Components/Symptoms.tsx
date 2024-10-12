import { SymptomType } from "../Utils/Types";
import useGlobal from "../Store/useGlobal";

interface SymptomsProps {
  symptoms: SymptomType[];
}

const Symptoms = ({ symptoms }: SymptomsProps) => {
  const { setSearchText, selectedSymptoms, setSelectedSymptoms } = useGlobal();

  const handleSelectSymptom = (e: { preventDefault: () => void }, symptom: SymptomType) => {
    e.preventDefault();
    setSearchText("");

    if (selectedSymptoms.some((selected: SymptomType) => selected.name === symptom.name)) {
      setSelectedSymptoms((prev) =>
        prev.filter((selected: SymptomType) => selected.name !== symptom.name)
      )
    }else setSelectedSymptoms((prev) => [...prev, symptom]);
  };

  return (
    <div className="flex flex-col gap-2 overflow-auto mt-4">
      {symptoms.map((symptom: SymptomType) => (
        <button
          className={`card bg-[#1D232A] dark:bg-base-100 text-gray-400 flex flex-row items-center gap-4 px-4 py-2 text-left group`}
          onClick={(e) => handleSelectSymptom(e, symptom)}
          key={symptom.name}
        >
          <div className="flex flex-1 flex-col">
            <label
              htmlFor={symptom.name}
              className="text-lg text-white font-bold group-hover:cursor-pointer"
            >
              {symptom.name}
            </label>
            <p className="group-hover:cursor-pointer">{symptom.description}</p>
          </div>
          <input
            type="checkbox"
            className="checkbox border-gray-400"
            onChange={() => {}}
            checked={selectedSymptoms.some(
              (selected: SymptomType) => selected.name === symptom.name
            )}
          />
        </button>
      ))}
    </div>
  );
};

export default Symptoms;
