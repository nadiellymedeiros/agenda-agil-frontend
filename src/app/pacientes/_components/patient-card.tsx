"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { SquarePenIcon } from "lucide-react";
import moment from "moment";

type PatientCardProps = {
  id: string;
  name: string;
  cpf: string;
  consultationDate: Date;
  onEdit: (patient: string) => void;
  checked: boolean;
  onCheckboxChange: () => void;
};

export const PatientCard = ({
  id,
  name,
  cpf,
  consultationDate,
  onEdit,
  checked,
  onCheckboxChange,
}: PatientCardProps) => {
  const consultation = moment(consultationDate).format("DD/MM/YYYY");

  return (
    <Card className="flex w-full flex-row items-start gap-6 px-5 py-3">
      <Checkbox checked={checked} onCheckedChange={onCheckboxChange} />

      <div className="flex flex-col gap-1">
        <p className="text-base font-black">{name}</p>
        <p className="text-sm font-bold">CPF: {cpf}</p>
        <p className="text-sm font-bold">Consulta: {consultation}</p>
      </div>

      <Button className="size-8 p-0" variant="ghost" onClick={() => onEdit(id)}>
        <SquarePenIcon className="size-4" />
      </Button>
    </Card>
  );
};
