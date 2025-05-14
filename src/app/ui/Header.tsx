import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const link = [
    {
      title: "Sobre",
      id: "sobre",
    },
    {
      title: "Investimento",
      id: "investimento",
    },
    {
      title: "Parceiros",
      id: "parceiros",
    },
    {
      title: "Contactos",
      id: "contactos",
    },
  ];

  return (
    <header className="py-4 px-6 bg-primary w-full flex justify-center items-center">
      <div className="max-w-5xl w-full flex justify-between items-center text-white">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt={""}
            width={80}
            height={40}
            className="object-contain"
          />
        </Link>
        <ul className="flex gap-4 items-center max-lg:hidden">
          {link.map((item, index) => (
            <li key={index}>
              <button className="font-semibold px-8 py-2 cursor-pointer hover:bg-white/10 rounded-md transition-colors duration-300">
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        <Link
          href={""}
          className="bg-secondary px-4 py-2  font-semibold rounded-md hover:bg-transparent border border-secondary hover:text-secondary transition-colors duration-300">
          Inscrever-se
        </Link>{" "}
      </div>
    </header>
  );
}
