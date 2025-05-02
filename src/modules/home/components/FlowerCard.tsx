"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Define the FlowerCard component that receives a `flower` prop
const FlowerCard = ({
  flower,
}: {
  flower: {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    color: string;
    category: string;
    FlowerType: string;
    stock: number;
    discount?: number;
  };
}) => {
  const [selected, setSelected] = useState<null | string>(null); // Store selected flower ID

  const handleOpen = (id: string) => setSelected(id);
  const handleClose = () => setSelected(null);

  const handleViewDetails = (id: string) => {
    setSelected(id); // Show detailed view when clicked
  };

  return (
    <>
      {/* Flower Card Component */}
      <motion.div
        layoutId={flower.id}
        onClick={() => handleOpen(flower.id)} // Open details when clicked
        className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
        <div className="h-40 bg-gradient-to-r from-orangeTheme-100 via-orangeTheme-300 to-orangeTheme-400 rounded-md mb-2">
          <img
            src={flower.image}
            alt={flower.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <h3 className="text-lg font-semibold">{flower.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">৳{flower.price}</p>
          {flower.discount && (
            <p className="text-sm text-red-500">{flower.discount}% OFF</p>
          )}

          {/* Show 'Add to Cart' or 'Item Added' button */}

          <Button
            variant={"secondary"}
            onClick={() => handleViewDetails(flower.id)}>
            View Details
          </Button>
        </div>
      </motion.div>

      {/* Detailed View when flower card is clicked */}
      <AnimatePresence>
        {selected === flower.id && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-md bg-black/30 flex justify-center items-center z-50"
            onClick={handleClose} // Close when clicking on background
          >
            <motion.div
              layoutId={flower.id}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on card itself
              className="bg-gradient-to-r from-orangeTheme-100 via-orangeTheme-300 to-orangeTheme-400 rounded-xl p-6 w-full max-w-3xl flex flex-col md:flex-row gap-6">
              {/* Left Side: Image */}
              <div className="flex-1">
                <img
                  src={flower.image}
                  alt={flower.name}
                  className="w-full h-60 object-cover rounded-lg"
                />
              </div>

              {/* Right Side: Text and Button */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{flower.name}</h3>
                  <p className="text-gray-600 mb-4">{flower.description}</p>
                  <p className="text-xl font-semibold mb-6">৳{flower.price}</p>
                </div>

                <Button variant={"primary"} className="w-full">
                  Buy Now
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FlowerCard;
