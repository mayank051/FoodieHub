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

//HOC for displaying label for top rated restaurant
export const withTopRatedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-2xl m-2 p-2">
          Top Rated
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default Card;
