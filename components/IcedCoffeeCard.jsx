import React from 'react';
import Image from 'next/image';

const IcedCoffeeCard = ({ image_url, name, price, active, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer border rounded-lg shadow-md transition-transform transform ${
        active ? 'scale-105 border-blue-500' : 'border-gray-300'
      }`}
    >
      <Image
        src={image_url} // Use the correct property here
        alt={name} // Use the correct property here
        width={200} // Adjust based on your design
        height={300} // Adjust based on your design
        className="rounded-t-lg object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3> {/* Ensure this matches the API response */}
        <p className="text-md text-gray-700">₱{price.toFixed(2)}</p> {/* Format price to 2 decimal places */}
      </div>
    </div>
  );
};

export default IcedCoffeeCard;
