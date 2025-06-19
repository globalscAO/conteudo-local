import Image from "next/image";

export default function Guests({
  externalRef,
}: {
  externalRef?: (el: HTMLDivElement) => void;
}) {
  const guests = [
    {
      name: "Mário Nascimento",
      imgUrl: "/guests/mario_nascimento.jpeg",
      title: "Presidente da ABANC",
    },
    {
      name: "Dra. Suzana Monteiro Camacho",
      imgUrl: "/guests/suzana_camacho.png",
      title: "Advisor, Central Bank Board - BNA",
    },
    {
      name: "Luís Teles",
      imgUrl: "/guests/luis_teles.jpeg",
      title: "CEO do Standard Bank",
    },
    {
      name: "Osvaldo Macaia",
      imgUrl: "/guests/osvaldo_lemos.jpeg",
      title: "CEO do Banco Sol",
    },
    {
      name: "Hugo Teles",
      imgUrl: "/guests/hugo_teles.jpeg",
      title: "PCE do Banco BIC Angola",
    },
    {
      name: "Edson R. dos Santos",
      imgUrl: "/guests/edson_santos.jpeg",
      title: "PCA da ETU Energias",
    },
    {
      name: "Alberto Jorge Mendes",
      imgUrl: "/guests/alberto_mendes.jpeg",
      title: "PCA do Grupo Simples",
    },
    {
      name: "Luís Gonçalves",
      imgUrl: "/guests/luis_goncalves.png",
      title: "CEO do BFA - Banco de Fomento Angola",
    },
    {
      name: "Filipa Vilhena",
      imgUrl: "/guests/filipa_vilhena.jpeg",
      title: "Vice-Presidente da AECIPA",
    },
  ];

  return (
    <div
      ref={externalRef}
      className="w-full bg-[url(/efeito-3.png)] bg-cover">
      <div className="bg-gradient-to-t from-gray-300/70 to-white/90 flex justify-center items-center px-12 py-24 max-lg:py-8">
        <div className="max-w-5xl w-full flex flex-col gap-5 text-center justify-center items-center">
          <h1 className="main-title">Destaque das ilustres figuras</h1>

          <ul className="flex flex-wrap gap-8 justify-center">
            {guests.map((item, index) => (
              <li key={index}>
                <div className="w-60 flex flex-col items-center justify-center gap-4">
                  <div className="gold p-1 w-60 h-60  rounded-full">
                    <Image
                      src={item.imgUrl}
                      alt={item.name}
                      width={300}
                      height={300}
                      className="h-full w-full bg-white rounded-full object-cover object-top"
                    />
                  </div>

                  <div className="text-primary">
                    <p className="text-lg font-bold">{item.name}</p>
                    <p>{item.title}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
