import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU_URL + resId);
    const resp = await data.json();
    setResData(resp);
  };

  return resData;
};

export default useRestaurantMenu;
