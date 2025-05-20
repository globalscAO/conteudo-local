import Image from "next/image";

export default function SpecialGuests({
  externalRef,
}: {
  externalRef?: (el: HTMLDivElement) => void;
}) {
  const guests = [
    {
      name: "NJ AYUK",
      image: "/guests/nj_ayuk.png",
      title: "Presidente da Câmara Africana de Energia",
    },
    {
      name: "Pedro Siza Vieira",
      image: "/guests/pedro_vieira.jpg",
      title: "Ex. Ministro da Economia de Portugal",
    },
  ];

  return (
    <div
      ref={externalRef}
      id="convidados"
      className="px-12 py-24 max-lg:py-8 flex items-center justify-center bg-gradient-to-b from-secondary-blue to-primary/70">
      <div className="flex max-w-5xl w-full flex-col gap-8 items-center justify-center text-center">
        <h1 className="main-title">Convidados especiais</h1>

        <ul className="flex flex-wrap gap-20 justify-center items-start">
          {guests.map((item, index) => (
            <li key={index}>
              <div className="max-w-78 flex flex-col gap-4 text-white">
                <div className="gold p-2 rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-78 h-76 rounded-full object-cover object-top"
                  />
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
  );
}
