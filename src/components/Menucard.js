import React from "react";
import { useState } from "react";
import { RECIPE_IMG } from "../utils/constant";
import ItemList from "./ItemList";
function Menucard({ data, showItem, setShowIndex }) {
  // console.log(data);
  // const [showItem, setShowItem] = useState(true);
  const cards = data.itemCards;
  const handleClick = () => {
    console.log("clicked");
    setShowIndex(false);
    // showItem ? setShowItem(false) : setShowItem(true);
  };
  return (
    <div>
      <div className="w-7/12 mx-auto my-4  text-left">
        <div
          className="flex justify-between cursor-pointer "
          onClick={handleClick}
        >
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <div className="">{showItem ? <ItemList data={data} /> : ""}</div>
      </div>
    </div>
  );
}

export default Menucard;

// function Menucard({data}) {
//   console.log(props?.data[0]?.card?.info);
//   const { name, price, description, imageId } = props?.data?.card?.info;
//   console.log(RECIPE_IMG + imageId);
//   return (
//     <div className="menu-card ">
//       <div className="text-center">
//         <h3>{name}</h3>
//         <h4>{price}</h4>
//         <p>{description}</p>
//       </div>
//       <div className="menu-image">
//         <img className="res-logo" src={RECIPE_IMG + imageId}></img>
//       </div>
//     </div>
//   );
// }

// export default Menucard;
