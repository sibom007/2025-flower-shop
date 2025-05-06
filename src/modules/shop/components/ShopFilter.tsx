import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import ShopFilterForm from "./ShopFilterForm";
import { Button } from "@/components/ui/button";
import { CiFilter } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useFilter } from "@/context/FilterContext";

// Responsive utility
const DESKTOP_BREAKPOINT = 768;
const isDesktopView = () =>
  typeof window !== "undefined" && window.innerWidth >= DESKTOP_BREAKPOINT;

const ShopFilter = () => {
  const { setSearchInput, searchInput } = useFilter();
  const [debouncedSearch, setDebouncedSearch] = useState<string | null>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 300); // debounce delay in ms

    return () => clearTimeout(timer); // cleanup previous timer
  }, [searchInput]);

  useEffect(() => {
    if (debouncedSearch) {
      console.log("Search with:", debouncedSearch);
      // Call API or update filtered list
    }
  }, [debouncedSearch]);

  const [isDesktop, setIsDesktop] = useState(isDesktopView());
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(isDesktopView());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mb-4 max-w-xl ml-auto flex ">
      <Input
        type="text"
        placeholder="Search flowers..."
        className="w-full p-2 border rounded-lg"
        value={searchInput || ""}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className="ml-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="filter">
              <CiFilter className="w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side={isDesktop ? "right" : "bottom"}
            className="overflow-y-auto h-full">
            <SheetHeader>
              <SheetTitle>Filter Products</SheetTitle>
              <SheetDescription>
                Adjust your product filters here
              </SheetDescription>
            </SheetHeader>
            <ShopFilterForm />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default ShopFilter;
