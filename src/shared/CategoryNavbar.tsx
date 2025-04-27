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
      </div>
    </div>
  );
};

export default CategoryNavbar;
