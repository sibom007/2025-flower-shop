import HomeSilder from "./HomeSilder";
import MostPopularFlowers from "./MostPopularFlowers";
import TopRated from "./TopRated";
import TopSellingFlower from "./TopSellingFlower";

const Home = () => {
  return (
    <div className="p-4 space-y-8">
      {/* Slider Section */}
      <section className="w-full">
        <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-md">
          <HomeSilder />
        </div>
      </section>

      {/* Most Popular Flowers Section */}
      <MostPopularFlowers />

      {/* Top Rated Flowers Section */}
      <TopRated />

      {/* Top Selling Flowers Section */}
      <TopSellingFlower />
    </div>
  );
};

export default Home;
