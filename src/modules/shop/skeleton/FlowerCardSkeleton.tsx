import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const FlowerCardSkeleton = () => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 w-full h-full flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}>
      <Skeleton className="w-full h-48 rounded-lg mb-4" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-1/2 mb-2" />
      <Skeleton className="h-4 w-1/3 mb-2" />
      <Skeleton className="h-4 w-1/4 mb-2" />
      <div className="flex justify-between items-center mt-auto">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-10 w-24 rounded-md" />
      </div>
    </motion.div>
  );
};

export default FlowerCardSkeleton;
