import useGlobal from "../Store/useGlobal";
import { capitalize } from "../Utils/Funtions";

const Diseases = () => {
  const { diseases } = useGlobal();

  return (
    <div className="flex flex-col gap-6">
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
            <div className="flex-1">
              <h4 className="text-2xl text-gray-200 font-semibold">{"Treatments"}</h4>
              <div className="ml-4">
                {disease.treatments.map((treatment, index) => (
                  <li key={index} className="text-gray-400">
                    {capitalize(treatment)}
                  </li>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-2xl text-gray-200 font-semibold">{"Precautions"}</h4>
              <div className="ml-4">
                {disease.precautions.map((precaution, index) => (
                  <li key={index} className="text-gray-400">
                    {capitalize(precaution)}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Diseases;
