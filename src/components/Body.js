import { useState, useEffect, useContext } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const filterData = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Body = () => {
  const [allresturants, setAllResturants] = useState([]);
  const [filteredresturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&collection=80435&tags=layout_CCS_PureVeg&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    const allCards = json.data.cards;
    const restaurants = allCards.slice(3).map((card) => card.card.card);

    setAllResturants(restaurants);
    setFilteredResturants(restaurants);
  }

  const online = useOnline();

  if (!online) {
    return (
      <h1 className="text-center mt-10 text-red-600 font-bold text-xl">
        You are offline. Please check your internet connection!
      </h1>
    );
  }

  return allresturants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* Search Bar Section with Glassmorphism */}
      <div className="p-6 mt-6 mx-6 bg-white/30 backdrop-blur-md shadow-xl rounded-2xl border border-white border-opacity-20">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Search Restaurants..."
            className="w-full sm:w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FEA116] shadow-md bg-white/60 backdrop-blur-md placeholder-gray-500"
            value={searchText}
            onChange={(e) => {
              const text = e.target.value;
              setSearchText(text);
              if (text === "") {
                setFilteredResturants(allresturants);
              }
            }}
          />

          <button
            className="bg-[#FEA116] hover:bg-[#e48f10] text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
            onClick={() => {
              const data = filterData(searchText, allresturants);
              setFilteredResturants(data);
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Restaurant Cards Section with Glassmorphic Effect */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
        {filteredresturants.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/resturant/${restaurant.info.id}`}>
            <div className="bg-white/30 backdrop-blur-md shadow-xl rounded-2xl border border-white border-opacity-20 p-4">
              <RestrauntCard {...restaurant.info} user={user} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
