
import { motion } from "framer-motion";
import { flowers } from "@/db/flower";

const TopRated = () => {


  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-8 text-center text-orange-700">
        Top Rated Flower
      </h2>

      {/* Bounce In Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl shadow-lg overflow-hidden">
        {/* Left Column: Image */}
        <div className="md:w-1/2">
          <img
            src={flowers[1].image}
            alt={flowers[1].name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Column: Details */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-orange-700 mb-4">
            {flowers[1].name}
          </h3>

          <p className="text-gray-700 mb-6">{flowers[1].description}</p>

          <div className="flex flex-wrap gap-4 mb-6">
            <span className="px-3 py-1 bg-orange-300 text-white rounded-full text-sm">
              Color: {flowers[1].color}
            </span>
            <span className="px-3 py-1 bg-orange-400 text-white rounded-full text-sm">
              Type: {flowers[1].category}
            </span>
            <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm">
              Category: {flowers[1].category}
            </span>
          </div>

          <div className="flex items-center gap-6 mb-6">
            <span className="text-2xl font-semibold text-orange-700">
              ₹{flowers[1].price}
            </span>
            {flowers[1].discount && (
              <span className="text-md text-green-600 font-semibold">
                {flowers[1].discount}% OFF
              </span>
            )}
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all">
            Buy Now
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default TopRated;
