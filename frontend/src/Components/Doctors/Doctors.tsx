import { FaLocationDot, FaPhone } from "react-icons/fa6";
import useGlobal from "../../Store/useGlobal";
import { format_phone_number, kebabCase } from "../../Utils/Funtions";
import Stars from "./Stars";

const Doctors = () => {
  const { doctors } = useGlobal();

  return (
    <div className="flex flex-col gap-6">
      {doctors.length > 0 && (
        <h1 className="text-5xl font-bold text-white text-center">Recommended Doctors</h1>
      )}
      {doctors.slice(0, 5).map((doctor, index) => (
        <div
          key={index}
          className="card flex flex-row bg-[#15191E] dark:bg-base-300 p-8 gap-6 w-[800px]"
        >
          <div className="avatar">
            <div className="ring-blue-500 ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img src={doctor.picture} />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-3xl text-white font-semibold">
              <a
                href={`https://www.sharp.com/doctors/${kebabCase(doctor.name.split(",")[0])}`}
                target="_blank"
                className="hover:underline"
              >
                {doctor.name}
              </a>
            </h3>
            <p className="text-gray-400">{doctor.specialties.join(", ")}</p>
            <div className="flex pt-2">
              <div className="flex justify-center items-center gap-1">
                <FaLocationDot />
                <p className="text-gray-400">{doctor.locations[0]}</p>
              </div>
              <div className="flex flex-1 justify-center items-center gap-1">
                <FaPhone />
                <p className="text-gray-400 pb-1">{format_phone_number(doctor.contacts[0])}</p>
              </div>
              <div
                className={`flex flex-${
                  doctor.rating != -1 ? "end" : "1"
                } justify-center items-center gap-1`}
              >
                {doctor.rating != -1 && <Stars doctor={doctor} index={index} />}
                <p className="text-gray-400">
                  {doctor.rating != -1
                    ? `${(Math.round(doctor.rating * 10) / 10).toFixed(1)} / 5.0`
                    : "No Ratings"}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doctors;
