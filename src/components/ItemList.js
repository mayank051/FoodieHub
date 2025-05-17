import React from "react";
import { RESTAURANT_MENU_IMAGE_URL } from "../utils/constants";

const ItemList = ({ itemLists }) => {
  return (
    <div>
      {itemLists.map((item) => (
        <div
          key={item.card.info?.id}
          className="p-2 m-2 border-b-2 border-gray-200 flex justify-between text-left"
        >
          <div className="w-4/5">
            <p className="font-bold">{item.card.info?.name}</p>
            <span>
              ₹{" "}
              {item.card.info?.price / 100 ||
                item.card.info?.defaultPrice / 100}
            </span>
            <p className="text-xs">{item.card.info?.description}</p>
          </div>
          <div className="w-1/5">
            <div className="absolute">
              <button className="bg-green-200 rounded-lg shadow-lg p-2 mx-[56px] my-[96px] cursor-pointer">
                Add
              </button>
            </div>
            <img
              className="w-[156px] h-[144px] object-contain rounded-2xl"
              src={RESTAURANT_MENU_IMAGE_URL + item.card.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
