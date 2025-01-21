import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(
    cartItems.reduce(
      (total, item) => total + (item.price / 100) * (item.quantity || 1),
      0
    )
  );

  const isCartEmpty = cartItems.length === 0;

  const clearCartItem = () => {
    dispatch(clearCart());
  };

  const updateTotalPrice = (priceChange) => {
    setTotalPrice((prevTotal) => prevTotal + priceChange);
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen p-6">
      <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-md mb-6">
        <h1 className="text-xl font-bold text-gray-800 text-center">Your Cart</h1>
      </div>

      <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-md">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem
              key={index}
              name={item.name}
              price={item.price}
              imageId={item.imageId}
              quantity={item.quantity || 1}
              updateTotalPrice={updateTotalPrice}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty!</p>
        )}

        {!isCartEmpty && (
          <div className="mt-4 border-t pt-4 flex items-center justify-between">
            {/* Place Order Button */}
            <button
              className="bg-purple-900 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-400 transition duration-200"
            >
              Place Order
            </button>

            {/* Clear Cart Button */}
            <button
              className="bg-purple-900 text-white font-semibold py-2 px-6 rounded-md hover:bg-red-700 transition duration-200"
              onClick={() => {
                clearCartItem();
              }}
            >
              Clear Cart
            </button>

            {/* Total Price */}
            <p className="text-lg font-semibold text-gray-700">
              Total: ₹{totalPrice.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
