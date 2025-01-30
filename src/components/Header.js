import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
// import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Logo from "../Asset/utensil.png"

const Title = () =>{
  return (
  <a href="/" className="flex items-center">
    <img className="h-24 p-2" src={Logo} alt="Logo" />
    <p className="ml-2 text-4xl font-bold font-serif text-[#FEA116] " >College Bites</p>
  </a>
  )
};

const Header = () =>{
  const [isUserLoggedIn, setIsUserLoggedIn] = useState("false");
  const isOnline = useOnline();
  const cartItems = useSelector(store => store.cart.item);

  
  return(
    <div className="flex justify-between space-x-3 shadow-lg">
    <Title/>
     <div className="flex justify-between  space-x-5 mt-10">
     <Link to="/">Home</Link>
     <Link to ="/About">About Us</Link>
     <Link to="/Contact">Contact Us</Link>
     <a href="#">Delivery</a>
     <Link to="/instamart">Instamart</Link>
     <h1>{ 
      isOnline ? "online" : "offilne"
    }</h1>
     </div>
     <button onClick={() =>{
       setIsUserLoggedIn(!isUserLoggedIn) 
      }}>{isUserLoggedIn ? "Login" : "Logout"}</button>
      <Link to={"/cart"} className="p-10 m=10">Cart-{cartItems.length}</Link> 
     
      {/* { <h2 className=" p-10 text-red-600 font-bold ">{user.name}</h2>} */}
      {/* { <h2 className="p-10 text-red-600 font-bol">{user.email}</h2> } */}
     
    </div>
  );
};

export default Header;

 