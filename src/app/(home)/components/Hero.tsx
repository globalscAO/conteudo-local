import TimerLeft from "./TimerLeft";

export default function Hero() {
  return (
    <section className="flex w-full items-center justify-center relative h-140">
      <video
        src={
          "https://global-services-corporation.github.io/images/mesaredonda.mp4"
        }
        muted
        loop
        autoPlay
        className="pointer-events-none object-cover object-top w-full h-full rounded-lg"
      />

      <div className="absolute top-0 bg-gradient-to-t from-white to-white/70  w-full h-full flex justify-center items-center">
        <div className="max-w-5xl gap-8 h-full items-center justify-center flex flex-col py-12 px-16 text-primary">
          <h1 className="font-bold text-center text-2xl max-w-2xl">
            <span className="font-normal">FÓRUM SOBRE:</span>
            <br /> O IMPACTO DO SECTOR FINANCEIRO NO CONTEÚDO LOCAL
          </h1>

          <button className="bg-secondary px-8 py-2  font-semibold rounded-md hover:bg-transparent border border-secondary hover:text-secondary transition-colors duration-300 text-white cursor-pointer">
            Participar
          </button>

          <TimerLeft />
        </div>
      </div>
    </section>
  );
}
