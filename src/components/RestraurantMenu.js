import React, {useState} from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestraurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  // const [showItem, setshowItem] = useState(false);
  const [showIndex, setshowIndex] = useState(0)
  if (!resInfo) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div className="menu pt-11 px-12 text-center">
      <h1 className="text-2xl font-bold mb-6">{name}</h1>
      <p className="text-lg font-semibold">
        {cuisines?.join(", ")}
        --{costForTwoMessage}
      </p>
      {/* <h3>Menu</h3>
      <ul className="flex flex-col gap-2" >
        {itemCards.map((menu) => <li key={menu.card.info.id}>{menu.card.info.name} {"for Rs : "}{menu.card.info.defaultPrice/100 || menu.card.info.price/100}/-</li> )}
      </ul> */}
      {categories.map((category, index) => (
        // controlled component restaurantMenu is contrlling this
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItem={index ===
             showIndex ? true : false}
          setshowIndex={() =>setshowIndex( showIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestraurantMenu;
