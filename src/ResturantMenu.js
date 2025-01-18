import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import useResturant from "./utils/useResturant";

const ResturantMenu = () => {
  const { id } = useParams(); // Get restaurant id from the URL
  const restaurantInfo = useResturant(id);
  return (
    <div>
      {restaurantInfo ? (
        <>
          <h1>Restaurant id: {restaurantInfo.id}</h1>
          <h2>Name: {restaurantInfo.name}</h2>
          <img className="h-80" src={IMG_CDN_URL + restaurantInfo.cloudinaryImageId} alt={restaurantInfo.name} />
          <h3>Avg Rating: {restaurantInfo.avgRating}</h3>
          <h3>Avg Rating: {restaurantInfo.menu}</h3>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default ResturantMenu;
