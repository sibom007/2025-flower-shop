import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // import Autoplay too!
import { offerData } from "@/db/slider";

export default function HomeSilder() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000, // 3 seconds
          disableOnInteraction: false, // keeps autoplay even after user swipes
        }}
        modules={[Pagination, Autoplay]} // add Autoplay here
        className="w-full h-44">
        {offerData.map((offer, index) => (
          <SwiperSlide
            key={index}
            className={`bg-gradient-to-r ${offer.bgColor} text-white flex justify-center items-center`}>
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <h2 className="text-2xl font-bold mb-2">{offer.title}</h2>
              <p className="text-sm">{offer.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
