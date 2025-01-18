import { useState, useEffect,useContext } from "react";
// import { resturantData } from "../config";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"; // Import Link component
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
  const {user,setUser} = useContext(UserContext);


  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    const restaurants = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

    setAllResturants(restaurants);
    setFilteredResturants(restaurants);
  }

  const online = useOnline();
  console.log(online);
  if( !online){
    return (
      <h1>You are offline please check your Interner Connection !</h1>
    )
  }

  return allresturants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 mt-2 bg-pink-100 ">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
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
          className=" p-2 m-3 bg-purple-900 text-white  rounded-md w-20"
          onClick={() => {
            const data = filterData(searchText, allresturants);
            setFilteredResturants(data);
          }}
        >
          Search
        </button>
        <input value={user.name} onChange={e => setUser({
          name : e.target.value,
          email : "jay@gmail.com"
        })}></input>
         
      </div>

      <div className="flex flex-wrap  ">
        {filteredresturants.map((restaurant) => {
          return (
            <Link key={restaurant.info.id} to={`/resturant/${restaurant.info.id}`}>
              <RestrauntCard {...restaurant.info} user = { user } />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
