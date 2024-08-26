import React, { useState, useContext } from "react";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";
import { RiArrowDownSLine, RiArrowUpSLine, RiWallet3Line } from "react-icons/ri";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    { value: "Price range (any)" },
    { value: "1000000000 - 1500000000" },
    { value: "1500000000 - 2500000000" },
    { value: "2500000000 - 3000000000" },
    { value: "3000000000 - 4000000000" },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left">
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Choose price range</div>
        </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {prices.map((item, index) => {
          return (
            <Menu.Item
              as="li"
              key={index}
              onClick={() => setPrice(item.value)}
              className="cursor-pointer hover:text-violet-700 transition"
            >
              {item.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
