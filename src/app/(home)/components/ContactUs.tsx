import { CircleChevronRight } from "lucide-react";

export default function ContactUs({
  externalRef,
}: {
  externalRef?: (el: HTMLDivElement) => void;
}) {
  return (
    <div
      ref={externalRef}
      id="contactos"
      className="px-8 py-24 max-lg:p-0 max-lg:py-8 flex items-center justify-center bg-gradient-to-b from-secondary-blue to-primary/70 ">
      <div className="flex items-center max-lg:flex-col justify-center gap-24 max-lg:gap-8 max-w-5xl">
        <div className="flex flex-col px-4 items-center justify-center text-center gap-4 w-1/2 max-lg:w-full text-white">
          <div>
            <h1 className="font-semibold">QUESTÕES, PROPOSTAS OU SUGESTÕES?</h1>
            <p>
              Preencha o formulário ao lado e entre em contacto conosco para
              tirar dúvidas, solicitar informações ou iniciar uma conversa.
            </p>
          </div>

          <CircleChevronRight />
        </div>

        <form className="bg-primary/25 text-white p-8 flex flex-col items-center w-2/5 max-lg:w-full lg:rounded-lg gap-6">
          <h1 className="font-semibold text-center max-lg:text-lg">
            PREENCHA O FORMULÁRIO E ENTRE EM CONTACTO.
          </h1>

          <input
            type="text"
            placeholder="Nome completo"
            className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-white/70"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-white/70"
          />

          <input
            type="tel"
            placeholder="Contacto telefónico"
            className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-white/70"
          />


          <textarea
            placeholder="Assunto"
            className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-white/70"
            rows={3}
          />

          <button
            type="submit"
            className="px-4 py-2 w-full rounded-md bg-secondary-blue text-white hover:bg-transparent hover:text-white duration-300 transition-colors border border-secondary-blue cursor-pointer">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
