import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Title = () =>{
  return (
    <a href="/">
      <img className="h-28 p-2"  src="https://cdn.pnggallery.com/wp-content/uploads/swiggy-logo-01.png"></img>
    </a>
  )
};

const Header = () =>{
  const {user} = useContext(UserContext);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState("false");
  const isOnline = useOnline();
  
  return(
    <div className="flex justify-between space-x-3 bg-pink-100 shadow-lg">
    <Title/>
     <div className="flex justify-between  space-x-5 mt-10">
     <Link to="/">Home</Link>
     <Link to ="/About">About Us</Link>
     <Link to="/Contact">Contact Us</Link>
     <a href="#">Cart</a> 
     <a href="#">Delivery</a>
     <Link to="/instamart">Instamart</Link>
     <h1>{ 
      isOnline ? "online" : "offilne"
    }</h1>
     </div>
     <button onClick={() =>{
       setIsUserLoggedIn(!isUserLoggedIn) 
      }}>{isUserLoggedIn ? "Login" : "Logout"}</button>
     
      { <h2 className=" p-10 text-red-600 font-bold ">{user.name}</h2>}
      {/* { <h2 className="p-10 text-red-600 font-bol">{user.email}</h2> } */}
     
    </div>
  );
};

export default Header;

 