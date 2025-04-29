import React from "react";
import "./Loader.css";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative ">
        <span className="loader absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
  );
};

export default Loader;
