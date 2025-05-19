"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type InputFields = {
  fullname: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFields>();

  const onSubmit: SubmitHandler<InputFields> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8 lg:px-8 lg:py-12 bg-primary/25">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-primary/25 text-white p-8 flex flex-col items-center w-3/5 max-lg:w-full lg:rounded-lg gap-6">
        <div className="flex flex-col text-center max-w-lg">
          <h1 className="font-bold text-xl">FORMULÁRIO DE INSCRIÇÃO</h1>
          <p className="text-sm">
            Preencha o formulário abaixo para garantir a sua participação no
            evento.
          </p>
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="Nome completo"
            className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-white/70"
            {...register("fullname", { required: true })}
          />
          {errors.fullname && (
            <p
              role="alert"
              className="text-red-500 text-sm">
              {errors.fullname.message}
            </p>
          )}
        </div>

        <div className="w-full">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-white/70"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="w-full">
          <input
            type="tel"
            placeholder="Contacto telefónico"
            className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-white/70"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div className="w-full px-4 py-2 rounded-md outline-none bg-white/25 text-white/70">
          <select
            className="w-full outline-none text-black"
            {...register("company", { required: true })}>
            <option
              disabled
              selected className="text-black">
              Selecione o tipo de empresa
            </option>
            <option value="empresa">Empresa</option>
            <option value="individual">Individual</option>
          </select>

          {errors.company && (
            <p
              role="alert"
              className="text-red-500 text-sm">
              {errors.company.message}
            </p>
          )}
        </div>

        <div className="w-full">
          <textarea
            placeholder="Assunto"
            className="w-full px-4 py-2 rounded-md outline-none resize-none bg-white/25 placeholder:text-white/70"
            rows={3}
            {...register("subject", { required: true })}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="px-4 py-2 w-full rounded-md bg-primary text-white hover:bg-transparent hover:text-white duration-300 transition-colors border border-primary cursor-pointer">
          Enviar
        </button>
      </form>
    </div>
  );
}
