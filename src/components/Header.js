import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import Logo from "../Asset/utensil.png";

const Title = () => {
  return (
    <a href="/" className="flex items-center">
      <img className="h-24 p-2" src={Logo} alt="Logo" />
      <p className="ml-2 text-4xl font-bold font-serif text-[#FEA116]">
        College Bites
      </p>
    </a>
  );
};

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState("false");
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.item);

  return (
    <div
      className="flex justify-between items-center px-8 py-4 mx-6 my-4 rounded-2xl shadow-lg
                 bg-white/30 backdrop-blur-md border border-white/40"
    >
      <Title />

      <div className="flex space-x-6 text-lg font-medium text-gray-800">
        <Link to="/" className="hover:text-[#FEA116] transition">
          Home
        </Link>
        <Link to="/About" className="hover:text-[#FEA116] transition">
          About Us
        </Link>
        <Link to="/Contact" className="hover:text-[#FEA116] transition">
          Contact Us
        </Link>
        <Link to="/delivery" className="hover:text-[#FEA116] transition">
          Delivery
        </Link>
        <Link to="/instamart" className="hover:text-[#FEA116] transition">
          Instamart
        </Link>
        <span className={isOnline ? "text-green-500" : "text-red-500"}>
          {isOnline ? "Online" : "Offline"}
        </span>
      </div>

      <div className="flex items-center space-x-6">
        <button
          className="px-4 py-2 bg-[#FEA116] text-white rounded-full hover:bg-[#e08d12] transition"
          onClick={() => {
            setIsUserLoggedIn(!isUserLoggedIn);
          }}
        >
          {isUserLoggedIn ? "Login" : "Logout"}
        </button>

        <Link
          to="/cart"
          className="relative flex items-center gap-2 px-4 py-2 rounded-full border border-[#FEA116] text-[#FEA116] hover:bg-[#FEA116] hover:text-white transition duration-300"
        >
          <span className="text-xl">🛒</span>
          <span className="font-semibold">Cart</span>
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md animate-pingOnce">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
