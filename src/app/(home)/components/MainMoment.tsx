import { CircleX, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function MainMoments({
  externalRef,
}: {
  externalRef?: (el: HTMLDivElement) => void;
}) {
  const data = [
    {
      image: "/6.png",
      videoUrl: "/",
      title: "Abertura do evento",
      description:
        "A abertura do Fórum sobre o Impacto do Setor Financeiro no Conteúdo Local, foi marcada pela presença do PCA da ANPG, Eng. Jerónimo Paulino e o CEO da Global Services Corporation, Edson Kachivela.",
    },
    {
      image: "/7.jpeg",
      videoUrl: "/",
      title: "Discurso de NJ Ayuk",
      description:
        "Durante seu discurso, Ayuk enfatizou que o futuro energético da África depende diretamente da capacidade dos países africanos de integrar as empresas locais no desenvolvimento e operação de seus setores estratégicos, como o petróleo, gás e energia.",
    },
    {
      image: "/9.png",
      videoUrl: "/",
      title: "Entretenimento com Cleyton M",
      description:
        "O Fórum também contou com momentos de descontração, como a apresentação do artista Cleyton M, que animou os participantes com sua música e energia contagiante.",
    },
    {
      image: "/8.png",
      videoUrl: "/",
      title: "Discurso de Pedro Siza Vieira",
      description:
        "O Fórum também foi marcado pelo discurso de Pedro Siza Vieira, que destacou a importância do setor financeiro no desenvolvimento sustentável e na promoção de investimentos responsáveis para o futuro da economia local.",
    },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>("");

  return (
    <>
      <section
        ref={externalRef}
        className="w-full bg-[url(/efeito-3.png)] bg-cover"
        id="main-moments">
        <div className="flex flex-col gap-12 w-full bg-gradient-to-r from-white to-white/70 justify-center items-center px-12 max-lg:px-8 py-24">
          <h1 className="main-title text-center">
            Principais Momentos do Fórum
          </h1>

          <div className="flex justify-between max-lg:justify-center w-full max-w-7xl gap-8">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="w-full p-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="w-full">
                  <SwiperSlide className="w-full py-12">
                    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-2 bg-gray-200 rounded-2xl  hover:shadow-md transition-all duration-300 hover:scale-105">
                      <Image
                        src={item.image}
                        width={300}
                        height={100}
                        alt=""
                        className="w-full rounded-t-lg object-cover object-top h-65"
                      />

                      <div className="px-6 pt-2 pb-8 h-80 items-center flex flex-col gap-2 justify-between">
                        <div className="flex flex-col gap-2">
                          <h2 className="text-primary text-xl font-bold text-center">
                            {item.title}
                          </h2>
                          <p className="text-primary max-lg:text-justify text-center">
                            {item.description}
                          </p>
                        </div>

                        <button
                          onClick={() => {
                            setVideoUrl(item.videoUrl);
                            setModalOpen(true);
                          }}
                          className="flex cursor-pointer items-center gap-2 border border-primary bg-primary hover:bg-transparent text-white hover:text-primary px-4 py-2 rounded-full transition-colors duration-300">
                          <Play /> Assistir vídeo
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full relative flex flex-col gap-4">
            <button
              onClick={() => setModalOpen(false)}
              className="text-gray-500 hover:text-gray-800 p-2 cursor-pointer bg-white w-fit absolute top-2 right-2 rounded-full transition-colors duration-300 z-20">
              <CircleX className="w-8 h-8" />
            </button>

            <video
              src={videoUrl}
              muted
              controls
              loop
              className=" object-cover object-top w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
