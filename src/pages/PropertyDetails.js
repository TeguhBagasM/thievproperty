import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { housesData } from "../data";
import { Link } from "react-router-dom";
import { BiArea, BiBath, BiBed } from "react-icons/bi";

const PropertyDetails = () => {
  const { id } = useParams();
  const house = housesData.find((house) => house.id === parseInt(id));

  // Initialize form state at the top of the component
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: `Hello, I'm interested in the ${house ? house.type : ""}.`,
  });

  // Early return for when house is not found
  if (!house) {
    return <div>Property not found</div>;
  }

  const { imageLg, type, city, address, bedrooms, bathrooms, surface, price, description, agent } =
    house;
  const { image: agentImage, name: agentName, phone: agentPhone } = agent;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to WhatsApp with the form data
    const message = encodeURIComponent(form.message);
    const whatsappUrl = `https://wa.me/${agentPhone}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto p-6 flex gap-6">
      <Link to="/" className="text-blue-500 hover:underline mb-4 block">
        &larr; Back
      </Link>
      <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
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
            <span>{surface}</span>
          </div>
        </div>
        <div className="text-lg font-bold text-violet-600 mb-4">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(price)}
        </div>
        <div className="text-lg text-gray-800 mb-6">{description}</div>
      </div>
      <div className="w-80 bg-white shadow-lg rounded-lg p-6">
        <img className="w-16 h-16 rounded-full mb-4 mx-auto" src={agentImage} alt={agentName} />
        <div className="text-center mb-4">
          <div className="text-xl font-semibold">{agentName}</div>
          <div className="text-gray-600">{agentPhone}</div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-500 focus:ring-opacity-50 p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-500 focus:ring-opacity-50 p-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-500 focus:ring-opacity-50 p-2"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default PropertyDetails;
