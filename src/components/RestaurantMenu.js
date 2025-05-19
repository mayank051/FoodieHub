import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  const [menuExpandedIndex, setMenuExpandedIndex] = useState(0);
  const {
    name,
    costForTwoMessage,
    totalRatingsString,
    cuisines = [],
  } = resData?.data?.cards[2]?.card?.card?.info || {};
  const cuisinesString = cuisines.join(", ");

  const menuCategories =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (group) =>
        group?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return resData ? (
    <div className="text-center">
      <h2 className="font-bold my-5 text-2xl">{name}</h2>
      <p className="font-bold text-lg">
        {cuisinesString} | {costForTwoMessage} | {totalRatingsString}
      </p>
      {menuCategories.map((category, index) => (
        <MenuCategory
          data={category?.card?.card}
          key={category?.card?.card?.categoryId}
          expanded={index === menuExpandedIndex}
          setMenuExpandedIndex={() =>
            menuExpandedIndex === index
              ? setMenuExpandedIndex(null)
              : setMenuExpandedIndex(index)
          }
        />
      ))}
    </div>
  ) : (
    <Shimmer />
  );
};

export default RestaurantMenu;
