"use client";

import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "../lib/scrollTo";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleScrollToSection = (section: string) => {
    if (pathname !== "/") {
      router.push(`/#${section}`);
    } else {
      scrollToSection(section);
    }
  };

  const link = [
    {
      title: "Sobre",
      id: "sobre",
      onClick: () => handleScrollToSection("sobre"),
    },
    {
      title: "Convidados",
      id: "convidados",
      onClick: () => handleScrollToSection("convidados"),
    },
    {
      title: "Parceiros",
      id: "parceiros",
      onClick: () => handleScrollToSection("parceiros"),
    },
    {
      title: "Agenda",
      id: "Agenda",
      onClick: () => handleScrollToSection("agenda"),
    },
    {
      title: "Contactos",
      id: "contactos",
      onClick: () => handleScrollToSection("contactos"),
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
            className="object-contain max-lg:w-16"
          />
        </Link>
        <ul className="flex gap-4 items-center max-lg:hidden">
          {link.map((item, index) => (
            <li key={index}>
              <button
                onClick={item.onClick}
                className="font-semibold px-8 py-2 cursor-pointer hover:bg-white/10 rounded-md transition-colors duration-300">
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        {/*     <Link
          href={"/register"}
          className="bg-secondary px-4 py-2  font-semibold rounded-md hover:bg-transparent border border-secondary hover:text-secondary transition-colors duration-300">
          Inscrever-se
        </Link>{" "} */}
      </div>
    </header>
  );
}
