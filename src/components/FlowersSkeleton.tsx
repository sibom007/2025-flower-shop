import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton
import { motion } from "framer-motion";

interface Props {
  isLoading: boolean; // Whether data is loading or not
}

const FlowersSkeleton = ({ isLoading }: Props) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 w-full h-full flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.4, ease: "easeOut" }}>
      {isLoading ? (
        // Skeleton Loader for each section
        <>
          <Skeleton className="mb-4 rounded-lg h-48 w-full" />
          <Skeleton className="mb-2 h-6 w-3/4" />
          <Skeleton className="mb-2 h-5 w-3/5" />
          <Skeleton className="mb-2 h-4 w-1/2" />
          <Skeleton className="mb-2 h-4 w-1/2" />
          <div className="flex justify-between items-center mt-auto">
            <Skeleton className="h-6 w-[30%]" />
            <Skeleton className="h-8 w-24 rounded-lg" />
          </div>
        </>
      ) : (
        // Regular Flower Card content
        <>
          <Skeleton className="mb-4 rounded-lg h-48 w-full" />
          <Skeleton className="mb-2 h-6 w-3/4" />
          <Skeleton className="mb-2 h-5 w-3/5" />
          <Skeleton className="mb-2 h-4 w-1/2" />
          <Skeleton className="mb-2 h-4 w-1/2" />
          <div className="flex justify-between items-center mt-auto">
            <Skeleton className="h-6 w-[30%]" />
            <Skeleton className="h-8 w-24 rounded-lg" />
          </div>
        </>
      )}
    </motion.div>
  );
};
export default FlowersSkeleton;
