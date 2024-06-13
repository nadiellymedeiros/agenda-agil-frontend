// import React, { useState } from "react";

import React from "react";
import { z } from "zod";
import Image from "next/image";

const mensagemRecuperarSenha: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#6FBC85]">
      <div className="w-80">
        {" "}
        <h1 className="text-white font-bold text-center text-[32px]">
          Mensagem enviada para seu endereço de e-mail
        </h1>
      </div>
    </div>
  );
};

export default mensagemRecuperarSenha;
