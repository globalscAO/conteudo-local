import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-24 py-12 max-lg:px-8 flex flex-col items-center justify-center bg-primary w-full">
      <nav className="w-full max-w-5xl flex flex-col gap-8 items-center text-white">
        <div className="flex lg:justify-between items-center w-full flex-wrap gap-8 ">
          <div className="flex flex-col gap-2 w-72">
            <Image
              src={"/logo.png"}
              alt={"Logotipo"}  
              width={80}
              height={40}
            />
            <p className="text-sm ">
              Global Services Corporation, empresa angolana de multisserviços.
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm max-lg:flex-wrap">
            <ul className="flex flex-col gap-2">
              <li className="font-bold">CONTACTOS</li>
              <li>
                <Link href={"tel:+244222731031"}>(+244) 222 731 031</Link>
              </li>
              <li>
                <Link href={"tel:+244941064919"}>(+244) 941 064 919</Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="font-bold">OUTRAS SOLUÇÕES</li>
              <li>
                <Link href={"https://academy.globalsc.ao"}>Global Academy</Link>
              </li>
              <li>
                <Link href={"https://globalsc.ao"}></Link>Global Service
                Corporation
              </li>
            </ul>
          </div>
        </div>
        <hr className="w-full border border-white/50" />

        <p className="text-xs">
          © {new Date().getFullYear()} Global Services Corporation. Todos os
          direitos reservados.
        </p>
      </nav>
    </footer>
  );
}
