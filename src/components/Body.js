import { useState, useEffect } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LISTING_URL } from "../utils/constants";
import useOnlineStatus from "../hooks/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(RESTAURANT_LISTING_URL);
    const jsonData = await data.json();
    setLoading(false);
    const resList =
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestaurants(resList);
    setFilteredListOfRestaurants(resList);
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurants.filter((res) => {
      const resName = res.info.name.toLowerCase();
      if (resName.includes(searchInput.toLowerCase())) return true;
      return false;
    });
    setFilteredListOfRestaurants(filteredList);
  };

  if (!onlineStatus)
    return <h1>You are offline, please check your internet connection !</h1>;

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          ></input>
          <button
            className="px-4 py-1 m-4 bg-green-100 rounded-b-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="py-1 px-4 m-4 bg-green-100 rounded-b-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredListOfRestaurants(filteredList);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredListOfRestaurants.map((resp) => {
          const restaurantData = resp.info;
          return (
            <Link to={"/restaurant/" + restaurantData.id}>
              <Card resData={restaurantData} key={restaurantData.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
