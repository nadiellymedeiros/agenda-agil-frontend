"use client";

import { SucessMessage } from "@/app/_components/success-message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { z } from "zod";

const RegisterFormSchema = z.object({
  email: z.string().email().min(1),
  name: z.string().min(1),
  surname: z.string().min(1),
  birthday: z.string().min(1),
  cellphone: z.string().min(1),
  phone: z.string().optional(),
  cep: z.string().optional(),
  address: z.string().min(1),
  number: z.string().min(1),
  complement: z.string().optional(),
  neighborhood: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1).max(2),
});

type RegisterFormData = z.infer<typeof RegisterFormSchema>;

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const hasErrors = Object.keys(errors).length > 0;

  const onSubmit = async (data: RegisterFormData) => {
    const formattedData = {
      ...data,
      birthday: new Date(data.birthday),
    };

    console.log("Submit", formattedData);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);

    reset();
  };

  return (
    <div className="m-auto w-11/12 md:m-auto md:flex md:w-auto md:flex-col">
      <div>
        {showSuccessMessage && (
          <div className="mb-4">
            <SucessMessage message="Paciente cadastrado com sucesso" />
          </div>
        )}
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-8 mt-8 w-full md:w-[872px]"
        >
          <div className="mt-8 flex w-full flex-col">
            <div>
              <p
                className={`text-[40px] ${hasErrors ? "text-black" : "text-green-600"}`}
              >
                Cadastre aqui
              </p>
              <span
                className={`text-[40px] font-black ${hasErrors ? "text-black" : "text-green-600"}`}
              >
                novo paciente!
              </span>
            </div>
            <div className="mt-4">
              <p
                className={`mb-0 text-[14px] md:w-[430px] ${hasErrors ? "font-bold text-red-500" : "text-green-600"}`}
              >
                Lembre-se de preencher os campos obrigatórios
              </p>
              <p
                className={`mb-8 text-[14px] md:w-[430px] ${hasErrors ? "text-black" : "text-green-600"}`}
              >
                corretamente, para que você possa aproveitar ao máximo a
                plataforma Agenda Ágil!
              </p>
            </div>
          </div>

          <div className="md:flex md:justify-between">
            <div className="md:w-[430px]">
              <Label
                htmlFor="name"
                className={cn(errors.name && "text-red-500", "font-bold")}
              >
                Nome*
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Nome do Cliente"
                className={cn(
                  errors.name && "border-red-500 focus:border-red-500",
                )}
                {...register("name")}
              />
            </div>
            <div className="md:w-[430px]">
              <Label
                htmlFor="surname"
                className={cn(errors.surname && "text-red-500", "font-bold")}
              >
                Sobrenome*
              </Label>
              <Input
                id="surname"
                type="text"
                placeholder="Sobrenome do Cliente"
                className={cn(
                  errors.email && "border-red-500 focus:border-red-500",
                )}
                {...register("surname")}
              />
            </div>
          </div>

          <div className="mt-4 md:w-[430px]">
            <Label
              htmlFor="birthday"
              className={cn(errors.birthday && "text-red-500", "font-bold")}
            >
              Data de nascimento*
            </Label>
            <Input
              id="birthday"
              type="date"
              placeholder="DD/MM/AAAA"
              className={cn(
                errors.birthday && "border-red-500 focus:border-red-500",
              )}
              {...register("birthday")}
            />
          </div>

          <div className="mt-4 md:flex md:justify-between">
            <div className="md:w-[430px]">
              <Label
                htmlFor="email"
                className={cn(errors.email && "text-red-500", "font-bold")}
              >
                E-mail*
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seuemail@email.com"
                className={cn(
                  errors.email && "border-red-500 focus:border-red-500",
                )}
                {...register("email")}
              />
            </div>
            <div className="md:w-[430px]">
              <Label
                htmlFor="cellphone"
                className={cn(errors.cellphone && "text-red-500", "font-bold")}
              >
                Celular*
              </Label>
              <InputMask
                mask="(99) 99999-9999"
                id="cellphone"
                type="text"
                placeholder="(DDD) 99999-9999"
                className={cn(
                  errors.cellphone && "border-red-500 focus:border-red-500",
                )}
                {...register("cellphone")}
              >
                {(inputProps: any) => <Input {...inputProps} />}
              </InputMask>
            </div>
          </div>

          <div className="mt-4 md:w-[430px]">
            <Label htmlFor="phone">Telefone</Label>
            <InputMask
              mask="(99) 99999-9999"
              id="phone"
              type="text"
              placeholder="(DDD) 99999-9999 "
              {...register("phone")}
            >
              {(inputProps: any) => <Input {...inputProps} />}
            </InputMask>
          </div>

          <div className="mt-4 md:flex md:justify-between">
            <div className="md:w-[168px]">
              <Label htmlFor="cep">CEP</Label>
              <Input id="cep" type="number" placeholder="00000-000" />
            </div>
            <div className="w-[344px]">
              <Label
                htmlFor="address"
                className={cn(errors.address && "text-red-500", "font-bold")}
              >
                Endereço*
              </Label>
              <Input
                id="address"
                type="text"
                placeholder="Avenida, Rua, Travessa"
                className={cn(
                  errors.address && "border-red-500 focus:border-red-500",
                )}
                {...register("address")}
              />
            </div>

            <div className="flex justify-between md:justify-between">
              {" "}
              <div className="w-[167px] md:mr-2">
                <Label
                  htmlFor="number"
                  className={cn(errors.number && "text-red-500", "font-bold")}
                >
                  Numero*
                </Label>
                <Input
                  id="number"
                  type="number"
                  placeholder="0000"
                  className={cn(
                    errors.number && "border-red-500 focus:border-red-500",
                  )}
                  {...register("number")}
                />
              </div>
              <div className="w-[168px]">
                <Label htmlFor="complement">Complemento</Label>
                <Input
                  id="complement"
                  type="text"
                  placeholder="Casa/Apto"
                  {...register("complement")}
                />
              </div>
            </div>
          </div>

          <div className="mt-4 md:flex md:justify-between">
            <div className="md:w-[432px]">
              <Label
                htmlFor="neighborhood"
                className={cn(
                  errors.neighborhood && "text-red-500",
                  "font-bold",
                )}
              >
                Bairro*
              </Label>
              <Input
                id="neighborhood"
                type="text"
                placeholder="Bairro"
                className={cn(
                  errors.neighborhood && "border-red-500 focus:border-red-500",
                )}
                {...register("neighborhood")}
              />
            </div>

            <div className="flex justify-between md:justify-between">
              <div className="mr-2 w-[342px]">
                <Label
                  htmlFor="city"
                  className={cn(errors.city && "text-red-500", "font-bold")}
                >
                  Cidade
                </Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Cidade"
                  className={cn(
                    errors.city && "border-red-500 focus:border-red-500",
                  )}
                  {...register("city")}
                />
              </div>
              <div className="w-[68px]">
                <Label
                  htmlFor="state"
                  className={cn(errors.state && "text-red-500", "font-bold")}
                >
                  Estado*
                </Label>
                <Input
                  id="state"
                  type="text"
                  placeholder="AC"
                  className={cn(
                    errors.state && "border-red-500 focus:border-red-500",
                  )}
                  {...register("state")}
                />
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col items-center justify-center md:flex-row md:gap-10">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="m-4 h-[50px] w-11/12 rounded px-2 py-4 text-lg md:w-[240px]"
            >
              {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
              Cadastrar
            </Button>

            <Button
              variant="outline"
              className="flex h-[50px] w-11/12 text-lg md:w-[240px]"
            >
              <Link href="/">Cancelar</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
