import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () =>{
    const {user} = useContext(UserContext)
    return(
      <div>
        <h1 className="text-red-950 font-bold p-10">
          This site is developed by @ {user.name}
        </h1>
      </div>
    );
  };
export default Footer