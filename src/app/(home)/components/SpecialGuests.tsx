import Image from "next/image";

export default function SpecialGuests() {
  const guests = [
    {
      name: "NJ AYUK",
      image: "/guests/nj_ayuk.png",
      title: "Presidente da Câmara Africana de Energia",
    },
    {
      name: "Pedro Siza",
      image: "/guests/pedro_vieira.jpg",
      title: "Ex. Ministro da Economia de Portugal",
    },
  ];

  return (
    <div className="px-12 py-8 flex items-center justify-center bg-gradient-to-b from-white to-white/70">
      <div className="flex max-w-5xl w-full flex-col gap-8 items-center justify-center text-center">
        <h1 className="main-title">Convidados especiais</h1>
        <p className="text-sm text-primary font-semibold max-w-4xl">
          Nesta seção, prestamos homenagem às personalidades de prestígio que,
          com sua trajetória exemplar e liderança inspiradora, contribuem
          significativamente para o fortalecimento do setor e da sociedade.
        </p>

        <ul className="flex flex-wrap gap-20 items-center">
          {guests.map((item, index) => (
            <li key={index}>
              <div className="max-w-78 flex flex-col gap-4 text-primary">
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
                  <p className="font-bold">{item.name}</p>
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
