import Image from "next/image";

export default function About({
  externalRef,
}: {
  externalRef?: (el: HTMLDivElement) => void;
}) {
  return (
    <section
      id="sobre"
      ref={externalRef}
      className="w-full bg-[url(/efeito-3.png)] bg-cover">
      <div className="flex w-full bg-gradient-to-l from-white to-white/70 justify-center items-center px-12 max-lg:px-8 py-24 max-lg:py-8">
        <div className="w-full max-w-5xl flex max-lg:gap-8 gap-12 items-center justify-center flex-wrap">
          <Image
            src={"/plenaria/1.JPG"}
            alt={""}
            width={500}
            height={400}
            className="rounded-lg object-cover w-1/2 max-lg:w-full max-w-md"
          />

          <div className="flex flex-col gap-2 max-lg:gap-4 w-1/2 max-lg:w-full max-lg:items-center">
            <span className="main-title">Sobre o evento</span>
            <p className="text-primary max-lg:text-justify">
              O Fórum sobre{" "}
              <span className="font-bold">
                O Impacto do Setor Financeiro no Conteúdo Local
              </span>{" "}
              é um desdobramento do debate realizado durante a 5ª Plenária da 4ª
              Edição da Mesa Redonda com CEOs. O encontro reuniu alguns dos
              principais intervenientes da banca e do conteúdo local angolano,
              tendo como tema:{" "}
              <span className="font-bold">
                Como a Tecnologia pode Promover a Integração da Cadeia de Valor
                do Mercado Financeiro e da Indústria de Petróleo e Gás?
              </span>{" "}
              <br />
              <span>
                O Fórum sobre o Impacto do Sector Financeiro no Conteúdo Local,
                será uma oportunidade para discutir, fomentar e dinamizar boas
                práticas entre o sector financeiro e as empresas do conteúdo
                local angolano.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
