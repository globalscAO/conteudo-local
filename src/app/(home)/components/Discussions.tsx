import Image from "next/image";

export default function Discussions() {
  const subjects = [
    {
      description: `Como o sector financeiro pode apoiar as empresas do sector de petróleos a implementação do conteúdo local, fornecendo soluções de tesouraria, e assessoria técnica.`,
      imgUrl: "/discussions/1.jpg",
    },
    {
      description: `Os desafios e oportunidades para o sector financeiro, especialmente na formação e capacitação de profissionais angolanos para atender às demandas do sector petrolífero.`,
      imgUrl: "/discussions/2.jpg",
    },
    {
      description: `Como o investimento em formação e educação profissional pode contribuir para o cumprimento das exigências do conteúdo local e para o fortalecimento das indústrias em Angola.`,
      imgUrl: "/discussions/3.jpg",
    },
    {
      description: `Como o sector financeiro pode apoiar as empresas do sector de petróleos a implementação do conteúdo local, fornecendo soluções de tesouraria, e assessoria técnica.`,
      imgUrl: "/discussions/4.jpg",
    },
  ];
  return (
    <div className="flex px-12 py-12 max-lg:pb-0 items-center justify-center w-full bg-gradient-to-t from-white to-white/70">
      <div className="max-w-5xl w-full flex flex-col gap-8 text-primary text-center items-center">
        <div className="flex flex-col text-center items-center gap-4">
          <h1 className="main-title">Principais pontos de discussão</h1>
          <p className="text-sm max-w-3xl max-lg:hidden">
            Descubra os temas mais relevantes debatidos por líderes do setor
            financeiro e da indústria petrolífera, com insights valiosos sobre
            como a inovação e a colaboração estratégica estão a transformar o
            conteúdo local em Angola.
          </p>
        </div>

        <ul className="decoration-dashed text-left w-full flex flex-col gap-12">
          {subjects.map((item, index) => (
            <li
              key={index}
              className="flex gap-8 max-lg:gap-4 items-center max-lg:flex-col-reverse justify-start w-full">
              <div className="flex items-start justify-start gap-2">
                <span className="text-2xl font-bold text-secondary max-lg:hidden">
                  »
                </span>

                <p className="font-semibold max-lg:text-justify">{item.description}</p>
              </div>

              <Image
                src={item.imgUrl}
                alt={"Discussion"}
                width={250}
                height={150}
                className="object-cover rounded-md lg:max-w-62.5 max-w-h-37.5 h-full w-full bg-white"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
