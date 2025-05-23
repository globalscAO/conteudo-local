"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import countryList from "react-select-country-list";
import { toast, ToastContainer } from "react-toastify";

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
  paymentMethod: string;
  terms: boolean;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputFields>();

  const [isLoading, setLoading] = useState(false);

  const options = useMemo(() => countryList().getData(), []);

  const sendToDatabase = async (data: InputFields) => {
    try {
      const response = await fetch(
        "https://gsc-website-api.onrender.com/adesion",
        {
          method: "POST",
          body: JSON.stringify({
            firstname: data.firstname,
            lastname: data.lastname,
            jobPosition: data.jobPosition,
            nif: data.nif,
            enterprise: data.enterprise,
            email: data.email,
            phoneNumber: data.phoneNumber,
            country: data.country,
            package: data.pack,
            paymentMethod: data.paymentMethod,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        console.error("Falha ao para base de dados, tente novamente.");
      } else {
        console.log("Enviado com sucesso para a base de dados.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const enviarticket = async (data: InputFields) => {
    try {
      const response = await fetch("/api/send-ticket", {
        method: "POST",
        body: JSON.stringify({
          email: "comercial@globalsc.ao",
          phoneNumber: "+244941064919",
          header_1: `${data.firstname} ${data.lastname}`,
          value_1: `${data.enterprise}`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.error("Falha ao enviar o ticket, tente novamente.");
      } else {
        console.log("Ticket enviado com sucesso.");
      }
    } catch (error) {
      console.error("Error sending ticket:", error);
    } finally {
    }
  };

  const onSubmit: SubmitHandler<InputFields> = async (data) => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://gsc-website-api.onrender.com/send-email",
        {
          method: "POST",
          body: JSON.stringify({
            firstname: data.firstname,
            lastname: data.lastname,
            jobPosition: data.jobPosition,
            nif: data.nif,
            enterprise: data.enterprise,
            email: data.email,
            phoneNumber: data.phoneNumber,
            country: data.country,
            package: data.pack,
            paymentMethod: data.paymentMethod,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        toast.error("Falha ao enviar o email, tente novamente.");
        setLoading(false);
      } else {
        toast.success("Email enviado com sucesso.");
        enviarticket(data);
        sendToDatabase(data);
        reset();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  const packages = [
    {
      name: "Individual",
      price: "350.000,00 AOA",
      description:
        "Pacote de acesso individual ao evento, incluindo todas as palestras, workshops e atividades programadas.",
    },
    {
      name: "3 Pax",
      price: "1.000.000,00 AOA",
      description:
        "Pacote de acesso para 3 pessoas ao evento, incluindo todas as palestras, workshops e atividades programadas.",
    },
    {
      name: "5 Pax",
      price: "1.500.000,00 AOA",
      description:
        "Pacote de acesso para 5 pessoas ao evento, incluindo todas as palestras, workshops e atividades programadas.",
    },
  ];

  const paymentMethods = [
    {
      name: "Transferência Bancária",
      image: "/transf-bank.png",
    },
    {
      name: "Pagamento no Local",
      image: "/pagamento.jpeg",
    },
  ];

  return (
    <div className="w-full bg-[url(/efeito-3.png)] bg-cover">
      <ToastContainer />

      <div className="flex flex-col justify-center items-center gap-4 lg:px-8 lg:py-12  bg-gradient-to-r from-secondary/80 to-white/80">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/70 shadow-md shadow-gray-400/70 text-primary p-8 flex flex-col items-center w-8/12 max-lg:w-full lg:rounded-lg gap-6">
          <div className="flex flex-col text-center max-w-lg">
            <h1 className="font-bold text-xl">FORMULÁRIO DE INSCRIÇÃO</h1>
            <p className="text-sm italic">Preencha os campos abaixo.</p>
          </div>

          <div className="flex gap-4 w-full max-lg:flex-col">
            <div className="w-full">
              <input
                type="text"
                placeholder="Primeiro nome"
                className="w-full py-2 border-b-2 border-primary transition-all duration-150 focus:border-b-3 outline-none placeholder:italic bg-white/25 placeholder:text-gray-500 placeholder:text-xs"
                {...register("firstname", {
                  required: "Nome completo é obrigatório",
                })}
              />
              {errors.firstname && (
                <p
                  role="alert"
                  className="text-red-500 text-xs">
                  {errors.firstname.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder="Sobrenome"
                className="w-full py-2 border-b-2 border-primary transition-all duration-150 focus:border-b-3 outline-none placeholder:italic bg-white/25 placeholder:text-gray-500 placeholder:text-xs"
                {...register("lastname", {
                  required: "Sobrenome é obrigatório",
                })}
              />
              {errors.lastname && (
                <p
                  role="alert"
                  className="text-red-500 text-xs">
                  {errors.lastname.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-4 w-full max-lg:flex-col">
            <div className="w-full">
              <input
                type="text"
                placeholder="NIF"
                className="w-full py-2 border-b-2 border-primary transition-all duration-150 focus:border-b-3 outline-none bg-white/25 placeholder:text-gray-500 placeholder:text-xs placeholder:italic"
                {...register("nif", { required: "NIF é obrigatório" })}
              />
              {errors.nif && (
                <p className="text-red-500 text-xs">{errors.nif.message}</p>
              )}
            </div>

            <div className="w-full">
              <input
                type="tel"
                placeholder="Contacto telefónico"
                className="w-full py-2 border-b-2 border-primary transition-all duration-150 focus:border-b-3 outline-none bg-white/25 placeholder:text-gray-500 placeholder:text-xs placeholder:italic"
                {...register("phoneNumber", {
                  required: "Contacto telefónico é obrigatório",
                })}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full py-2 border-b-2 border-primary transition-all duration-150 focus:border-b-3 outline-none bg-white/25 placeholder:text-gray-500 placeholder:text-xs placeholder:italic"
              {...register("email", { required: "Email é obrigatório" })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          <div className="flex gap-4 w-full max-lg:flex-col">
            <div className="w-full">
              <input
                type="text"
                placeholder="Empresa"
                className="w-full py-2 border-b-2 border-primary transition-all duration-150 focus:border-b-3 outline-none bg-white/25 placeholder:text-gray-500 placeholder:text-xs placeholder:italic"
                {...register("enterprise", {
                  required: "Empresa é obrigatória",
                })}
              />
              {errors.enterprise && (
                <p className="text-red-500 text-xs">
                  {errors.enterprise.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder="Cargo"
                className="w-full py-2 border-b-2 border-primary transition-all duration-150 focus:border-b-3 outline-none bg-white/25 placeholder:text-gray-500 placeholder:text-xs placeholder:italic"
                {...register("jobPosition", {
                  required: "Cargo é obrigatório",
                })}
              />
              {errors.jobPosition && (
                <p className="text-red-500 text-xs">
                  {errors.jobPosition.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full">
            <div className="w-full py-2 rounded-md bg-white/25">
              <select
                {...register("country", { required: "País é obrigatório" })}
                className="w-full py-2 border-b-2 border-primary transition-all duration-150 focus:border-b-3 bg-white/25 placeholder:text-gray-500 text-xs outline-none cursor-pointer">
                <option
                  disabled
                  className="text-black"
                  value="">
                  Selecione o país
                </option>
                {options.map((option: { value: string; label: string }) => (
                  <option
                    key={option.value}
                    className="text-gray-700">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {errors.country && (
              <p className="text-red-500 text-xs">{errors.country.message}</p>
            )}
          </div>

          <div className="w-full flex flex-col gap-2">
            <h1>
              Selecione os pacotes que deseja adquirir
              <span className="ml-2 text-red-500">*</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 w-full">
              {packages.map((pack, index) => (
                <label
                  key={index}
                  className="flex flex-col hover:bg-gold-one/70 cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1 items-start p-4 rounded-md  gap-2 w-52 max-lg:w-full max-lg:max-w-xs bg-secondary">
                  <input
                    type="radio"
                    {...register("pack", {
                      required: "Pacote é obrigatório",
                    })}
                    value={pack.price}
                  />

                  <div className="flex flex-col gap-2">
                    <div>
                      <h1 className="font-semibold">{pack.name}</h1>
                      <h2 className="font-bold text-xl">{pack.price}</h2>
                    </div>
                    <p className="text-xs">{pack.description}</p>
                  </div>
                </label>
              ))}
            </div>

            {errors.pack && (
              <p className="text-red-500 text-xs">{errors.pack.message}</p>
            )}
          </div>

          <div className="w-full flex flex-col gap-4">
            <h1 className="text-sm">
              Selecione o método de pagamento
              <span className="ml-2 text-red-500">*</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 w-full">
              {paymentMethods.map((method, index) => (
                <label
                  key={index}
                  className="flex items-center w-fit gap-2 shadow bg-white rounded-md p-4 hover:bg-secondary/70 cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <input
                    type="radio"
                    value={method.name}
                    {...register("paymentMethod", {
                      required: "Método de pagamento é obrigatório",
                    })}
                  />
                  <span className="text-sm">{method.name}</span>

                  <Image
                    src={method.image}
                    alt="check"
                    width={200}
                    height={200}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                </label>
              ))}
            </div>

            {errors.paymentMethod && (
              <p className="text-red-500 text-xs">
                {errors.paymentMethod.message}
              </p>
            )}
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="w-full flex items-center mt-4">
              <input
                type="checkbox"
                className="w-4 h-4 accent-gold-one cursor-pointer"
                {...register("terms", {
                  required: "Aceitar os termos e condições é obrigatório",
                })}
              />
              <span className="text-xs ml-2">
                Aceitar os Termos e Condições da Global Services Corporation.
              </span>
            </label>

            {errors.terms && (
              <p className="text-red-500 text-xs">{errors.terms.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 w-full rounded-md bg-primary text-white hover:bg-transparent hover:text-primary duration-300 transition-colors border border-primary cursor-pointer font-semibold">
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
