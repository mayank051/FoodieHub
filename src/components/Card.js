import { CDN_URL } from "../utils/constants";
const Card = ({ resData }) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    resData;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default Card;
