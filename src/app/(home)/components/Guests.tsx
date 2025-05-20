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
      imgUrl: "/guests/suzana_camacho.jpeg",
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
      imgUrl: "/guests/luis_goncalves.jpeg",
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
      className="bg-gradient-to-b from-secondary-blue to-primary/70 flex justify-center items-center px-12 py-24">
      <div className="max-w-5xl w-full flex flex-col gap-5 text-center justify-center items-center">
        <h1 className="main-title">Destaque das ilustres figuras</h1>

        

        <ul className="flex flex-wrap gap-8 justify-center">
          {guests.map((item, index) => (
            <li key={index}>
              <div className="w-50 flex flex-col items-center justify-center gap-4">
                <div className="gold p-1 w-50 h-50  rounded-full">
                  <Image
                    src={item.imgUrl}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="h-full w-full rounded-full object-cover object-top"
                  />
                </div>

                <div className="text-white">
                  <p className="text-lg font-bold">{item.name}</p>
                  <p>{item.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
