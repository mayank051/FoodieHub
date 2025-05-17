import React, { useState } from "react";
import ItemList from "./ItemList";

const MenuCategory = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const { title, itemCards } = data;
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      <div className="flex justify-between">
        <span className="font-bold text-lg">
          {title} {` (${itemCards.length})`}
        </span>
        <span
          className="cursor-pointer"
          onClick={() => setExpanded((expanded) => !expanded)}
        >
          {expanded ? `⬆️` : `⬇️`}
        </span>
      </div>
      <div>{expanded && <ItemList itemLists={itemCards} />}</div>
    </div>
  );
};

export default MenuCategory;
