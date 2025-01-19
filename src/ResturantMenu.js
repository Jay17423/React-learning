import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import useResturant from "./utils/useResturant";
import { useState, useEffect } from "react";
import MenuItem from "./components/MenuItem";

const ResturantMenu = () => {
  const { id } = useParams();
  const restaurantInfo = useResturant(id);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    if (restaurantInfo) {
      async function getMenu() {
        const data = await fetch(`
          https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.87560&lng=80.91150&restaurantId=${id}&catalog_qa=undefined&submitAction=EN`);
        const json = await data.json();
        console.log(json);
        const allData = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;

        const extractedData = allData.map(item => ({
          name: item.card.info.name,
          price: item.card.info.price,
          imageId: item.card.info.imageId,
          isVeg: item.card.info.isVeg,
          id: item.card.info.id
        }));

        setMenuItems(extractedData);
      }   

      getMenu();
    }
  }, [restaurantInfo, id]);

  return (
    <div>
      {restaurantInfo ? (
        <>
          <h2 className="text-center font-bold p-5">{restaurantInfo.name}</h2>
          {/* <img className="h-40 mx-auto rounded-md" src={IMG_CDN_URL + restaurantInfo.cloudinaryImageId} alt={restaurantInfo.name} /> */}
          <h3 className="text-center font-bold ">Avg Rating: {restaurantInfo.avgRating}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
            {menuItems.length > 0 ? (
              menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  name={item.name}
                  price={item.price}
                  imageId={item.imageId}
                  isVeg={item.isVeg}
                  id={item.id}
                />
              ))
            ) : (
              <p>Loading menu items...</p>
            )}
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default ResturantMenu;
