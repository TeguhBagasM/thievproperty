import React, { useState, useEffect } from "react";
import { housesData } from "../data";

export const HouseContext = React.createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  // to get all countries and remove duplicates when component mounts
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    setCountries(uniqueCountries);
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
      const isCountryMatch = isDefault(country) || house.country === country;
      const isPropertyMatch = isDefault(property) || house.type === property;
      const isPriceMatch = isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice);

      return isCountryMatch && isPropertyMatch && isPriceMatch;
    });

    setTimeout(() => {
      setHouses(filteredHouses.length < 1 ? [] : filteredHouses);
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
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
