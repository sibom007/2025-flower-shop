import { FilterContext, FilterContextType } from "@/context/FilterContext";
import { useContext } from "react";

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
