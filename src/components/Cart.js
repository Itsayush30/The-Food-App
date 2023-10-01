import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai"; // Import the cart icon
import FoodItem from "./Fooditem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 flex items-center">
        <AiOutlineShoppingCart className="text-4xl mr-2" /> Cart Items ({cartItems.length})
      </h1>
      {cartItems.length === 0 ? (
        <div className="text-xl text-gray-600 flex items-center justify-center h-64">
          <p>Your cart is empty.</p>
          <AiOutlineShoppingCart className="text-4xl ml-2" />
        </div>
      ) : (
        <>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-red-600 transition duration-300"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cartItems.map((item) => (
              <FoodItem key={item.id} {...item} />
            ))}
          </div>
          {/* Proceed to Pay Button */}
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600 transition duration-300"
            onClick={() => {/* Handle payment logic here */}}
          >
            Proceed to Pay
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
