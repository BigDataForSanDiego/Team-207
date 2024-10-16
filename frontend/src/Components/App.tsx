import Diseases from "./Diseases.tsx";
import SymptomSelector from "./SymptomSelector/SymptomSelector.tsx";

const App = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center my-12">
      <div className="flex items-center gap-3">
        <img src="src/Assets/favicon.png" alt="logo" className="w-16" />
        <h1 className="text-5xl font-bold text-white">
          Medi<span className="text-blue-500">Protect</span>
        </h1>
      </div>
      <SymptomSelector />
      <Diseases />
    </div>
  );
};

export default App;
