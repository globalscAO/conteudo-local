"use cient";

import { CircleChevronRight } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type InputFields = {
  name: string;
  email: string;
  contact: string;
  subject: string;
};

export default function ContactUs({
  externalRef,
}: {
  externalRef?: (el: HTMLDivElement) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFields>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<InputFields> = (data) => {
    const { name, email, contact, subject } = data;
    const response = fetch(
      "https://gsc-website-api.onrender.com/contact-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          contact,
          subject,
        }),
      }
    );

    response
      .then((res) => {
        setIsLoading(true);
        if (res.ok) {
          alert("Mensagem enviada com sucesso!");
          setIsLoading(false);
        } else {
          alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
      });
  };

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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-primary/25 text-white p-8 flex flex-col items-center w-3/5 max-lg:w-full lg:rounded-lg gap-6">
          <h1 className="font-semibold text-center max-lg:text-lg">
            PREENCHA O FORMULÁRIO E ENTRE EM CONTACTO.
          </h1>

          <div className="w-full">
            <input
              type="text"
              placeholder="Nome completo"
              {...register("name", { required: "Nome é obrigatório" })}
              className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-white/70 focus:ring-red-500 focus:ring-1 "
            />
            {errors.name && (
              <p
                className="
              text-red-500 text-sm font-medium
              max-lg:text-xs
            ">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email é obrigatório",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Email inválido",
                },
              })}
              className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-white/70 focus:ring-red-500 focus:ring-1 "
            />
            {errors.email && (
              <p
                className="
              text-red-500 text-sm font-medium
              max-lg:text-xs
            ">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <input
              type="tel"
              placeholder="Contacto telefónico"
              {...register("contact", {
                required: "Contacto telefónico é obrigatório",
              })}
              className="w-full px-4 py-2 focus:ring-red-500 focus:ring-1 rounded-md outline-none bg-white/25 placeholder:text-white/70"
            />
            {errors.contact && (
              <p
                className="
              text-red-500 text-sm font-medium
              max-lg:text-xs
            ">
                {errors.contact.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <textarea
              placeholder="Assunto"
              {...register("subject", { required: "O assunto é obrigatório" })}
              className={`w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-white/70 ${
                errors.subject && "focus:ring-red-500 focus:ring-1"
              }`}
              rows={3}
            />
            {errors.subject && (
              <p
                className="
              text-red-500 text-sm font-medium
              max-lg:text-xs
            ">
                {errors.subject.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-2 w-full rounded-md bg-secondary-blue text-white hover:bg-transparent hover:text-white duration-300 transition-colors border border-secondary-blue cursor-pointer">
            {isLoading ? (
              <span className="animate-pulse">Enviando...</span>
            ) : (
              "Enviar"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
