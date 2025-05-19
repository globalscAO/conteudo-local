import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HowToParticipate({
  externalRef,
}: {
  externalRef?: (el: HTMLDivElement) => void;
}) {
  const steps = [
    {
      stepNumber: 1,
      title: "Acesse o site",
      description:
        "Vá para o menu e clique em 'Inscrever-se' ou em 'Participar'.",
    },

    {
      stepNumber: 2,
      title: "Preencher o formulário",
      description: `Na página de inscrição, preencha o formulário de inscrição com os seus dados.`,
    },
    {
      stepNumber: 3,
      title: "Verifique os seus dados",
      description: `Certifique-se de que todos os dados estão corretos antes de enviar o formulário.`,
    },
    {
      stepNumber: 4,
      title: "Email de Confirmação",
      description: `Você receberá um email de confirmação com os detalhes da sua inscrição.`,
    },
    {
      stepNumber: 5,
      title: "Aguarde a nossa resposta",
      description: `Aguarde a nossa resposta com mais informações sobre o evento e o seu ticket.`,
    },
  ];

  return (
    <div
      ref={externalRef}
      className="w-full flex items-center justify-center px-12 py-8 bg-gradient-to-t from-secondary-blue to-primary/70 ">
      <div className="flex flex-col items-center justify-center gap-12 max-w-5xl">
        <div className="flex flex-col justify-center  gap-2 items-center text-center">
          <h1 className="main-title">Quer saber como pode fazer parte?</h1>
          <p className="text-white text-sm">
            Siga os passos aqui à baixo e faça logo a sua inscrição.
          </p>
        </div>

        <ul className="flex-wrap flex gap-8 items-center justify-center">
          {steps.map((item, index) => (
            <React.Fragment key={index}>
              <li className="flex flex-col text-center gap-2 items-center justify-center bg-secondary-blue border-4 border-primary text-white rounded-2xl py-4 px-4 max-w-58 h-50">
                <span className="text-center rounded-full text-xl text-white  font-semibold">
                  {item.stepNumber}
                </span>

                <div className="flex flex-col text-center items-center">
                  <span className="font-semibold text-sm">
                    {item.title.toUpperCase()}
                  </span>
                  <p className="text-xs">{item.description}</p>
                </div>
              </li>

              {steps && (index + 1) % 3 !== 0 && index < steps.length - 1 && (
                <Image
                  src={"/arrow-step.svg"}
                  alt={"Arrow Step"}
                  width={100}
                  height={50}
                  className="max-lg:hidden"
                />
              )}
            </React.Fragment>
          ))}
        </ul>

        <Link
          href={"/register"}
          className="w-full text-center max-w-sm bg-primary px-12 py-4 font-semibold rounded-lg hover:bg-transparent border border-primary hover:border-white hover:text-white transition-colors duration-300 text-white">
          Fazer Inscrição
        </Link>
      </div>
    </div>
  );
}
