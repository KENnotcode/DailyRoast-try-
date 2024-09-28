import React from "react";

const IcedCoffeeCard = ({ id, name, description, price, image_url, active, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(id)}
      className={`p-4 border ${active ? "border-blue-500" : "border-gray-300"} cursor-pointer`}
    >
      <img src={image_url} alt={name} className="h-48 w-full object-cover" />
      <div className="mt-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-lg font-semibold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default IcedCoffeeCard;
