import Image from "next/image";

export default function SpecialGuests({
  externalRef,
}: {
  externalRef?: (el: HTMLDivElement) => void;
}) {
  const guests = [
    {
      name: "Rui Miguêns de Oliveira",
      image: "/guests/rui_miguens.png",
      title: "Ministro da Indústria e Comércio de Angola",
    },
    {
      name: "Luís Gonçalves",
      image: "/guests/luis_goncalves.png",
      title: "CEO do BFA - Banco de Fomento Angola",
    },
    {
      name: "Pedro Siza Vieira",
      image: "/guests/pedro_vieira.jpg",
      title: "Ex. Ministro da Economia de Portugal",
    },
    {
      name: "Armando Manuel",
      image: "/guests/armando_manuel.png",
      title:
        "Presidente do Conselho de Administração do Fundo Soberano de Angola",
    },
    {
      name: "NJ AYUK",
      image: "/guests/nj_ayuk.png",
      title: "Presidente da Câmara Africana de Energia",
    },
    {
      name: "Matuzalém Sukete",
      image: "/guests/matuzalem_sukete.png",
      title: "Diretor Geral na AES",
    },
    {
      name: "Osvaldo Macaia",
      image: "/guests/osvaldo_lemos.jpeg",
      title: "CEO do Banco Sol",
    },
/*     {
      name: "Anabela Marcos",
      image: "/guests/anabela_marcos.png",
      title: "Managing Director da SONILS",
    }, */
    {
      name: "Edilson Bartolomeu",
      image: "/guests/edilson_bartolomeu.png",
      title: "CEO na ACREP E&P Angolan Company",
    },
    /* {
      name: "Jerônimo Paulino",
      image: "/guests/paulino_jeronimo.jpg",
      title:
        "Presidente do Conselho de Administração da ANPG - Agência Nacional de Petróleo, Gás e Biocombustíveis",
    }, */
  ];

  return (
    <div
      ref={externalRef}
      id="convidados"
      className="w-full bg-[url(/efeito-3.png)] bg-cover">
      <div className="px-12 py-24 max-lg:py-8 flex items-center justify-center bg-secondary/80">
        <div className="flex max-w-6xl w-full flex-col gap-8 items-center justify-center text-center">
          <h1 className="main-title">Convidados especiais</h1>

          <ul className="flex flex-wrap gap-12 justify-center items-start w-full">
            {guests.map((item, index) => (
              <li key={index}>
                <div className="max-w-78 flex flex-col gap-4 text-primary">
                  <div className="gold p-2 rounded-full">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={300}
                        height={300}
                        className="w-78 h-76 bg-white rounded-full object-cover object-top"
                      />
                    ) : (
                      <Image
                        src={"/guests/unknown.png"}
                        alt={item.name}
                        width={300}
                        height={300}
                        className="w-78 h-76 rounded-full object-cover object-top"
                      />
                    )}
                  </div>

                  <div className="flex flex-col text-lg">
                    <p className="font-bold">{item.name.toUpperCase()}</p>
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
