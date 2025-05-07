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
            src={"/"}
            alt={""}
            width={44}
            height={44}
          />
        </Link>

        <ul className="flex gap-4 items-center">
          {link.map((item, index) => (
            <li key={index}>
              <button className="font-semibold px-4 py-2">{item.title}</button>
            </li>
          ))}
        </ul>

        <Link
          href={""}
          className="bg-secondary px-4 py-2  font-semibold rounded-md">
          Inscrever-se
        </Link>{" "}
      </div>
    </header>
  );
}
