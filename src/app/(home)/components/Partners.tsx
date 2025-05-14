"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Partners() {
  const partners = ["/", "/", "/", "/", "/", "/", "/", "/", "/", "/"];
  return (
    <div className="w-full bg-secondary/70 text-white flex justify-center items-center px-12 py-8">
      <div className="max-w-5xl w-full flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-lg">Parceiros</h1>

        <Swiper
          loop
          slidesPerView={5}
          autoplay
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            328: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay]}
          className="w-full">
          {partners.map((item, index) => (
            <SwiperSlide
              key={index}
              className="">
              <div className="border-3 mx-auto border-primary rounded-md bg-white w-32 h-32 p-4 flex items-center justify-center">
                <Image
                  width={100}
                  height={100}
                  src={item}
                  alt="Partner"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
