import { createContext, useState, ReactNode } from "react";

interface CategoriesBgContextProps {
  categoriesBg: string;
  setcategoriesBg: (value: string) => void;
}

interface CategoriesBgProviderProps {
  children: ReactNode;
}

const CategoriesBgContext = createContext<CategoriesBgContextProps>({
  categoriesBg: "",
  setcategoriesBg: () => {},
});

export default CategoriesBgContext;
export const CategoriesBgProvider = ({
  children,
}: CategoriesBgProviderProps) => {
  const [categoriesBg, setcategoriesBg] = useState<string>("#FFE4B5");

  return (
    <CategoriesBgContext.Provider value={{ categoriesBg, setcategoriesBg }}>
      {children}
    </CategoriesBgContext.Provider>
  );
};
