import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  //const params = useParams(); also we can write  ;
  //const {id} = params;
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
        resId
    );
    const json = await data.json();
    setRestaurant(json.data);
  }

  return !Restaurant ? (
    <shimmer />
  ) : (
    <div className="menu">
      <h1>Restaurant id: {id}</h1>
      <h2>{restaurant?.name}</h2>
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
      <h3>{restaurant?.area}</h3>
      <h3>{restaurant?.city}</h3>
      <h3>{restaurant?.avgRating} stars</h3>
      <h3>{restaurant?.costForTwoMsg}</h3>{" "}
      <div>
        <h1>menu</h1>
        <ul>
          {Object.values(
            restaurant?.menu?.items.map((items) => (
              <li key={items.id}>{items.name}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  );

  r;
};

export default RestaurantMenu;
