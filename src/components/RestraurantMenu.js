import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import {MENU_API} from "../utils/constants";

const RestraurantMenu = () => {
  const [resInfo, setresInfo] = useState([]);
  const [menuList, setmenuList] = useState([]);

  const {resId} = useParams();
  // console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);
  
  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API+resId
    );
    const json = await data.json();
    // console.log(json)
    // console.log(json.data.cards[2].card.card.info);
    setresInfo(json.data?.cards[2]?.card?.card?.info);
    const menu = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
    setmenuList(menu);
  };
    
  const {name,costForTwoMessage,cuisines} = resInfo;
  // console.log(menuList);
  if(resInfo == null || menuList.length == 0) return <Shimmer /> ;
  return  (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")}
         --{costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {menuList?.itemCards.map((menu) => <li key={menu.card.info.id}>{menu.card.info.name} {"for Rs : "}{menu.card.info.defaultPrice/100 || menu.card.info.price/100}/-</li> )}
        {/* Only map over menuList.itemCards if it exists */}
        {/* {menuList?.itemCards?.length > 0 ? (
          menuList.itemCards.map((menu, index) => (
            <li key={index}>{menu.card.info.name}</li>
          ))
        ) : (
          <li>No items available</li>
        )} */}
      </ul>
    </div>
  );
};

export default RestraurantMenu;
