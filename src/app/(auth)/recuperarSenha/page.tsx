// import React, { useState } from "react";

// import { z } from 'zod'

// const schema = z.object({
//   email: z.string().email('Email inválido').min(1, 'Email é obrigatório'),
// })

// interface LoginFormInputs {
//   email: string
// }
export default function RecuperarSenha() {
  // const onSubmit = (data: LoginFormInputs) => {
  //   console.log(data)
  // }

  return (
    <div className="mt-8 flex min-h-screen flex-col items-center">
      {/* <Image
        src="/imagens/logo.png"
        alt="logo"
        width={150}
        height={150}
        className="mb-10"
      /> */}

      <div className="mt-10 w-80 p-6">
        <h3 className="mb-4 hidden text-center text-[20px] font-bold text-[#FF6363]">
          Digite um e-mail válido!
        </h3>

        <div>
          <p className="text-center font-bold">Insira seu e-mail cadastrado</p>
          <p className="text-center">
            e enviaremos uma mensagem com sua nova senha
          </p>
        </div>
      </div>

      <form
        // onSubmit={handleSubmit(onSubmit)}
        className="w-80 rounded bg-white p-6"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-bold text-gray-700"
          >
            e-mail
          </label>
          <input
            id="email"
            placeholder="seuemail@email.com"
            className="mt-1 block w-full rounded-none border-b border-gray-700 px-3 py-2 shadow-none focus:border-green-600 focus:outline-none focus:ring-green-600 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          style={{ height: '50px' }}
        >
          Enviar
        </button>
        <div className="mt-4 text-center text-sm">
          <p className="text-gray-400">
            Não tem uma conta?{' '}
            <span className="cursor-pointer text-[#6FBC85] hover:text-green-700">
              Cadastre-se agora
            </span>
          </p>
        </div>
      </form>
    </div>
  )
}
