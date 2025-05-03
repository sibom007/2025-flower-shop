import { Input } from "@/components/ui/input";

import ShopFilterPanel from "./ShopFilterPanel";

const ShopFilter = () => {
  return (
    <div className="mb-4 max-w-xl ml-auto flex">
      <Input
        type="text"
        placeholder="Search flowers..."
        className="w-full p-2 border rounded-lg"
      />
      <div className="flex items-center ml-2">
        <ShopFilterPanel />
      </div>
    </div>
  );
};

export default ShopFilter;
