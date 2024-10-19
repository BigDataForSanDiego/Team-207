import { round } from "../../Utils/Funtions";
import { DoctorType } from "../../Utils/Types";

interface StarsProps {
  doctor: DoctorType;
  index: number;
}

const Stars = ({ doctor, index }: StarsProps) => {
  return (
    <div
      className="rating rating-half hover:cursor-default group tooltip"
      data-tip={`${doctor.rating} / 5`}
    >
      <input type="radio" name={`rating-${index}`} className="rating-hidden" />
      {new Array(10).fill(0).map((_, starIndex) => {
        return (
          <input
            key={starIndex}
            type="radio"
            name={`rating-${index}`}
            className={`mask mask-star-2 bg-orange-400 mask-half-${(starIndex % 2) + 1} group-hover:cursor-default`}
            checked={round(doctor.rating, 0.5) * 2 - 1 == starIndex}
          />
        );
      })}
    </div>
  );
};

export default Stars;
