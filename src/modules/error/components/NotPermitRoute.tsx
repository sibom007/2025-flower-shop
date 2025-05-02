import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const NotPermitRoute = () => {
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
          🙅‍♂️🛣️
        </motion.h1>{" "}
        <p className=" text-4xl text-sky-400 font-semibold">
          {" "}
          you have no permission to go there
        </p>
        <Button asChild variant={"outline"}>
          <Link to={"/"}>Back to site</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotPermitRoute;
