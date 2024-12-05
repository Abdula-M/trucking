'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductCard from "@/components/productCard/ProductCard";

export default function ProductSection() {
  return (
    <div className="bg-[#f3fffd] h-full">
      <h2 className="text-[40px] text-[#252b43] text-center font-bold">
        Продукты платформы
      </h2>

      <div className="flex justify-center items-center mx-auto w-full mt-10">
        <Swiper
            modules={[Navigation]}
            navigation
            loop
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            className="w-[80%] ml-[1000px]"
        >
            <SwiperSlide >
            <ProductCard
                image="/tr_car.png"
                title="Экспорт"
                description="Описание экспорта"
            />
            </SwiperSlide>
            <SwiperSlide>
            <ProductCard
                image="/tractor.png"
                title="Трактор"
                description="Описание трактора"
            />
            </SwiperSlide>
            <SwiperSlide>
            <ProductCard
                image="/machine.png"
                title="Станок"
                description="Описание станка"
            />
            </SwiperSlide>
            <SwiperSlide>
            <ProductCard
                image="/production.png"
                title="Производство"
                description="Описание производства"
            />
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
