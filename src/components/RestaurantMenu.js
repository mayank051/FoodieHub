import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);

  const {
    name,
    costForTwoMessage,
    totalRatingsString,
    cuisines = [],
  } = resData?.data?.cards[2]?.card?.card?.info || {};
  const cuisinesString = cuisines.join(", ");

  const menuGroups =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      .card.itemCards || [];

  return resData ? (
    <div>
      <h2>{name}</h2>
      <p>
        {cuisinesString} | {costForTwoMessage} | {totalRatingsString}
      </p>
      <ul>
        {menuGroups.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  ) : (
    <Shimmer />
  );
};

export default RestaurantMenu;
