import { Button } from "@/components/ui/button";
import { categories } from "@/db/categories";
import { useState } from "react";

const CategoryNavbar = () => {
  const [categorieBg, setCategorieBg] = useState("#FFE4B5");

  return (
    <div className="w-full px-2">
      <div
        className={`flex flex-row justify-between items-center rounded-b-lg p-3 overflow-x-auto  `}
        style={{
          backgroundColor: categorieBg,
          boxShadow: "0px 0px 10px rgba(255, 140, 0, 0.5)",
        }}>
        {categories.map((category) => (
          <Button
            key={category.name}
            className={`flex flex-col items-center justify-center p-2 mx-2  font-medium text-sm
          
            `}
            style={{
              backgroundColor: category.bgColor,
            }}
            onClick={() => setCategorieBg(category.bgColor)}>
            <p className="text-center text-gray-900">{category.name}</p>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavbar;
