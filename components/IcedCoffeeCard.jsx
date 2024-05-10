import {motion} from "framer-motion";
import Image from "next/image";

const IcedCoffeeCard = ({id,imgUrl,title,price,active,handleClick}) => {
  return (
    <motion.div className={`${active === id ? 'flex-[10]' : 'flex-[2]'} relative flex items-center justify-center min-w-[120px] h-[450px] cursor-pointer transition-[flex] ease-in-out duration-700 overflow-hidden`} onClick={() => handleClick(id)}>
        <Image src={imgUrl} alt="coffee" fill className="rounded-xl object-cover" />
        {active !== id ?(
            <div className="absolute bottom-0 w-[30px] h-35 text-white text-2xl font-medium rotate-[-90deg]">
                {title}
            </div>
        ) : (
            <div className="absolute p-6 w-full h-36 bottom-0 left-0 rounded-b-xl bg-[rgba(0,0,0,0.5)] text-white">
                <h2 className="text-3xl font-semibold">{title}</h2>

                <div className="flex justify-between mb-2">
                    <p className="text-2xl font-medium">{price}</p>
                    

                    <div className="flex justify-between mb-2 gap-3 items-center bg-orange-400 px-3 py-2 rounded-lg">
                        <Image className=" translate-x-" src={"/ADDTUCARTicon.png"} width={35} height={35} justify-end></Image>
                        <p className="text-white text-right">Add to cart</p>
                    </div>
                </div>

            </div>
        )}
    </motion.div>
  )
}

export default IcedCoffeeCard