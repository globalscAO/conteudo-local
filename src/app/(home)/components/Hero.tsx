import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
/* import Link from "next/link";
import TimerLeft from "./TimerLeft";
 */

export default function Hero() {
  const carousselImages = [
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/7.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/8.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/9.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/12.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/15.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/16.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/17.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/20.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/21.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/22.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/23.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/24.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/25.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/26.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/27.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/28.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/29.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/31.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/32.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/36.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/37.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/39.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/44.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/45.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/46.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/48.png",
    "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/50.png",
  ];

  return (
    <section className="flex w-full items-center justify-center relative h-152 max-lg:h-100">
      {/* 
      <video
        src={
          "https://global-services-corporation.github.io/images/teaser_conteudo_local.mp4"
        }
        muted
        loop
        playsInline
        autoPlay={true}
        className="pointer-events-none object-cover object-top w-full h-full rounded-lg"
      />
      */}
      <div className="w-full h-full">
        <Swiper
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          effect="fade"
          speed={2000}
          loop
          modules={[Autoplay, EffectFade]}
          className="h-full">
          {carousselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt="FIB"
                width={1920}
                height={1080}
                className="w-full h-full object-cover object-top"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/*  <div className="absolute top-0 bg-gradient-to-t from-primary/50 to-primary/40  w-full h-full flex justify-center items-center">
        <div className="max-w-7xl gap-8 h-full items-center justify-center flex flex-col py-24 max-lg:py-8 px-16 max-lg:px-8 text-white">
          <h1 className="font-bold text-center text-4xl max-lg:text-2xl max-w-2xl">
            <span className="font-normal text-sm">FÓRUM SOBRE:</span>
            <br /> O IMPACTO DO SECTOR FINANCEIRO <br />
            NO{" "}
            <span className=" bg-gradient-to-t from-gold-one via-gold-two to-gold-three bg-clip-text text-transparent">
              CONTEÚDO LOCAL
            </span>
          </h1>

          <Link
            href={"/register"}
            className="hover:bg-gold-two px-8 py-2  font-semibold rounded-md bg-transparent border border-gold-two transition-colors duration-300 text-white hover:text-gray-400 cursor-pointer">
            Participar
          </Link>

          <TimerLeft />
        </div>
      </div> */}
    </section>
  );
}
