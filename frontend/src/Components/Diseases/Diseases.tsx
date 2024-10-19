import useGlobal from "../../Store/useGlobal";
import List from "./List";

const Diseases = () => {
  const { diseases } = useGlobal();

  return (
    <div className="flex flex-col gap-6 mt-8">
      {diseases.length > 0 && (
        <h1 className="text-5xl font-bold text-white text-center">Possible Diseases</h1>
      )}
      {diseases.map((disease, index) => (
        <div key={index} className="card bg-[#15191E] dark:bg-base-300 p-8 gap-4 w-[800px]">
          <div className="flex justify-between pr-4">
            <h3 className="text-3xl text-white font-semibold">{disease.name}</h3>
            <h4 className="text-2xl text-gray-200 font-semibold">
              {(disease.probability * 100).toFixed(2)}% Match
            </h4>
          </div>
          <p className="text-gray-400">{disease.description}</p>
          <div className="flex">
            <List title="Treatments" list={disease.treatments} />
            <List title="Precautions" list={disease.precautions} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Diseases;
