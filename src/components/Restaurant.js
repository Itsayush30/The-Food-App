import { IMG_CDN_URL } from "../contants";


// Restaurant card component: Image, name, cuisine
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
        <img
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
        />
          <h1>{name}</h1>
          <h2>{cuisines.join(", ")}</h2>
          <h3>{area}</h3>
          <h4>{lastMileTravelString}</h4>
          <h5>{costForTwoString}</h5>
      </div>
    );
  };

  export default RestaurantCard;