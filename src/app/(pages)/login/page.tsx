//"use client";

// import React, { useState } from "react";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const schema = z.object({
  email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
  password: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .min(1, "Senha é obrigatória"),
});

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<LoginFormInputs>({
  //   resolver: zodResolver(schema),
  // });

  // const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    // setShowPassword(!showPassword);
    console.log("mostrar senha");
  };

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    // Aqui você pode adicionar a lógica para fazer a autenticação, como chamar uma API
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

      <div className="erroLogin mt-10 hidden">
        <h3 className="text-[32px] text-[#FF6363] text-center mb-4">
          Algo está errado!
        </h3>
        <p className="font-bold  text-[#FF6363] text-center">
          Seu e-mail ou senha podem estar incorretos,
        </p>
        <p className=" text-center">verifique seus dados de acesso ou</p>
        <Link
          href="/recuperarSenha"
          className="text-[#6FBC85] underline text-center hover:text-green-600"
        >
          clique aqui para recuperar sua senha.
        </Link>
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
            // {...register("email")}
            placeholder="seuemail@email.com"
            className="mt-1 block w-full px-3 py-2 border-b border-gray-700 rounded-none shadow-none focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
          />
          {/* {errors.email && (
            <p className="mt-2 text-sm text-red-600">
              {errors.email.message?.toString()}
            </p>
          )} */}
        </div>
        <div className="mb-4 relative">
          <label
            htmlFor="password"
            className="block text-sm font-bold text-gray-700"
          >
            Senha
          </label>

          <div className="relative flex items-center">
            <input
              id="password"
              // type={showPassword ? "text" : "password"}
              // {...register("password")}
              placeholder="******"
              className="mt-1 block w-full px-3 py-2 border-b border-gray-700 rounded-none shadow-none focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
            />
            <div className="absolute right-0 inset-y-0 flex items-center pr-2">
              <button
                type="button"
                className="focus:outline-none"
                // onClick={togglePasswordVisibility}
              >
                <Eye
                  size={18}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                />
              </button>
            </div>
          </div>
          {/* {errors.password && (
            <p className="mt-2 text-sm text-red-600">
              {errors.password.message?.toString()}
            </p>
          )} */}

          <div className="mt-1 text-right">
            <a
              href="#"
              className="text-xs text-gray-400 hover:text-gray-700 underline"
            >
              Esqueci minha senha
            </a>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          style={{ height: "50px" }}
        >
          Entrar
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
};

export default Login;
