import { Input } from "@/components/ui/input";

const ShopInput = () => {
  return (
    <div className="mb-4 max-w-xl mx-auto">
      <Input
        type="text"
        placeholder="Search flowers..."
        className="w-full p-2 border rounded-lg"
      />
    </div>
  );
};

export default ShopInput;
