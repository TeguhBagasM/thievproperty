import React, { useContext, useEffect, useRef, useState } from "react";
import CityDropdown from "./CityDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
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

  const animationClass = isVisible ? "animate-slide-bottom" : "opacity-0";

  return (
    <div
      ref={ref}
      className={`px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg transition-opacity duration-700 ${animationClass}`}
    >
      <CityDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />

      <button
        onClick={() => handleClick()}
        className="bg-violet-700 hover:bg-violet-900 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
