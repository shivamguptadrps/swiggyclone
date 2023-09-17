import React, { useState } from "react";
import { WHAT_ON_MIND } from "../utils/constant";

const WhatOnMind = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container p-4  relative overflow-hidden ">
      <h1 className="mx-40 font-bold font-black text-3xl">
        What's on your mind?
      </h1>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-700"
        onClick={prevSlide}
      >
        Previous
      </button>
      <div className="carousel-content flex space-x-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-1/2 h-15 transition-transform transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-1/2"
            }`}
          >
            <img
              src={WHAT_ON_MIND + image}
              alt={`Image ${index + 1}`}
              style={{ width: "800px" }} // Set a reasonable width value here
            />
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-700"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default WhatOnMind;
