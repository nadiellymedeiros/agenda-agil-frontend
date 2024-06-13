// import React, { useState } from "react";

import React from "react";
import { z } from "zod";
import Image from "next/image";

const schema = z.object({
  email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
});

interface LoginFormInputs {
  email: string;
}
export default function RecuperarSenha() {
  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center mt-8 min-h-screen">
      <Image
        src="/imagens/logo.png"
        alt="logo"
        width={150}
        height={150}
        className="mb-10"
      />

      <div className="erroLogin mt-10 w-80 p-6 ">
        <h3 className="text-[20px] text-[#FF6363] text-center mb-4 font-bold hidden">
          Digite um e-mail válido!
        </h3>

        <div>
          <p className=" text-center font-bold">Insira seu e-mail cadastrado</p>
          <p className="text-center">
            e enviaremos uma mensagem com sua nova senha
          </p>
        </div>
      </div>

      <form
        // onSubmit={handleSubmit(onSubmit)}
        className="w-80 p-6 bg-white rounded "
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-bold text-gray-700 "
          >
            e-mail
          </label>
          <input
            id="email"
            placeholder="seuemail@email.com"
            className="mt-1 block w-full px-3 py-2 border-b border-gray-700 rounded-none shadow-none focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          style={{ height: "50px" }}
        >
          Enviar
        </button>
        <div className="text-center text-sm mt-4">
          <p className=" text-gray-400">
            Não tem uma conta?{" "}
            <span className="text-[#6FBC85] hover:text-green-700 cursor-pointer">
              Cadastre-se agora
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
