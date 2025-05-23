"use cient";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

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
    reset,
    formState: { errors },
  } = useForm<InputFields>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<InputFields> = (data) => {
    setIsLoading(true);

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
        if (res.ok) {
          toast.success("Mensagem enviada com sucesso!");
          setIsLoading(false);
          reset();
        } else {
          toast.error("Erro ao enviar a mensagem. Tente novamente mais tarde.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Erro ao enviar a mensagem. Tente novamente mais tarde.");
      });
  };

  return (
    <div
      ref={externalRef}
      id="contactos"
      className="w-full bg-[url(/efeito-3.png)] bg-cover ">
      <ToastContainer />
      <div className="px-8 max-lg:p-0 py-12 max-lg:py-8 flex items-center justify-center bg-gradient-to-r from-secondary to-white/90 ">
        <div className="flex items-center max-lg:flex-col justify-center gap-12 max-lg:gap-8 w-full  max-w-5xl">
          <div className="flex flex-col px-4 items-center justify-center text-center gap-4 w-full max-lg:w-full text-primary">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31541.415242441934!2d13.234995199999998!3d-8.8163926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f24e8277acab%3A0x8bbb561fd5396f18!2sEPIC%20SANA%20Luanda%20Hotel!5e0!3m2!1spt-PT!2sao!4v1747755552205!5m2!1spt-PT!2sao"
              allowFullScreen
              loading="lazy"
              className="w-full h-120 rounded-lg max-lg:hidden"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-200 text-primary p-8 flex flex-col items-center max-w-md w-full lg:rounded-lg gap-6">
            <h1 className="font-semibold text-center max-lg:text-lg">
              ENTRE EM CONTACTO
            </h1>

            <div className="w-full">
              <input
                type="text"
                placeholder="Nome completo"
                {...register("name", { required: "Nome é obrigatório" })}
                className={`w-full px-4 py-2 rounded-md outline-none placeholder:italic bg-white/25 placeholdertext-gray-400/70 ${
                  errors.name && "focus:ring-red-500 focus:ring-1"
                }`}
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
                className={`w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholdertext-gray-400/70 ${
                  errors.email && "focus:ring-red-500 focus:ring-1"
                }`}
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
                className={`w-full px-4 py-2 ${
                  errors.contact && "focus:ring-red-500 focus:ring-1"
                } rounded-md outline-none bg-white/25 placeholdertext-gray-400/70`}
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
                {...register("subject", {
                  required: "O assunto é obrigatório",
                })}
                className={`w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholdertext-gray-400/70 ${
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
              disabled={isLoading}
              className="px-4 py-2 w-full rounded-md bg-primary text-white hover:bg-transparent hover:text-primary duration-300 transition-colors border border-secondary-blue cursor-pointer">
              {isLoading ? (
                <span className="animate-pulse">Enviando...</span>
              ) : (
                "Enviar"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
