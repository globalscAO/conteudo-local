import Image from "next/image";

export default function About() {
  return (
    <section className="flex w-full bg-gradient-to-b from-white to-white/70  justify-center items-center px-24 py-12">
      <div className="w-full max-w-5xl flex gap-20 items-center">
        <Image
          src={"/plenaria/1.jpg"}
          alt={""}
          width={500}
          height={400}
          className="rounded-lg object-cover"
        />

        <div className="flex flex-col gap-2">
          <span className="bg-secondary/20 w-fit text-secondary px-6 py-2 rounded-lg font-bold">
            Sobre o evento
          </span>
          <p className="text-primary">
            O Fórum sobre{" "}
            <span className="font-bold">
              O Impacto do Setor Financeiro no Conteúdo Local
            </span>{" "}
            é um desdobramento do debate realizado durante a 5ª Plenária da 4ª
            Edição da Mesa Redonda com CEOs. O encontro reuniu alguns dos
            principais intervenientes da banca e do conteúdo local angolano,
            tendo como tema:{" "}
            <span className="font-bold">
              Como a Tecnologia pode Promover a Integração da Cadeia de Valor do
              Mercado Financeiro e da Indústria de Petróleo e Gás?
            </span> <br/>
            <span>
              O Fórum sobre o Impacto do Sector Financeiro no Conteúdo Local,
              será uma oportunidade para discutir, fomentar e dinamizar boas
              práticas entre o sector financeiro e as empresas do conteúdo local
              angolano.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
