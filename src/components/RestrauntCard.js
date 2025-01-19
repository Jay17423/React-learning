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
    <div className="w-64 h-96 p-4 m-10 shadow-lg bg-white rounded-lg hover:shadow-2xl transition-shadow flex flex-col justify-between">
      <img
        className="h-40 w-full object-cover rounded-t-lg"
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
      <div className="flex justify-between items-center mt-4 px-2">
        {/* <h4 className="text-sm font-semibold text-gray-700">{user.name}</h4> This was used for useContext hooks */}
        <button className=" px-4 py-1 bg-purple-900 text-white rounded-md hover:bg-blue-600 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default RestrauntCard;
