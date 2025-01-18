import { useContext } from "react";
import { IMG_CDN_URL } from "../config";
import UserContext from "../utils/UserContext";
const RestrauntCard = (
    {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    // user Earlier we use pror drilling to pass the data now we use useContext to pass data
  }) =>{
    const {user} = useContext(UserContext);
    return(
      <div className="w-56 h-90 p-3 m-3 shadow-lg bg-pink-50 flex flex-col justify-between ">
         <img src={ IMG_CDN_URL +
         cloudinaryImageId 
        }></img> 
        <h2 className="font-bold text-xl">{name}</h2>
         <h3 className="break-words">{cuisines.join(",")}</h3>
        <h4>{avgRating} Ratings</h4> 
        <h4 className="font-bold p-1">{user.name}</h4>
      </div>
    );
  };

  export default RestrauntCard; 