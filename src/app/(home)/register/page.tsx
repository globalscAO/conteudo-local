export default function Register() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 px-8 py-12 bg-gradient-to-b from-white/70 to-[#EFEFEF]/90">
      <form className="bg-primary/25 text-primary p-8 flex flex-col items-center w-3/5 max-lg:w-full lg:rounded-lg gap-6">
        <div className="flex flex-col text-center max-w-lg">
          <h1 className="font-bold text-xl">FORMULÁRIO DE INSCRIÇÃO</h1>
          <p className="text-sm">
            Preencha o formulário abaixo para garantir a sua participação no
            evento.
          </p>
        </div>
        <input
          type="text"
          placeholder="Nome completo"
          className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-primary/70"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-primary/70"
        />

        <input
          type="tel"
          placeholder="Contacto telefónico"
          className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-primary/70"
        />

        <textarea
          placeholder="Assunto"
          className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-primary/70"
          rows={3}
        />

        <button
          type="submit"
          className="px-4 py-2 w-full rounded-md bg-primary text-white hover:bg-transparent hover:text-primary duration-300 transition-colors border border-primary cursor-pointer">
          Enviar
        </button>
      </form>
    </div>
  );
}
