import { flowers } from "@/db/flower";
import TopSellingFlowerCard from "./TopSellingFlowerCard";
import { motion } from "framer-motion";

const TopSellingFlowers = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-100 via-yellow-100 to-rose-100 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-center text-orange-700">
          Top Selling Flowers
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger animation when 10% of the component is in view
          variants={{
            hidden: {
              opacity: 0,
              transition: {
                staggerChildren: 0.2, // Stagger the children animations
              },
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Stagger the children animations
              },
            },
          }}>
          {flowers.slice(0, 3).map((flower) => (
            <motion.div
              key={flower.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}>
              <TopSellingFlowerCard flower={flower} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopSellingFlowers;
