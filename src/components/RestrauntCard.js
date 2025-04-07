import { useContext } from "react";
import { IMG_CDN_URL } from "../config";
import UserContext from "../utils/UserContext";

const RestrauntCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  id,
}) => {
  const { user } = useContext(UserContext);

  return (
    <div className="w-64 h-96 p-4 m-10 bg-white/30 backdrop-blur-md border border-white border-opacity-20 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between">
      <img
        className="h-40 w-full object-cover rounded-t-2xl"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="flex flex-col items-center text-center mt-4 px-2">
        <h2 className="font-bold text-lg truncate w-full">{name}</h2>
        <h3
          className="text-sm text-gray-600 truncate w-full"
          title={cuisines.join(", ")}
        >
          {cuisines.join(", ")}
        </h3>
        <h4 className="text-sm font-medium text-green-600 mt-2">
          {avgRating} Ratings
        </h4>
      </div>
      <div className="flex justify-center mt-4 px-2">
        <button className="px-4 py-1 bg-purple-900 hover:bg-blue-600 text-white rounded-md transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default RestrauntCard;
