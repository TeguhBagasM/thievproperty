import React from "react";
import { BiArea, BiBath, BiBed } from "react-icons/bi";

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } = house;

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-xs mx-auto cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
      <img className="w-full h-48 object-cover mb-4 rounded-lg" src={image} alt="House" />
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 mb-2">
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {type}
          </div>
          <div className="bg-violet-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {country}
          </div>
        </div>
        <div className="text-lg font-bold mb-2 text-gray-800">{address}</div>
        <div className="flex gap-4 mb-4 text-gray-600">
          <div className="flex items-center gap-1">
            <BiBath className="text-xl" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <BiBed className="text-xl" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <BiArea className="text-xl" />
            <span>{surface}</span>
          </div>
        </div>
        <div className="text-lg font-bold text-violet-600">{price}</div>
      </div>
    </div>
  );
};

export default House;
