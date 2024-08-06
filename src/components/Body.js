import { useState } from "react";
import Card from "./Card";
import { respData } from "../mocks/mockData";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(respData);
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
