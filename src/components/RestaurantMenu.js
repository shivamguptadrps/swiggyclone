import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Menucard from "./Menucard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

export default function RestaurantMenu() {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  let resInfo = null;
  resInfo = useRestaurantMenu(resId);
  if (resInfo == null || resInfo == "") {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (onecard) => {
        return (
          onecard?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div className="text-center my-5 text-2xl">
      <h1 className=" font-bold mx-70">{name}</h1>
      <p className=" text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {categories.map((cardss, index) => (
        <Menucard
          key={cardss?.card?.card?.title}
          data={cardss?.card?.card}
          showItem={index == showIndex ? true : false}
          setShowIndex={(prop) => setShowIndex(index)}
        />
      ))}
    </div>
  );
}
