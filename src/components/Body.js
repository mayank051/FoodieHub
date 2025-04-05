import { useState, useEffect } from "react";
import Card from "./Card";
import { respData } from "../mocks/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LISTING_URL } from "../utils/constants";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

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

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            className="search-bar"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          ></input>
          <button onClick={handleSearch}>Search</button>
        </div>
        <button
          className="filter-btn"
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
      <div className="res-container">
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
