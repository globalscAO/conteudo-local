export default function Register() {
  return (
    <div className="flex flex-col">
 
      <h1>FORMULÁRIO DE INSCRIÇÃO</h1>
     
      <form className="bg-primary/25 text-primary p-8 flex flex-col items-center w-2/5 max-lg:w-full lg:rounded-lg gap-6">


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
          placeholder="Contacto telefónico"
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
