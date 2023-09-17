import { CDN_URL } from "../utils/constant";
export const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card m-3 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="res-logo rounded-2xl h-50 w-[100%]"
        src={CDN_URL + resData.info.cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 px-2 text-lg">{resData.info.name}</h3>
      <h4 style={{ margin: 5 }}>
        {resData.info.cuisines.slice(1, 3).join(",")}
      </h4>
      <h4>{resData.info.avgRating}Stars</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
      <h4>{resData.info.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
export const PromotedCard = (RestaurantCard) => {
  return (props) => {
    <div>
      <label>promoted</label>
      <RestaurantCard {...props}/>
    </div>;
  };
};

