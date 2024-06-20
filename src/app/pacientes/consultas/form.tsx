import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Dot, Search, SquarePenIcon } from "lucide-react";
import Link from "next/link";

export default function ConsultaForm() {
  return (
    <>
      <div className="mx-auto mt-10">
        <div>
          <p className="text-sm">Hoje</p>
          <div className="flex">
            <p className="text-base font-semibold">Segunda </p>
            <Dot className="text-sm font-thin" />
            <p className="text-sm italic"> 19 Junho</p>
          </div>
        </div>

        <div className="flex">
          <Input
            id="shearch"
            type="shearch"
            placeholder="Pesquisar nome ou CPF"
          />
          <Search />
        </div>

        <div className="mt-4 flex">
          <Checkbox />
          <p className="ml-6">Selecionar tudo</p>
        </div>

        <div className="mt-8 flex flex-col gap-8">
          <Card className="flex w-[350px] flex-row items-start justify-between px-[20px] py-[10px]">
            <div>
              <Checkbox />
            </div>

            <div className="ml-6">
              <p className="text-base font-black">Amanda Ribeiro</p>
              <div className="flex gap-2">
                <p className="text-sm font-bold">CPF: </p>
                <p>045.852.741-01</p>
              </div>

              <div className="flex gap-2">
                <p className="text-sm font-bold">Consulta:</p>
                <p>19/06/2024 às 08h30</p>
              </div>
            </div>
            <div>
              <SquarePenIcon />
            </div>
          </Card>

          <Card className="flex w-[350px] flex-row items-start justify-between px-[20px] py-[10px]">
            <div>
              <Checkbox />
            </div>

            <div className="ml-6">
              <p className="text-base font-black">Amanda Ribeiro</p>
              <div className="flex gap-2">
                <p className="text-sm font-bold">CPF: </p>
                <p>045.852.741-01</p>
              </div>

              <div className="flex gap-2">
                <p className="text-sm font-bold">Consulta:</p>
                <p>19/06/2024 às 08h30</p>
              </div>
            </div>
            <div>
              <SquarePenIcon />
            </div>
          </Card>

          <Card className="flex w-[350px] flex-row items-start justify-between px-[20px] py-[10px]">
            <div>
              <Checkbox />
            </div>

            <div className="ml-6">
              <p className="text-base font-black">Amanda Ribeiro</p>
              <div className="flex gap-2">
                <p className="text-sm font-bold">CPF: </p>
                <p>045.852.741-01</p>
              </div>

              <div className="flex gap-2">
                <p className="text-sm font-bold">Consulta:</p>
                <p>19/06/2024 às 08h30</p>
              </div>
            </div>
            <div>
              <SquarePenIcon />
            </div>
          </Card>
        </div>

        <div className="mt-4 flex flex-col items-center justify-center md:flex-row md:gap-10">
          <Button
            type="submit"
            className="m-4 h-[50px] w-11/12 rounded px-2 py-4 text-lg md:w-[240px]"
          >
            Cadastrar
          </Button>
          <Link
            href="/"
            className="flex h-[50px] w-11/12 items-center justify-center rounded border-2 border-solid border-gray-500 text-lg md:w-[240px]"
          >
            Cancelar
          </Link>
        </div>
      </div>
    </>
  );
}
