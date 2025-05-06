import { SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { useFilter } from "@/context/FilterContext";
import { useForm } from "react-hook-form";
import { FlowerCategory, FlowerType } from "@/Types/Flower.type";
import {
  categories,
  flowerFilterColors,
  flowerRating,
  flowerTypes,
} from "../FlowerConstant";

type FilterFormValues = {
  minPrice: string;
  maxPrice: string;
  category: string | FlowerCategory;
  type: string | FlowerType;
  rating: string;
  sort: string;
  color: string;
};

const ShopFilterForm = () => {
  const {
    setMinPrice,
    setMaxPrice,
    setSelectedCategory,
    setSelectedType,
    setSelectedRating,
    setSelectedColor,
    setSelectedSort,
  } = useFilter();

  const { register, handleSubmit, reset } = useForm<FilterFormValues>();

  const onSubmit = (data: FilterFormValues) => {
    setMinPrice(data.minPrice);
    setMaxPrice(data.maxPrice);
    setSelectedCategory(data.category);
    setSelectedType(data.type);
    setSelectedRating(data.rating);
    setSelectedColor(data.color);
    setSelectedSort(data.sort);

    console.log("Applied filters:", data);
  };

  const handleReset = () => {
    reset({
      minPrice: "",
      maxPrice: "",
      category: "",
      type: "",
      rating: "",
      color: "",
      sort: "",
    });
    setMinPrice(null);
    setMaxPrice(null);
    setSelectedCategory(null);
    setSelectedType(null);
    setSelectedRating(null);
    setSelectedColor(null);
    setSelectedSort(null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4  mx-3">
      {/* Price Range */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Price Range</h3>
        <Separator />
        <div className="grid md:grid-cols-2 gap-2">
          <div className="grid gap-2">
            <Label htmlFor="minPrice">Min Price</Label>
            <Input
              id="minPrice"
              placeholder="0"
              type="number"
              {...register("minPrice")}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="maxPrice">Max Price</Label>
            <Input
              id="maxPrice"
              placeholder="0"
              type="number"
              {...register("maxPrice")}
            />
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Rating</h3>
        <Separator />
        <select
          {...register("rating")}
          className="w-full border rounded px-2 py-1">
          <option value="">Select rating</option>
          {flowerRating.map((rating) => (
            <option key={rating.name} value={rating.value}>
              {rating.name} & above
            </option>
          ))}
        </select>
      </div>

      {/* Flower Type */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Flower Type</h3>
        <Separator />
        <select
          {...register("type")}
          className="w-full border rounded px-2 py-1">
          <option value="">Select Type</option>
          {flowerTypes.map((type) => (
            <option key={type.name} value={type.value}>
              {type.name}
            </option>
          ))}
        </select>
      </div>

      {/* Category */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Category</h3>
        <Separator />
        <select
          {...register("category")}
          className="w-full border rounded px-2 py-1">
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat.name} value={cat.value}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Flower color */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Flower color</h3>
        <Separator />
        <select
          {...register("color")}
          className="w-full border rounded px-2 py-1">
          <option value="">Select Color</option>
          {flowerFilterColors.map((color) => (
            <option key={color.name} value={color.name}>
              {color.name}
            </option>
          ))}
        </select>
      </div>

      {/* Sort */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Sort By</h3>
        <Separator />
        <div className="grid grid-cols-2 gap-2 mt-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="trending"
              {...register("sort")}
              defaultChecked
            />
            Trending
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" value="oldest" {...register("sort")} />
            Oldest
          </label>
        </div>
      </div>

      <SheetFooter className="grid grid-cols-2  mt-4">
        <Button
          type="submit"
          variant="secondary"
          onClick={handleReset}
          className="active:bg-orangeTheme-500">
          Clear
        </Button>
        <Button
          type="submit"
          variant="secondary"
          className="active:bg-orangeTheme-500">
          Apply Filters
        </Button>
      </SheetFooter>
    </form>
  );
};

export default ShopFilterForm;
