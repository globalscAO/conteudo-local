import Image from "next/image";

export default function WhatExpect({
  externalRef,
}: {
  externalRef?: (el: HTMLDivElement) => void;
}) {
  return (
    <section
      ref={externalRef}
      className="w-full bg-[url(/efeito-3.png)] bg-cover">
      <div className="flex w-full bg-gradient-to-r from-white to-white/70 justify-center items-center px-12 max-lg:px-8 py-24">
        <div className="w-full max-w-5xl flex flex-row-reverse gap-12 justify-center max-lg:gap-8 items-center flex-wrap">
          <Image
            src={"/cartaz.jpeg"}
            alt={""}
            width={500}
            height={400}
            className="rounded-lg object-cover w-1/2 max-lg:w-full max-w-md"
          />

          <div className="flex flex-col gap-2 max-lg:gap-4 w-1/2 max-lg:w-full max-lg:items-center max-lg:text-center">
            <span className="main-title">O que esperar?</span>
            <p className="text-primary max-lg:text-justify">
              Com a publicação do Decreto Presidencial nº 271/20 de 20 de
              Outubro, foram estabelecidas diretrizes para a implementação do
              conteúdo local no setor de Petróleo em Angola, tornando este
              sector num instrumento essencial para a integração do sector
              empresarial e, consequentemente, acelerar a geração de mais
              emprego e fomento à diversificação econômica. Este marco
              regulatório visa não apenas aumentar a participação de empresas e
              profissionais locais no sector de petróleo e gás, mas também
              estimular toda a cadeia de valor, particularmente de serviços como
              a formação e outros serviços essenciais de apoio a atividade
              petrolífera.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
