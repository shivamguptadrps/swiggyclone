import React from "react";
import { RECIPE_IMG } from "../utils/constant";
const ItemList = ({ data }) => {
  // const {name , price, description } = data
  return (
    <div>
      {data.itemCards.map((card) => (
        <div
          key={card.card.info.id}
          className="p-2 m-5 border-gray-150  border-b"
        >
          <div className="flex justify-between">
            <div className="py-2 w-10/12">
              <span className="w-6 text-sm h-auto">🟢 ⭐BestSeller</span>
              <div className="text-lg  font-medium">{card.card.info.name}</div>
              <h5>₹{card.card.info.price / 100}</h5>
              <p className="text-sm">{card.card.info.description}</p>
            </div>

            <div className="w-2/12">
              <div>
                <button className="h-9 p-2 mx-6 my-12   font-semibold text-green-600 text-sm rounded-lg bg-white shadow-lg absolute m-auto">
                  {" "}
                  ADD +
                </button>
              </div>
              <img
                className="rounded-lg w-24"
                src={RECIPE_IMG + card.card.info.imageId}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
