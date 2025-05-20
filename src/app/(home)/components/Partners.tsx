"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Partners({
  externalRef,
}: {
  externalRef?: (el: HTMLDivElement) => void;
}) {
  const partners = ["/partners/1.png", "/partners/2.png"];
  return (
    <div
      ref={externalRef}
      id="parceiros"
      className="w-full bg-primary text-white flex justify-center items-center px-12 py-12">
      <div className="max-w-5xl w-full flex flex-col items-center justify-center gap-8">
        <h1 className="font-bold text-2xl">Parceiros</h1>

        <Swiper
          loop
          slidesPerView={5}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay]}
          className="w-full max-w-xl">
          {partners.map((item, index) => (
            <SwiperSlide
              key={index}
              className="pb-10">
              <div className="border-7 mx-auto shadow-xl shadow-gold-two/70 rounded-md bg-white w-44 h-40 p-4 flex items-center justify-center">
                <Image
                  width={400}
                  height={400}
                  src={item}
                  alt="Partner max-lg:w-50 max-lg:h-50"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
