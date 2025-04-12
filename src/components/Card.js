import { CDN_URL } from "../utils/constants";
const Card = ({ resData }) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    resData;
  return (
    <div className="m-4 p-4 w-[250px] h-[450px] bg-gray-100">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold text-lg py-2">{name}</h3>
      <h4 className="break-words">{cuisines.join(",")}</h4>
      <h4>{avgRating} ⭐️</h4>
      <h4>
        {sla.deliveryTime} minutes | {costForTwo}
      </h4>
    </div>
  );
};

export default Card;
