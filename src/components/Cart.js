import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen p-6">
      {/* Restaurant Header */}
      <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-md mb-6">
        <h1 className="text-xl font-bold text-gray-800">Namaste Lucknow</h1>
        <p className="text-gray-500">Gomti Nagar</p>
      </div>
      {/* Cart Items */}
      <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-md">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem
              key={index}
              name={item.name}
              price={item.price}
              imageId={item.imageId}
              quantity={item.quantity || 1}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty!</p>
        )}
        {/* Total Section */}
        <div className="mt-4 border-t pt-4">
          <p className="text-lg font-semibold text-gray-700 text-right">
            Total: ₹
            {cartItems.reduce(
              (total, item) => total + (item.price / 100) * (item.quantity || 1),
              0
            ).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
