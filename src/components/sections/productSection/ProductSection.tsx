'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductCard from "@/components/productCard/ProductCard";
import { useTranslations } from "next-intl";

export default function ProductSection() {
  const t = useTranslations("ProductSection");
  return (
    <div className="bg-[#f3fffd] h-full md:pb-[130px] pb-[90px]">
      <h2 className="lg:text-[40px] md:text-[30px] text-[23px] text-[#252b43] text-center font-bold">
        {t('title')}
      </h2>

      <div className="flex justify-center items-center mx-auto w-full mt-10 ">
        <Swiper
            modules={[Navigation]}
            navigation
            loop
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            breakpoints={{
              768: {
                spaceBetween: 100,  
              }
            }}
            className="md:w-[90%] w-[98%]"
        >
            <SwiperSlide >
            <ProductCard
                image="/tr_car.png"
                title={t('products.0.title')}
                description={t('products.0.description')}
            />
            </SwiperSlide>
            <SwiperSlide>
            <ProductCard
                image="/tractor.png"
                title={t('products.1.title')}
                description={t('products.1.description')}
            />
            </SwiperSlide>
            <SwiperSlide>
            <ProductCard
                image="/machine.png"
                title={t('products.2.title')}
                description={t('products.2.description')}
            />
            </SwiperSlide>
            <SwiperSlide>
            <ProductCard
                image="/production.png"
                title={t('products.3.title')}
                description={t('products.3.description')}
            />
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
