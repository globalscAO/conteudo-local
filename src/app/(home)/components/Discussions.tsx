import Image from "next/image";

export default function Discussions({
  externalRef,
}: {
  externalRef?: (el: HTMLDivElement) => void;
}) {
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
    /*   {
      description: `Como o sector financeiro pode apoiar as empresas do sector de petróleos a implementação do conteúdo local, fornecendo soluções de tesouraria, e assessoria técnica.`,
      imgUrl: "/discussions/4.jpg",
    }, */
  ];
  return (
    <div
      ref={externalRef}
      className="w-full bg-[url(/efeito-3.png)] bg-cover">
      <div className="flex px-12 py-24 max-lg:py-8 items-center justify-center w-full bg-gradient-to-b from-secondary to-white/70">
        <div className="max-w-5xl w-full flex flex-col gap-8 text-primary text-center items-center">
          <div className="flex flex-col text-center items-center gap-4">
            <h1 className="main-title">Principais pontos de discussão</h1>
          </div>

          <ul className="decoration-dashed text-left w-full flex flex-wrap justify-center items-center gap-12">
            {subjects.map((item, index) => (
              <li
                key={index}
                className="flex gap-4 items-center flex-col-reverse w-full max-w-72">
                <div className="flex items-start justify-start gap-2">
                  {/*   
                    <span className="text-2xl font-bold text-gold-one max-lg:hidden">
                      »
                    </span> 
                  */}

                  <p className="font-semibold max-lg:text-justify">
                    {item.description}
                  </p>
                </div>

                <Image
                  src={item.imgUrl}
                  alt={"Discussion"}
                  width={250}
                  height={150}
                  className="object-cover rounded-md max-h-40 h-full w-full bg-white"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
