import { FaArrowDownLong } from "react-icons/fa6";
import Diseases from "./Diseases/Diseases.tsx";
import Doctors from "./Doctors/Doctors.tsx";
import SymptomSelector from "./SymptomSelector/SymptomSelector.tsx";
import { useRef } from "react";
import useGlobal from "../Store/useGlobal.ts";

const App = () => {
  const mainPage = useRef<HTMLDivElement>(null!);
  const { doctors } = useGlobal();

  const handleClick = () => {
    if (mainPage) mainPage.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center my-12">
      <div className="flex items-center gap-3 mt-10">
        <img src="src/Assets/favicon.png" alt="logo" className="w-16" />
        <h1 className="text-5xl font-bold text-white">
          Medi<span className="text-blue-500">Protect</span>
        </h1>
      </div>
      <SymptomSelector />
      {doctors.length > 0 && <button onClick={handleClick} className="mt-4">
        <FaArrowDownLong className="text-3xl text-white" />
      </button>}
      <div className="flex flex-col gap-20 justify-center items-center" ref={mainPage}>
        <Diseases />
        <Doctors />
      </div>
    </div>
  );
};

export default App;
