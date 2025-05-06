
import { useQueryState, parseAsString } from "nuqs";
import { createContext, useContext, ReactNode } from "react";

interface FilterContextType {
  searchInput: string | null;
  setSearchInput: (value: string | null) => void;

  minPrice: string | null;
  setMinPrice: (value: string | null) => void;

  maxPrice: string | null;
  setMaxPrice: (value: string | null) => void;

  selectedCategory: string | null;
  setSelectedCategory: (value: string | null) => void;

  selectedType: string | null;
  setSelectedType: (value: string | null) => void;

  selectedRating: string | null;
  setSelectedRating: (value: string | null) => void;

  selectedColor: string | null;
  setSelectedColor: (value: string | null) => void;

  selectedSort: string | null;
  setSelectedSort: (value: string | null) => void;
}

// ----------------------
// Context
// ----------------------

const FilterContext = createContext<FilterContextType | undefined>(undefined);

// ----------------------
// Provider
// ----------------------

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [searchInput, setSearchInput] = useQueryState(
    "searchInput",
    parseAsString.withDefault("")
  );

  const [minPrice, setMinPrice] = useQueryState(
    "minPrice",
    parseAsString.withDefault("")
  );

  const [maxPrice, setMaxPrice] = useQueryState(
    "maxPrice",
    parseAsString.withDefault("")
  );

  const [selectedCategory, setSelectedCategory] = useQueryState(
    "category",
    parseAsString.withDefault("")
  );

  const [selectedType, setSelectedType] = useQueryState(
    "type",
    parseAsString.withDefault("")
  );

  const [selectedRating, setSelectedRating] = useQueryState(
    "rating",
    parseAsString.withDefault("")
  );

  const [selectedColor, setSelectedColor] = useQueryState(
    "color",
    parseAsString.withDefault("")
  );

  const [selectedSort, setSelectedSort] = useQueryState(
    "sort",
    parseAsString.withDefault("")
  );

  return (
    <FilterContext.Provider
      value={{
        searchInput,
        setSearchInput,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        selectedCategory,
        setSelectedCategory,
        selectedType,
        setSelectedType,
        selectedColor,
        setSelectedColor,
        selectedRating,
        setSelectedRating,
        selectedSort,
        setSelectedSort,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

// ----------------------
// Hook
// ----------------------

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
