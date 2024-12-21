import React from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestraurantMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (!resInfo) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
  const{ itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card
  return  (
    <div className="menu pt-11 px-12">
      <h1 className="text-lg font-semibold">{name}</h1>
      <p className="text-sm"> 
        {cuisines?.join(", ")}
         --{costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul className="flex flex-col gap-2" >
        {itemCards.map((menu) => <li key={menu.card.info.id}>{menu.card.info.name} {"for Rs : "}{menu.card.info.defaultPrice/100 || menu.card.info.price/100}/-</li> )}
      </ul>
    </div>
  );
};

export default RestraurantMenu;