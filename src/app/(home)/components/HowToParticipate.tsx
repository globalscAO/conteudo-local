import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HowToParticipate() {
  const steps = [
    {
      stepNumber: 1,
      title: "Acesse o site",
      description:
        "Vá para o menu e clique em 'Cursos' e depois em 'Ver todos'.",
    },
    
    {
      stepNumber: 2,
      title: "Fazer inscrição",
      description: `Clique no botão "Inscrever-se" que levará para o formulário de inscrição.`,
    },
    {
      stepNumber: 3,
      title: "Preencher formulário",
      description: `Em seguida preencha o formulário de inscrição, escolha o curso.`,
    },
    {
      stepNumber: 4,
      title: "E pronto!",
      description: `Depois de enviar o formulário, entraremos em contacto.`,
    },
  ];

  return (
    <div className="w-full flex items-center justify-center px-12 py-24 bg-gradient-to-b from-white to-white/70 ">
      <div className="flex flex-col items-center justify-center gap-12 max-w-5xl">
        <div className="flex flex-col justify-center  gap-2 items-center text-center">
          <h1 className="main-title">Quer saber como pode fazer parte?</h1>
          <p className="text-primary text-sm">
            Siga os passos aqui à baixo e faça logo a sua inscrição.
          </p>
        </div>

        <ul className="flex-wrap flex gap-8 items-center justify-center">
          {steps.map((item, index) => (
            <React.Fragment key={index}>
              <li className="flex flex-col text-center gap-2 items-center justify-center bg-white border-4 border-primary text-primary rounded-2xl py-4 px-4 w-52">
                <span className="text-center rounded-full text-3xl text-primary font-semibold">
                  {item.stepNumber}
                </span>

                <div className="flex flex-col text-center items-center">
                  <span className="font-semibold">{item.title}</span>
                </div>
              </li>

              {steps && (index + 1) % 3 !== 0 && index < steps.length - 1 && (
                <Image
                  src={"/arrow-step.svg"}
                  alt={"Arrow Step"}
                  width={100}
                  height={50}
                />
              )}
            </React.Fragment>
          ))}
        </ul>

        <Link
          href={"/"}
          className="bg-primary px-12 py-4 font-semibold rounded-md hover:bg-transparent border border-primary hover:text-primary transition-colors duration-300 text-white">
          Fazer Inscrição
        </Link>
      </div>
    </div>
  );
}
