import { capitalize } from "../../Utils/Funtions";

interface ListProps {
  title: string;
  list: string[];
}

const List = ({ title, list } : ListProps) => {
  return (
    <div className="flex-1">
      <h4 className="text-2xl text-gray-200 font-semibold">{title}</h4>
      <div className="ml-4">
        {list.map((item, index) => (
          <li key={index} className="text-gray-400">
            {capitalize(item)}
          </li>
        ))}
      </div>
    </div>
  );
};

export default List;
