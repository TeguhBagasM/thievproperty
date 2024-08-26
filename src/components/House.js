import React, { useEffect, useRef, useState } from "react";
import { BiArea, BiBath, BiBed } from "react-icons/bi";

const House = ({ house, animationDirection = "left" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentRef = ref.current; // Save ref.current to a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the saved variable
      }
    };
  }, []);

  const animationClass = isVisible
    ? animationDirection === "right"
      ? "animate-slide-right"
      : "animate-slide-left"
    : "";

  return (
    <div
      ref={ref}
      className={`bg-blue-50 shadow-lg p-6 rounded-lg w-full max-w-xs mx-auto cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out ${animationClass}`}
    >
      <img className="w-full h-48 object-cover mb-4 rounded-t-lg" src={house.image} alt="House" />
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 mb-2">
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {house.type}
          </div>
          <div className="bg-violet-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {house.city}
          </div>
        </div>
        <div className="text-lg font-bold mb-2 text-gray-800">{house.address}</div>
        <div className="flex gap-4 mb-4 text-gray-600">
          <div className="flex items-center gap-1">
            <BiBath className="text-xl" />
            <span className="text-sm">{house.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <BiBed className="text-xl" />
            <span className="text-sm">{house.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <BiArea className="text-xl" />
            <span className="text-sm">{house.surface}</span>
          </div>
        </div>
        <div className="text-lg font-bold text-violet-600">Rp. {house.price}</div>
      </div>
    </div>
  );
};

export default House;
