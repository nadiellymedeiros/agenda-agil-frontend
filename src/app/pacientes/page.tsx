'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Plus, Search } from 'lucide-react'
import Link from 'next/link'
import { CurrentDate } from './_components/current-date'
import { PatientCard } from './_components/patient-card'

export default function PatientsPage() {
  const handleEdit = () => {
    console.log('Editar')
  }

  return (
    <div className="container mt-10 flex w-full max-w-md flex-col gap-4">
      <CurrentDate />

      <div className="relative flex items-center">
        <Input id="search" type="search" placeholder="Pesquisar nome ou CPF" />
        <Search className="absolute right-0 size-4" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Checkbox />
          <p>Selecionar tudo</p>
        </div>

        <PatientCard
          id="1"
          name="Amanda Ribeiro"
          cpf="045.852.741-01"
          consultationDate={new Date()}
          onEdit={handleEdit}
        />

        <PatientCard
          id="1"
          name="Amanda Ribeiro"
          cpf="045.852.741-01"
          consultationDate={new Date()}
          onEdit={handleEdit}
        />

        <PatientCard
          id="1"
          name="Amanda Ribeiro"
          cpf="045.852.741-01"
          consultationDate={new Date()}
          onEdit={handleEdit}
        />
      </div>

      <div className="relative flex w-full flex-row items-center gap-3">
        <Button type="submit" className="h-12 w-1/2 text-lg">
          Enviar lembretes
        </Button>

        <Button variant="outline" className="h-12 w-1/2 text-lg">
          Cancelar
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
  )
}
