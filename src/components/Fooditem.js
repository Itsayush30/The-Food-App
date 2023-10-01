import { ITEM_IMG_CDN_URL } from "../contants";
import { FaRupeeSign } from "react-icons/fa"; // Import the rupee icon

const FoodItem = ({ name, description, imageId, price }) => {
  return (
    <div className="w-72 p-2 m-2 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center"> {/* Use flex to center the image */}
        <img
          src={ITEM_IMG_CDN_URL + imageId}
          alt={name}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="mt-2">
        <h2 className="font-semibold text-xl mb-2">{name}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <div className="flex items-center">
          <FaRupeeSign className="text-green-600 text-xl mr-1" />
          <p className="text-gray-700">{price / 100}</p>
        </div>
        {/* You can add buttons for quantity or other actions here */}
      </div>
    </div>
  );
};

export default FoodItem;
