import { IMG_CDN_URL } from "../contants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {


  return (
    <div className="w-56 p-2 m-2 bg-green-300 shadow-md hover:shadow-xl">
      <img src={IMG_CDN_URL + cloudinaryImageId} className="rounded-md"/>
      <h2 className="font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{area}</h4>

      <h5
        style={avgRating < 4 ? { Color: "red" } : { color: "white" }}
      >
        {avgRating}
      </h5>
      <h6>{lastMileTravelString}</h6>
      <h7>{costForTwoString}</h7>
    
    </div>
  );
};

export default RestaurantCard;
