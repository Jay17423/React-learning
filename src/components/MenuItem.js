import React from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"

const MenuItem = ({ name, price, imageId, isVeg, id }) => {
const dispatch = useDispatch();
const addFoodItem = () =>{
  dispatch(addItem({ name, price, imageId}))
}


  return (
    <div className="flex items-center p-4 border border-gray-200 rounded-lg shadow-xl">
   
      <div className="flex-1">
     
        {/* <div className="flex items-center mb-2">
          <div
            className={`w-4 h-4 rounded-full border ${isVeg ? "border-green-600" : "border-red-600"}`}
          ></div>
          <span className="sr-only">{isVeg ? "Veg" : "Non-Veg"}</span>
        </div> */}

      
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>


        <p className="text-gray-600 font-medium">₹{price / 100}</p>

        {/* <p className="text-sm text-gray-500 mt-1">{id}</p>  */}
      </div>

      
      <div className="flex flex-col items-center ml-4">
      {imageId && (
          <img
            className="w-24 h-24 object-cover rounded-md mb-2"
            src={IMG_CDN_URL+imageId}
            alt={name}
          />
          
        )}
      <button className="flex  px-4 mt-[-15px] py-1 text-white bg-purple-900 hover:bg-green-600 rounded-md font-medium "
        onClick={() => addFoodItem({name,price,imageId})}
      >
            ADD
          </button>
        </div>
    </div>
  );
};

export default MenuItem;