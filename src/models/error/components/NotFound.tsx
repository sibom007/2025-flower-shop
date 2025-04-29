import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center space-y-4">
        <motion.h1
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-9xl">
          🙅‍♂️
        </motion.h1>{" "}
        <p className=" text-4xl text-sky-400 font-semibold">Page not found</p>
        <Button asChild variant={"outline"}>
          <Link to={"/"}>Back to site</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
