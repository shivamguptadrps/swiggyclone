import RestaurantCard, { PromotedCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { LISTING_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Carousel from "./Crousel";
import WhatOnMind from "./WhatOnMind";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const PromotedRestaurantCard = PromotedCard(RestaurantCard);
  const [posterList, setPosterList] = useState([]);
  const [whatMindList, setwhatMindList] = useState([]);
  useEffect(() => {
    console.log("using use effect");
    fetch_data();
  }, []);
  const [searchText, setSearchtext] = useState("");
  const fetch_data = async () => {
    const data = await fetch(LISTING_API);
    const json = await data.json();
    setrestaurantList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    const listOfImage = json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    setPosterList(listOfImage.map((obj) => obj.imageId).slice(0, 3));
    const whatOfImage =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info;
    setwhatMindList(whatOfImage.map((obj) => obj.imageId));
  };
  let onlinecheck = useOnlineStatus();
  if (onlinecheck == false) {
    return <h1>Please check your connection</h1>;
  }

  return restaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body m-50">
      <div className="mx-20">
        <Carousel items={posterList} />
      </div>
      <div>
        <WhatOnMind images={whatMindList} />
      </div>
      <div className=" flex mx-20">
        <div className="search m-2 p-2">
          <input
            className="border rounded-sm border-solid  border-black"
            m-4
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          ></input>
          <button
            className="bg-green-200 px-4 rounded-md m-4"
            onClick={() => {
              const filterrestaurant = restaurantList.filter((restaurant) => {
                return restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setrestaurantList(filterrestaurant); // Move this line here
            }}
          >
            Search
          </button>
        </div>
        <div className="rounded-lg h-6 my-8 w-50 flex items-center">
          <button
            className="filter-btn  bg-green-200  rounded-md "
            onClick={() => {
              console.log(restaurantList);
              setrestaurantList(
                restaurantList.filter(
                  (restaurant) => restaurant.info.avgRating > 4
                )
              );
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="mx-20">
        <div className="h-52 flex flex-wrap">
          {restaurantList.map((restaurant) => (
            <Link to={"restaurant/" + restaurant.info.id}>
              {restaurant?.info?.promoted ? (
                <PromotedRestaurantCard resData={restaurant} />
              ) : (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
