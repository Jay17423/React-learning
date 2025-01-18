import { useState,useEffect } from "react";
const useResturant = (id) =>{
    const [restaurantInfo, setRestaurantInfo] = useState(null);

      useEffect(() => {
        getResturantInfo();
      }, [id]); // Re-fetch when id changes
    
      async function getResturantInfo() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59080&lng=85.13480&restaurantId=${id}&catalog_qa=undefined&query=Biryani&submitAction=ENTER`);
        const json = await data.json();
        // console.log(json.data.cards[2].card.card.info.menu);
        console.log(json)
        setRestaurantInfo(json.data.cards[2].card.card.info);
      }

      return restaurantInfo;
}

export default useResturant;