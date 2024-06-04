import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../assets/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function Home() {
  return (
    <div className="flex-1 w-full flex justify-center">
      <div className="w-[70%] flex flex-col space-y-6">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper rounded-lg w-full"
        >
          <SwiperSlide>
            <img
              src="https://arbuz.kz/image/s3/arbuz-kz-banners/4d215925-e436-418a-81b3-0d348937bb6c-768_s_rus_kopiya_1_png.png?w=1450&h=:h&c=1714645508"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://arbuz.kz/image/s3/arbuz-kz-banners/1f9ee786-22c1-4be3-8f29-54b3e904c7df-797_s_rus_kopiya_png.png?w=1450&h=:h&c=1715320282"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://arbuz.kz/image/s3/arbuz-kz-banners/c8d7853d-e295-4614-b78f-1a0b10065cf4-1450h464_jpg.jpg?w=1450&h=:h&c=1716786329"
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">Товар дня</h1>
          <div className="flex space-x-3">
            <img
              src="https://arbuz.kz/image/s3/arbuz-kz-products/207653-kasha_kabrita_grechnevaya_na_kozem_moloke_dlya_detei_180_g.jpg?w=360&h=360&_c=1716352922"
              alt=""
              className="rounded-lg"
            />
            <div className="flex flex-col space-y-2">
              <p className="text-xl text-gray-800 font-semibold ">
                Каша Kabrita гречневая на козьем молоке для детей 180 г
              </p>
              <p className="text-gray-400 ">
                Нежная и воздушная гречневая каша на основе адаптированной смеси
                Kabrita® идеальна для бережного перехода к злаковому прикорму и
                сбалансированного питания малыша первого года жизни.
              </p>
              <div className="font-bold ">2865 ₸</div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 w-full">
          {products.slice(0, 5).map((product) => (
            <ProductCard product={product} />
          ))}
        </div>

        <div className="w-full flex justify-between gap-4">
          <div className="relative w-1/3">
            <img
              src="https://arbuz.kz/image/s3/arbuz-kz-publications/250392-vygodnye_pokupki-poster.webp?_c=1716202357"
              alt=""
              className="rounded-lg "
            />
            <p className="absolute top-[50%] translate-y-[-50%] left-4 text-white font-semibold text-2xl w-[50%]">
              Выгодные покупки
            </p>
          </div>

          <div className="relative w-1/3">
            <img
              src="https://arbuz.kz/image/s3/arbuz-kz-publications/249195-arbuz_select-poster.png?_c=1713502319"
              alt=""
              className="rounded-lg "
            />
            <p className="absolute top-[50%] translate-y-[-50%] left-4 text-white font-semibold text-2xl w-[50%]">
              Arbuz Select
            </p>
          </div>

          <div className="relative w-1/3">
            <img
              src="https://arbuz.kz/image/s3/arbuz-kz-publications/250357-dlya_friends-poster.webp?_c=1714643634"
              alt=""
              className="rounded-lg "
            />
            <p className="absolute top-[50%] translate-y-[-50%] left-4 text-white font-semibold text-2xl w-[50%]">
              Для Friends
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
