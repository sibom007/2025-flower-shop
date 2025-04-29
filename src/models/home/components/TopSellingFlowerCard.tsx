import { Flower } from "@/Types";

// components/FlowerCard.js
const TopSellingFlowerCard = ({ flower }: { flower: Flower }) => {
  return (
    <div className="relative overflow-hidden group rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
      <img
        src={flower.image}
        alt={flower.name}
        className="w-full h-72 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-500"></div>
      <div className="absolute bottom-4 left-4 text-xl font-semibold text-white z-10">
        <span className="bg-black px-4 py-2 rounded-full">{flower.name}</span>
      </div>
    </div>
  );
};
export default TopSellingFlowerCard;
