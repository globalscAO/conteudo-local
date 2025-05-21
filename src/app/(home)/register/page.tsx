"use client";

import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import countryList from "react-select-country-list";

type InputFields = {
  firstname: string;
  lastname: string;
  email: string;
  jobPosition: string;
  enterprise: string;
  country: string;
  phoneNumber: string;
  nif: string;
  pack: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFields>();

  const [isLoading, setLoading] = useState(false);

  const options = useMemo(() => countryList().getData(), []);

  const onSubmit: SubmitHandler<InputFields> = (data) => {
    setLoading(true);
    console.log(data);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full bg-[url(/efeito-3.png)] bg-cover">
      <div className="flex flex-col justify-center items-center gap-8 lg:px-8 lg:py-12  bg-gradient-to-r from-secondary/80 to-white/80">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-300 shadow-md shadow-gray-400/70 text-primary p-8 flex flex-col items-center w-3/5 max-lg:w-full lg:rounded-lg gap-6">
          <div className="flex flex-col text-center max-w-lg">
            <h1 className="font-bold text-xl">FORMULÁRIO DE INSCRIÇÃO</h1>
            <p className="text-sm">
              Preencha o formulário abaixo para garantir a sua participação no
              evento.
            </p>
          </div>

          <div className="flex gap-4 w-full">
            <div className="w-full">
              <input
                type="text"
                placeholder="Primeiro nome"
                className="w-full px-4 py-2 rounded-md outline-none placeholder:italic bg-white/25 placeholder:text-gray-500"
                {...register("firstname", {
                  required: "Nome completo é obrigatório",
                })}
              />
              {errors.firstname && (
                <p
                  role="alert"
                  className="text-red-500 text-sm">
                  {errors.firstname.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder="Sobrenome"
                className="w-full px-4 py-2 rounded-md outline-none placeholder:italic bg-white/25 placeholder:text-gray-500"
                {...register("lastname", {
                  required: "Sobrenome é obrigatório",
                })}
              />
              {errors.lastname && (
                <p
                  role="alert"
                  className="text-red-500 text-sm">
                  {errors.lastname.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-4 w-full">
            <div className="w-full">
              <input
                type="text"
                placeholder="NIF"
                className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-gray-500"
                {...register("nif", { required: "NIF é obrigatório" })}
              />
              {errors.nif && (
                <p className="text-red-500 text-sm">{errors.nif.message}</p>
              )}
            </div>

            <div className="w-full">
              <input
                type="tel"
                placeholder="Contacto telefónico"
                className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-gray-500"
                {...register("phoneNumber", {
                  required: "Contacto telefónico é obrigatório",
                })}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-gray-500"
              {...register("email", { required: "Email é obrigatório" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="flex gap-4 w-full">
            <div className="w-full">
              <input
                type="text"
                placeholder="Empresa"
                className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-gray-500"
                {...register("enterprise", {
                  required: "Empresa é obrigatória",
                })}
              />
              {errors.enterprise && (
                <p className="text-red-500 text-sm">
                  {errors.enterprise.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder="Cargo"
                className="w-full px-4 py-2 rounded-md outline-none bg-white/25 placeholder:text-gray-500"
                {...register("jobPosition", {
                  required: "Cargo é obrigatório",
                })}
              />
              {errors.jobPosition && (
                <p className="text-red-500 text-sm">
                  {errors.jobPosition.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full">
            <div className="w-full px-4 py-2 rounded-md  bg-white/25 placeholder:text-gray-500">
              <select
                {...register("country", { required: "País é obrigatório" })}
                className="text-gray-500 w-full  outline-none cursor-pointer">
                <option
                  disabled
                  selected
                  className="text-black"
                  value="">
                  Selecione o país
                </option>
                {options.map((option: { value: string; label: string }) => (
                  <option
                    key={option.value}
                    value={option.label}
                    className="text-gray-500">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>

          <div className="w-full">
            <div className="w-full px-4 py-2 rounded-md bg-white/25 placeholder:text-gray-500">
              <select
                className="text-gray-500 w-full outline-none cursor-pointer"
                {...register("pack", { required: "Pacote é obrigatório" })}>
                <option
                  disabled
                  selected
                  className="text-black"
                  value="">
                  Selecione o pacote
                </option>
                <option value="Individual - 350.000,00">
                  Pacote Individual - 350.000,00 AOA
                </option>
                <option value="3 Pessoas - 1.000.000 AOA">
                  Pacote de 3 Pessoas - 1.000.000,00 AOA
                </option>
                <option value="5 Pessoas - 1.500.000,00 AOA">
                  Pacote de 5 Pessoas - 1.500.000,00 AOA
                </option>
              </select>
            </div>

            {errors.pack && (
              <p className="text-red-500 text-sm">{errors.pack.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-2 w-full rounded-md bg-primary text-white hover:bg-transparent hover:text-white duration-300 transition-colors border border-primary cursor-pointer">
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
