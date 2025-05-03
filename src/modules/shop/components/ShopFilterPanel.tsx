import { useContext, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CiFilter } from "react-icons/ci";
import { Separator } from "@/components/ui/separator";
import { categories } from "@/db/categories";
import CategoriesBgContext from "@/context/CategorieBgColorContext";

// Define the desktop breakpoint
const DESKTOP_BREAKPOINT = 768;

// Utility to check screen size
const isDesktopView = () =>
  typeof window !== "undefined" && window.innerWidth >= DESKTOP_BREAKPOINT;

const ShopFilterPanel = () => {
  const { categoriesBg, setcategoriesBg } = useContext(CategoriesBgContext);
  console.log("🚀 ~ ShopFilterPanel ~ categoriesBg:", categoriesBg);

  const [isDesktop, setIsDesktop] = useState(isDesktopView());

  useEffect(() => {
    // Debounced resize handler for better performance
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const isNowDesktop = isDesktopView();
        setIsDesktop(isNowDesktop);

        if (isNowDesktop) {
          document.body.classList.remove("drawer-open");
        }
      }, 150); // Adjust debounce time as needed
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"filter"}>
          <CiFilter className="w-4 h-4 " />
        </Button>
      </SheetTrigger>
      <SheetContent side={isDesktop ? "right" : "bottom"} className="">
        <SheetHeader>
          <SheetTitle>Filter Products</SheetTitle>
          <SheetDescription>Adjust your product filters here</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4 mx-3">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Price Range</h3>
            <Separator />
            <div className="grid md:grid-cols-2 gap-2">
              <div className="grid gap-2">
                <Label htmlFor="minPrice">Min Price</Label>
                <Input
                  id="minPrice"
                  type="number"
                  placeholder="0"
                  className="col-span-2"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="maxPrice">Max Price</Label>
                <Input
                  id="maxPrice"
                  type="number"
                  placeholder="1000"
                  className="col-span-2"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Rating</h3>
            <Separator />
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 Stars & Above</SelectItem>
                <SelectItem value="4">4 Stars & Above</SelectItem>
                <SelectItem value="3">3 Stars & Above</SelectItem>
                <SelectItem value="2">2 Stars & Above</SelectItem>
                <SelectItem value="1">1 Star & Above</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Categorie</h3>
            <Separator />
            <Select
              onValueChange={(value) => {
                const selected = categories.find((c) => c.name === value);
                if (selected) setcategoriesBg(selected.bgColor);
              }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select rating" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem
                    style={{ backgroundColor: category.bgColor }}
                    className="mb-2 "
                    key={category.name}
                    value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Sort By</h3>
            <Separator />
            <div className="grid grid-cols-2 gap-2 mt-2">
              <Button variant="filter">Trending</Button>
              <Button variant="filter">Oldest</Button>
            </div>
          </div>
        </div>
        <SheetFooter>
          <Button variant={"secondary"}>Apply Filters</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ShopFilterPanel;
