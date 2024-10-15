import useGlobal from "../Store/useGlobal";

const Diseases = () => {
  const { diseases } = useGlobal();

  return (
    <div className="flex flex-col">
      {diseases.map((disease, index) => (
        <div key={index} className="card bg-[#15191E] dark:bg-base-300 p-8 gap-4 w-[800px]">
          <h3 className="text-3xl text-white font-semibold">{disease.name}</h3>
          <p className="indent-6 text-gray-400">{disease.description}</p>
          <h4 className="text-2xl text-gray-200 font-semibold">{"Suggestions"}</h4>
          <div className="ml-4">
            {disease.precautions.map((precaution, index) => (
              <li key={index} className="text-gray-400">
                {precaution[0].toUpperCase() + precaution.slice(1)}
              </li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Diseases;
