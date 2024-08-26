import React, { useState, useEffect } from "react";
import { housesData } from "../data";

export const HouseContext = React.createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [city, setCity] = useState("Location (any)");
  const [cities, setCities] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  // to get all cities and remove duplicates when component mounts
  useEffect(() => {
    const allCities = houses.map((house) => {
      return house.city;
    });
    const uniqueCities = ["Location (any)", ...new Set(allCities)];
    setCities(uniqueCities);
  }, [houses]);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, [houses]);

  // Function to handle the search button click
  const handleClick = () => {
    setLoading(true);

    // Helper function to determine if the filter is set to default value
    const isDefault = (str) => str.includes("(any)");

    // Parse price range if it's not default
    const [minPrice, maxPrice] = !isDefault(price) ? price.split(" - ").map(Number) : [0, Infinity];

    const filteredHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      const isCityMatch = isDefault(city) || house.city === city;
      const isPropertyMatch = isDefault(property) || house.type === property;
      const isPriceMatch = isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice);

      return isCityMatch && isPropertyMatch && isPriceMatch;
    });

    setTimeout(() => {
      setHouses(filteredHouses.length < 1 ? [] : filteredHouses);
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        city,
        setCity,
        cities,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
