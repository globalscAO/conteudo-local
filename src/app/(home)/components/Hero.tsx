import Link from "next/link";
import TimerLeft from "./TimerLeft";

export default function Hero() {
  return (
    <section className="flex w-full items-center justify-center relative h-140 max-lg:h-100">
      <video
        src={
          "https://global-services-corporation.github.io/images/teaser_conteudo_local.mp4"
        }
        muted
        loop
        playsInline
        autoPlay={true}
        className="pointer-events-none object-cover object-top w-full h-full rounded-lg"
      />

      <div className="absolute top-0 bg-gradient-to-t from-primary/50 to-primary/40  w-full h-full flex justify-center items-center">
        <div className="max-w-5xl gap-8 h-full items-center justify-center flex flex-col py-24 max-lg:py-8 px-16 max-lg:px-8 text-white">
          <h1 className="font-bold text-center text-4xl max-lg:text-lg max-w-2xl">
            <span className="font-normal text-sm">FÓRUM SOBRE:</span>
            <br /> O IMPACTO DO SECTOR FINANCEIRO <br />
            NO{" "}
            <span className=" bg-gradient-to-t from-gold-one via-gold-two to-gold-three bg-clip-text text-transparent">
              CONTEÚDO LOCAL
            </span>
          </h1>

          <Link
            href={"/register"}
            className="hover:bg-gold-two px-8 py-2  font-semibold rounded-md bg-transparent border border-gold-two transition-colors duration-300 text-white hover:text-gray-400 cursor-pointer">
            Participar
          </Link>

          <TimerLeft />
        </div>
      </div>
    </section>
  );
}
