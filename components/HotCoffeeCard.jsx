import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import hotCoffeeProducts from "@/utils/hotcoffeedata";

const HotcoffeeCard = ({
  id,
  imgUrl,
  title,
  price,
  description,
  active,
  handleClick,
  setTotalQuantity,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleAddToCart = () => {
    // Logic to handle adding to cart
  };

  return (
    <motion.div
      className={`${
        active === id ? "flex-[10]" : "flex-[2]"
      } relative flex items-center justify-center min-w-[250px] h-[450px] cursor-pointer bg-minicolor transition-[flex] ease-in-out duration-700 overflow-hidden border-gray-300 border rounded-lg`}
      onClick={openPopup}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover rounded-xl"
          style={{ transform: "scale(1.53)" }}
        />
      </div>

      <div
        className={`absolute bottom-0 left-0 w-full p-4 rounded-b-xl bg-[rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col`}
        style={{ height: '220px' }}
      >
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <h2 className="text-[30px] font-semibold text-tahiti">{title}</h2>
            <p className="text-[20px] font-extralight text-tahiti mb-4">${price}</p>
          </div>

          <div className="flex justify-end mt-auto">
            <button
              className="flex justify-center items-center bg-addtocartcolor px-4 py-2 rounded-lg hover:text-tahiti transition duration-300 mb-3"
              onClick={handleAddToCart}
            >
              <Image
                src="/ADDTUCARTicon.png"
                width={20}
                height={20}
                alt="Cart Icon"
              />
              <span className="ml-2 text-white">Add to cart</span>
            </button>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-dark bg-opacity-50 flex justify-center items-center z-50"
          onClick={closePopup}
        >
          <div
            className="bg-tahiti rounded-lg shadow-lg w-[797px] h-[494px] flex relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-1/2 h-full p-4 overflow-hidden">
              <div className="h-full w-full flex items-center justify-center" style={{ transform: "scale(2.7)" }}>
                <Image
                  src={imgUrl}
                  alt={title}
                  width={900}
                  height={900}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="w-1/2 p-6 flex flex-col justify-between bg-minicolor rounded-lg">
              <div className="flex-grow overflow-auto max-h-[485px]">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-lg mb-4">{description}</p>
                <p className="text-lg mb-4">Price: <strong>${price}</strong></p>
              </div>

              <button
                className="bg-red text-tahiti px-4 py-2 rounded-lg mt-4 self-end"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

// Main Component to Render Multiple Cards
const HotcoffeeList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {hotCoffeeProducts.map((product, index) => (
        <HotcoffeeCard
          key={index}
          id={index}
          imgUrl={product.image}
          title={product.name}
          price={product.price}
          description={product.description}
          active={null} // Pass the appropriate active state here
          handleClick={() => {}} // Define handle click logic
          setTotalQuantity={() => {}} // Define total quantity logic
        />
      ))}
    </div>
  );
};

export default HotcoffeeList; // Export the list component
