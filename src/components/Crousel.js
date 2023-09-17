// Carousel.js
import React, { useState } from "react";
import { CROUSEL_URL } from "../utils/constant";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(items);
  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex">
        {items.map((item, index) => (
          <div key={index} className="m-3">
            <img
              src={CROUSEL_URL + item}
              alt={`Item ${index + 1}`}
              className=" h-auto rounded-lg m-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
