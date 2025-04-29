import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const CategorySidebar = ({ categories }: { categories: string[] }) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex-shrink-0 px-5 py-2 bg-orangeTheme-500 text-white font-semibold rounded-full hover:bg-orangeTheme-600 transition-all duration-300">
            View All
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-orangeTheme-700">
              Categories
            </SheetTitle>
          </SheetHeader>

          {/* Category List */}
          <div className=" flex flex-col gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="w-full px-4 py-3 hover:text-orangeTheme-700  font-medium rounded-lg hover:bg-orangeTheme-200  border-b-2 duration-500">
                {category}
              </button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CategorySidebar;
