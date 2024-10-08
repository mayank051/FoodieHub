import { useState, useEffect } from "react";
import Card from "./Card";
import { respData } from "../mocks/mockData";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(respData);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8389444&lng=77.6898209&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log("Data-->", jsonData);
    // setListOfRestaurants(jsonData.data);
  };
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4.3
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resp) => {
          const restaurantData = resp.card.card.info;
          return <Card resData={restaurantData} key={restaurantData.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
