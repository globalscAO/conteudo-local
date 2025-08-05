import Image from "next/image";

export default function WhatExpect({
  externalRef,
}: {
  externalRef?: (el: HTMLDivElement) => void;
}) {
  const data = [
    {
      image: "/6.png",
      title: "O que esperar",
      description:
        "O Fórum sobre o Impacto do Setor Financeiro no Conteúdo Local reunirá líderes do setor financeiro e representantes da indústria de petróleo e gás para discutir como a tecnologia pode promover a integração da cadeia de valor do mercado financeiro e da indústria de petróleo e gás.",
    },
    {
      image: "/7.jpeg",
      title: "O que esperar",
      description:
        "O Fórum sobre o Impacto do Setor Financeiro no Conteúdo Local reunirá líderes do setor financeiro e representantes da indústria de petróleo e gás para discutir como a tecnologia pode promover a integração da cadeia de valor do mercado financeiro e da indústria de petróleo e gás.",
    },
    {
      image: "/6.png",
      title: "O que esperar",
      description:
        "O Fórum sobre o Impacto do Setor Financeiro no Conteúdo Local reunirá líderes do setor financeiro e representantes da indústria de petróleo e gás para discutir como a tecnologia pode promover a integração da cadeia de valor do mercado financeiro e da indústria de petróleo e gás.",
    },
  ];

  return (
    <section
      ref={externalRef}
      className="w-full bg-[url(/efeito-3.png)] bg-cover ">
      <div className="flex flex-col gap-12 w-full bg-gradient-to-r from-white to-white/70 justify-center items-center px-12 max-lg:px-8 py-24">
        <h1 className="main-title">Principais Debates do Fórum</h1>

        <div className="flex justify-between w-full max-w-5xl gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="max-w-sm w-full flex flex-col items-center justify-center gap-2 bg-gray-200 rounded-2xl">
              <Image
                src={item.image}
                width={300}
                height={100}
                alt=""
                className="w-full rounded-t-lg object-cover object-top h-65"
              />

              <div className="px-6 pt-2 pb-8 items-center justify-center flex flex-col gap-2">
                <h2 className="text-primary text-2xl font-bold">
                  {item.title}
                </h2>
                <p className="text-primary max-lg:text-justify text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
