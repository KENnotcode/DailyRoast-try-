import { motion } from "framer-motion";
import Image from "next/image";

const IcedCoffeeCard = ({
  id,
  image_url,
  name,
  price,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      className={`${
        active === id ? "flex-[10]" : "flex-[2]"
      } relative flex items-center justify-center min-w-[300px] h-[550px] cursor-pointer transition-[flex] ease-in-out duration-700 overflow-hidden border-black border rounded-lg`}
      onClick={() => handleClick(id)}
    >
      {/* Coffee Image with Increased Size */}
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
        <div className="w-[90%] h-[90%]"> {/* Make the picture container bigger */}
          <Image
            src={image_url}
            alt={name}
            fill
            className="object-cover rounded-xl"
            style={{ transform: "scale(1.4)" }} // Enlarge the coffee imagebasrta
          />
        </div>
      </div>

      {active !== id ? (
        <div className="absolute bottom-0 w-[30px] h-35 text-white text-2xl font-medium rotate-[-90deg]">
          {name}
        </div>
      ) : (
        <div className="absolute p-6 w-full h-36 bottom-0 left-0 rounded-b-xl bg-[rgba(0,0,0,0.5)]">
          <div className="text-tahiti">
            <h2 className="text-3xl font-semibold">{name}</h2>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-2xl font-medium">{price}</p>
            <button
              className="flex justify-between mb-2 gap-3 items-center bg-addtocartcolor px-3 py-2 rounded-lg hover:text-tahiti"
            >
              <Image
                src={"/ADDTUCARTicon.png"}
                width={35}
                height={35}
                alt="Add to cart icon"
              />
              <p className="text-white text-right">Add to cart</p>
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default IcedCoffeeCard;
