import { Button } from "@/components/ui/button";

import { IFlower } from "@/Types/Flower.type";

import { motion } from "framer-motion";

import { categories } from "../FlowerConstant";
import { useFilter } from "../hooks/useFilter";

interface Props {
  flower: IFlower;
}

const ShopFlowerCard = ({ flower }: Props) => {
  const { selectedCategory } = useFilter();
  const flowerCategory = categories.find(
    (cat) => cat.value === flower.category
  );
  const flowerColor = selectedCategory ? flowerCategory?.bgColor : "#FFE4B5";

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 w-full h-full flex flex-col "
      style={{ backgroundColor: flowerColor }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.4, ease: "easeOut" }}>
      <img
        src={flower.image}
        alt={flower.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold mb-2 truncate">{flower.name}</h3>
      <p className="text-gray-600 mb-2 line-clamp-2 flex-grow">
        {flower.description}
      </p>
      <p className="text-sm text-gray-500 mb-2 truncate">
        Category: {flower.category}
      </p>
      <p className="text-sm text-gray-500 mb-2 truncate">
        Stock: {flower.stock} available
      </p>
      <p className="text-sm text-gray-500 mb-2 truncate">
        Discount: {flower.discount ?? "N/A"}
        {flower.discount ? "%" : ""}
      </p>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-xl font-bold">${flower.price}</span>
        <Button variant={"primary"} className=" duration-500">
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
};
export default ShopFlowerCard;
