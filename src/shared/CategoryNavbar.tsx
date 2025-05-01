<<<<<<< HEAD
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
=======
import CategorySidebar from "@/models/home/components/CategorySidebar";

const categories = [
  "Happy Moments",
  "Love & Romance",
  "Birthday Specials",
  "Congratulations",
  "Get Well Soon",
  "Sympathy & Condolences",
  "Thank You",
  "Friendship",
  "New Baby",
  "Anniversary Celebrations",
];

const CategoryNavbar = () => {
  return (
    <div className="w-full overflow-x-auto p-4">
      <div className="flex items-center gap-4">
        {/* Always show first 2 categories */}
        {categories.slice(0, 2).map((category) => (
          <button
            key={category}
            className="flex-shrink-0 px-4 py-2 text-orangeTheme-700 bg-orangeTheme-100 font-medium rounded-full hover:bg-orangeTheme-200 transition-all duration-300">
            {category}
          </button>
        ))}

        {/* Show 3rd category on md+ screens */}
        {categories[2] && (
          <button className="hidden md:flex flex-shrink-0 px-4 py-2 text-orangeTheme-700 bg-orangeTheme-100 font-medium rounded-full hover:bg-orangeTheme-200 transition-all duration-300">
            {categories[2]}
          </button>
        )}

        {/* Show 4th to 8th categories on lg+ screens */}
        {categories.slice(3, 8).map((category) => (
          <button
            key={category}
            className="hidden lg:flex flex-shrink-0 px-4 py-2 text-orangeTheme-700 bg-orangeTheme-100 font-medium rounded-full hover:bg-orangeTheme-200 transition-all duration-300">
            {category}
          </button>
        ))}
        {/* View All Button */}
        <CategorySidebar categories={categories} />
>>>>>>> bc039b79347f96c7273b243094f83f690b956fac
      </div>
    </div>
  );
};

export default CategoryNavbar;
