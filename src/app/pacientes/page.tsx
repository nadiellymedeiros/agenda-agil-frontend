"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CurrentDate } from "./_components/current-date";
import { PatientCard } from "./_components/patient-card";

const patientsData = [
  {
    id: "1",
    name: "Amanda Ribeiro",
    cpf: "045.852.741-01",
    consultationDate: new Date(),
  },
  {
    id: "2",
    name: "João Silva",
    cpf: "123.456.789-00",
    consultationDate: new Date(),
  },
  {
    id: "3",
    name: "Maria Souza",
    cpf: "987.654.321-99",
    consultationDate: new Date(),
  },
];

export default function PatientsPage() {
  const [selectedPatients, setSelectedPatients] = useState(
    patientsData.map(() => false),
  );

  const handleSelectAll = () => {
    const allSelected = selectedPatients.every(Boolean);
    setSelectedPatients(selectedPatients.map(() => !allSelected));
  };

  const handleCheckboxChange = (index: any) => {
    const newSelectedPatients = [...selectedPatients];
    newSelectedPatients[index] = !newSelectedPatients[index];
    setSelectedPatients(newSelectedPatients);
  };

  const handleEdit = (id: string) => {
    console.log(`Editar paciente com id: ${id}`);
  };

  const hasSelectedPatients = selectedPatients.some(Boolean);

  return (
    <div className="container mt-10 flex w-full max-w-md flex-col gap-4">
      <CurrentDate />

      <div className="relative flex items-center">
        <Input id="search" type="search" placeholder="Pesquisar CPF" />
        <Search className="absolute right-0 size-4" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Checkbox
            onCheckedChange={handleSelectAll}
            checked={selectedPatients.every(Boolean)}
          />
          <p>Selecionar tudo</p>
        </div>

        {patientsData.map((patient, index) => (
          <PatientCard
            key={patient.id}
            id={patient.id}
            name={patient.name}
            cpf={patient.cpf}
            consultationDate={patient.consultationDate}
            onEdit={() => handleEdit(patient.id)}
            checked={selectedPatients[index]}
            onCheckboxChange={() => handleCheckboxChange(index)}
          />
        ))}
      </div>

      <div className="relative flex w-full flex-row items-center gap-3">
        <Button
          type="submit"
          className="h-12 w-1/2 text-lg"
          disabled={!hasSelectedPatients}
        >
          Enviar lembretes
        </Button>

        <Button variant="outline" className="h-12 w-1/2 text-lg">
          <Link href="/">Cancelar</Link>
        </Button>

        <Link href="/pacientes/cadastro">
          <Button
            className="absolute bottom-16 right-0 rounded-full"
            size="icon"
          >
            <Plus className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
