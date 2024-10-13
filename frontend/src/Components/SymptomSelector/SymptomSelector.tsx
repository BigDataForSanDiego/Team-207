import Symptoms from "./Symptoms";
import TagInput from "./TagInput";
import symptoms from "../../Data/symptoms.json";
import rawSymptoms from "../../Data/rawSymptoms.json";
import { useEffect, useState } from "react";
import useGlobal from "../../Store/useGlobal";
import usePOST from "../../Hooks/usePOST";

const SymptomSelector = () => {
  symptoms.sort((a, b) => a.name.localeCompare(b.name));
  const [filteredSymptoms, setFilteredSymptoms] = useState(symptoms);
  const { searchText, selectedSymptoms, setDiseases } = useGlobal();
  const { post } = usePOST();

  useEffect(() => {
    setFilteredSymptoms(
      symptoms.filter((symptom) => symptom.name.toLowerCase().includes(searchText.toLowerCase()))
    );
  }, [symptoms, searchText]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formattedSymptoms = selectedSymptoms.map((symptom) =>
      symptom.name.toLowerCase().replace(/ /g, "_")
    );

    post({
      url: "/api/predict/disease",
      body: rawSymptoms.map((symptom) => (formattedSymptoms.includes(symptom) ? 1 : 0)),
      handleData: (data) => setDiseases(data),
    });
  };

  return (
    <form
      className="card bg-[#15191E] dark:bg-base-300 p-4 w-[800px] max-h-[500px]"
      onSubmit={handleSubmit}
    >
      <p className="text-xl font-bold mb-4 border-b pb-2 text-white">Select Symptoms</p>
      <TagInput />
      <Symptoms symptoms={filteredSymptoms} />
      <button
        className="btn btn-block mt-6 bg-blue-500 hover:bg-blue-600 text-white text-lg disabled:bg-zinc-800 disabled:text-zinc-400 border-none"
        disabled={selectedSymptoms.length == 0}
        type="submit"
      >
        {"Search Diseases"}
      </button>
    </form>
  );
};

export default SymptomSelector;
