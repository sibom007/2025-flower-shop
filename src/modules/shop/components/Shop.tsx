import { IFlower } from "@/Types/Flower.type";
import { useFilter } from "@/context/FilterContext";
import ShopFilter from "@/modules/shop/components/ShopFilter";
import NotContant from "@/modules/error/components/NotContant";
import { useGetFlower } from "@/modules/shop/hooks/useGetFlower";
import ShopFlowerCard from "@/modules/shop/components/ShopFlowerCard";
import FlowerCardSkeleton from "@/modules/shop/skeleton/FlowerCardSkeleton";

const Shop = () => {
  const {
    minPrice,
    maxPrice,
    searchInput,
    selectedCategory,
    selectedColor,
    selectedRating,
    selectedSort,
    selectedType,
  } = useFilter();
  const {
    data: flowers,
    isLoading,
    error,
  } = useGetFlower({
    minPrice,
    maxPrice,
    searchInput,
    selectedCategory,
    selectedColor,
    selectedRating,
    selectedSort,
    selectedType,
  });


  return (
    <div className="min-h-screen">
      <div className="p-4">
        <ShopFilter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <FlowerCardSkeleton key={index} />
            ))
          ) : error ? (
            <NotContant
              title="Error Occurred"
              description="Sorry, something went wrong while fetching the flowers. Please try again later."
            />
          ) : flowers?.length === 0 ? (
            <NotContant
              title="No Flowers Found"
              description="We're sorry, but we couldn't find any flowers matching your search criteria."
            />
          ) : (
            flowers?.map((flower: IFlower, idx: number) => (
              <ShopFlowerCard key={idx} flower={flower} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;