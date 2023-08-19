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
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
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
