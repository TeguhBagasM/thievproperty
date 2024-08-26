import React from "react";
import { useParams } from "react-router-dom";
import { housesData } from "../data";
import { Link } from "react-router-dom";
import { BiArea, BiBath, BiBed } from "react-icons/bi";

const PropertyDetails = () => {
  const { id } = useParams();
  const house = housesData.find((house) => house.id === parseInt(id));

  if (!house) {
    return <div>Property not found</div>;
  }

  const { imageLg, type, city, address, bedrooms, bathrooms, surface, price, description } = house;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline mb-4 block">
        &larr; Back
      </Link>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <img className="w-full h-[400px] object-cover rounded-t-lg mb-4" src={imageLg} alt={address} />
        <div className="mb-4 text-2xl font-bold">{address}</div>
        <div className="text-xl text-gray-700 mb-4">{city}</div>
        <div className="text-lg font-semibold mb-4">{type}</div>
        <div className="flex gap-x-4 mb-4">
          <div className="flex items-center text-gray-600 gap-1">
            <BiBed className="text-xl" />
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center text-gray-600 gap-1">
            <BiBath className="text-xl" />
            <span>{bathrooms} Baths</span>
          </div>
          <div className="flex items-center text-gray-600 gap-1">
            <BiArea className="text-xl" />
            <span>{surface} sq ft</span>
          </div>
        </div>
        <div className="text-2xl font-bold text-violet-600 mb-4">{price}</div>
        <div className="text-lg text-gray-800">{description}</div>
      </div>
    </div>
  );
};

export default PropertyDetails;
