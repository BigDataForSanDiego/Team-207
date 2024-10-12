import useGlobal from "../Store/useGlobal";
import { SymptomType } from "../Utils/Types";

const TagInput = () => {
  const { searchText, setSearchText, selectedSymptoms, setSelectedSymptoms } = useGlobal();
  
  const handleRemoveTag = (toRemove: SymptomType) => {
    setSelectedSymptoms(prev => prev.filter((symptom) => symptom.name != toRemove.name));
  };

  return (
    <div className="flex flex-wrap gap-y-2 items-center bg-gray-800 rounded-lg p-2">
      {selectedSymptoms.map((symptom, index) => (
        <span key={index} className="flex items-center bg-gray-700 text-gray-400 px-2 py-1 rounded mr-2">
          {symptom.name}
          <button className="ml-2 text-red-500" onClick={() => handleRemoveTag(symptom)}>
            &times;
          </button>
        </span>
      ))}
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="flex-grow bg-transparent placeholder-slate-500 text-box py-1 px-2 text-lg text-white"
        placeholder="Enter a Symptom"
      />
    </div>
  );
};

export default TagInput;