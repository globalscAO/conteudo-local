import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-24 py-12 flex flex-col items-center justify-center bg-primary w-full">
      <nav className="w-full max-w-5xl flex flex-col gap-8 text-white">
        <div className="flex justify-between items-center w-full ">
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

          <div className="flex items-center gap-4 text-sm">
            <ul className="flex flex-col gap-2">
              <li className="font-bold">CONTACTOS</li>
              <li>(+244) 222 731 031</li>
              <li>(+244) 941 064 919</li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="font-bold">OUTRAS SOLUÇÕES</li>
              <li>Global Academy</li>
              <li>Global Service Corporation</li>
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
