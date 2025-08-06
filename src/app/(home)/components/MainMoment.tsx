import Image from "next/image";

export default function MainMoments({
  externalRef,
}: {
  externalRef?: (el: HTMLDivElement) => void;
}) {
  const data = [
    {
      image: "/6.png",
      title: "Abertura do evento com o CEO - Edson Kachivela",
      description:
        "A abertura do Fórum sobre o Impacto do Setor Financeiro no Conteúdo Local, realizado no Hotel Epic Sana, em Luanda, foi marcada pela presença do CEO da Global Services Corporation, Edson Kachivela, que destacou a importância do fortalecimento das empresas locais no setor petrolífero e no mercado financeiro angolano.",
    },
    {
      image: "/7.jpeg",
      title: "Discurso de NJ Ayuk",
      description:
        "Durante seu discurso, Ayuk enfatizou que o futuro energético da África depende diretamente da capacidade dos países africanos de integrar as empresas locais no desenvolvimento e operação de seus setores estratégicos, como o petróleo, gás e energia.",
    },
    {
      image: "/8.png",
      title: "Discurso de Pedro Siza Vieira",
      description:
        "O Fórum também foi marcado pelo discurso de Pedro Siza Vieira, que destacou a importância do setor financeiro no desenvolvimento sustentável e na promoção de investimentos responsáveis para o futuro da economia local.",
    },
  ];

  return (
    <section
      ref={externalRef}
      className="w-full bg-[url(/efeito-3.png)] bg-cover" id="main-moments">
      <div className="flex flex-col gap-12 w-full bg-gradient-to-r from-white to-white/70 justify-center items-center px-12 max-lg:px-8 py-24">
        <h1 className="main-title text-center">Principais Momentos do Fórum</h1>

        <div className="flex flex-wrap justify-between max-lg:justify-center w-full max-w-7xl gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="max-w-sm w-full flex flex-col items-center gap-2 bg-gray-200 rounded-2xl  hover:shadow-md transition-all duration-300 hover:scale-105">
              <Image
                src={item.image}
                width={300}
                height={100}
                alt=""
                className="w-full rounded-t-lg object-cover object-top h-65"
              />

              <div className="px-6 pt-2 pb-8 items-center flex flex-col gap-2">
                <h2 className="text-primary text-xl font-bold text-center">
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
