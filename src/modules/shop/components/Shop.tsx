import CategoryNavbar from "@/shared/CategoryNavbar";
import ShopInput from "@/modules/shop/components/ShopInput";
import ShopFlowerCard from "@/modules/shop/components/ShopFlowerCard";
import { flowers } from "@/db/flower";
import { useState } from "react";
import FlowersSkeleton from "@/components/FlowersSkeleton";

const Shop = () => {
  const [categorieBg, setCategorieBg] = useState("#FFE4B5");
  const [isLoading] = useState(false);

  return (
    <div className="min-h-screen">
      <CategoryNavbar
        categorieBg={categorieBg}
        setCategorieBg={setCategorieBg}
      />
      <div className="p-4">
        <ShopInput />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {flowers.map((flower) => {
            return isLoading ? (
              <FlowersSkeleton isLoading={isLoading} />
            ) : (
              <ShopFlowerCard
                key={flower.id}
                flower={flower}
                categoriesBg={categorieBg}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Shop;
