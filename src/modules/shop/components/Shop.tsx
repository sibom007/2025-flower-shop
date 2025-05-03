
import ShopFilter from "@/modules/shop/components/ShopFilter";
import ShopFlowerCard from "@/modules/shop/components/ShopFlowerCard";
import { flowers } from "@/db/flower";
import {  useState } from "react";
import FlowersSkeleton from "@/components/FlowersSkeleton";


const Shop = () => {

  const [isLoading] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="p-4">
        <ShopFilter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {flowers.map((flower) => {
            return isLoading ? (
              <FlowersSkeleton isLoading={isLoading} />
            ) : (
              <ShopFlowerCard
                key={flower.id}
                flower={flower}
          
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Shop;
