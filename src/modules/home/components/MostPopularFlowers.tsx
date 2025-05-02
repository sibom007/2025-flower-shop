import { flowers } from "@/db/flower";
import FlowerCard from "./FlowerCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const MostPopularFlowers = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-100 via-yellow-100 to-rose-100 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-orange-700"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>
          Most Popular Flowers
        </motion.h2>

        {/* Flower Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          {flowers.map((flower) => (
            <motion.div key={flower.id} variants={itemVariants}>
              <FlowerCard flower={flower} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MostPopularFlowers;
