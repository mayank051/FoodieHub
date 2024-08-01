import Card from "./Card";
import { respData } from "../mocks/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="res-container">
        {respData.map((resp) => {
          const restaurantData = resp.card.card.info;
          return <Card resData={restaurantData} key={restaurantData.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
