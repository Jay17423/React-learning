import React, { useState } from "react";

const CartItem = ({ name, price, imageId, quantity, updateTotalPrice }) => {
  const IMG_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
  const [quantityCount, setQuantityCount] = useState(quantity);

  const handleQuantityChange = (change) => {
    const newQuantity = quantityCount + change;
    if (newQuantity < 0) return;
    setQuantityCount(newQuantity); 
    updateTotalPrice((price / 100) * change);
  };

  if (quantityCount === 0) return null;

  return (
    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4">
      {/* Image */}
      <div className="flex items-center space-x-4">
        <img
          src={`${IMG_CDN_URL}${imageId}`}
          alt={name}
          className="w-20 h-20 object-cover rounded-md"
        />
        <div>
          {/* Name */}
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          {/* Price */}
          <p className="text-gray-600 font-medium mt-1">
            ₹{(price / 100).toFixed(2)}
          </p>
        </div>
      </div>
      {/* Quantity and Price */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-md">
          <button
            className="px-3 py-1 text-gray-700 font-medium hover:bg-gray-100"
            onClick={() => handleQuantityChange(-1)} 
          >
            -
          </button>
          <span className="px-3 py-1 text-gray-800 font-medium">{quantityCount}</span>
          <button
            className="px-3 py-1 text-gray-700 font-medium hover:bg-gray-100"
            onClick={() => handleQuantityChange(1)} // Increase quantity
          >
            +
          </button>
        </div>
        <p className="font-medium text-gray-700">
          ₹{((price / 100) * quantityCount).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
