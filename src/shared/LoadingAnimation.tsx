import { motion } from "framer-motion";

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 z-50 flex">
      {Array.from({ length: 4 }).map((_, index) => (
        <motion.div
          key={index}
          className="h-full flex-1 bg-orangeTheme-100"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
          style={{ originY: 1 }}
        />
      ))}
    </div>
  );
};

export default LoadingAnimation;
