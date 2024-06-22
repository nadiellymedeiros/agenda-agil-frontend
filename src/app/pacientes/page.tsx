'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { api } from '@/services/api'
import type { Patient } from '@/types/patient'
import { Plus, Search } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { CurrentDate } from './_components/current-date'
import { PatientCard } from './_components/patient-card'

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedPatients, setSelectedPatients] = useState(
    patients.map(() => false),
  )

  useEffect(() => {
    loadPatients()
  }, [])

  const loadPatients = async () => {
    try {
      setIsLoading(true)
      const { data } = await api.get<Patient[]>('/patients')
      setPatients(data)
    } catch {
      toast.error('Não foi possível carregar a relação de pacientes')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSelectAll = () => {
    const allSelected = selectedPatients.every(Boolean)
    setSelectedPatients(selectedPatients.map(() => !allSelected))
  }

  const handleCheckboxChange = (index: number) => {
    const newSelectedPatients = [...selectedPatients]
    newSelectedPatients[index] = !newSelectedPatients[index]
    setSelectedPatients(newSelectedPatients)
  }

  const handleEdit = (id: string) => {
    console.log(`Editar paciente com id: ${id}`)
  }

  // const handleDelete = (id: string) => {
  //   console.log(`Deletar paciente com id: ${id}`)
  // }

  const hasSelectedPatients = selectedPatients.some(Boolean)

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

        {isLoading && <span>Carregando...</span>}
        {!isLoading &&
          patients.map((patient, index) => (
            <PatientCard
              key={patient.id}
              data={patient}
              onEdit={() => handleEdit(patient.id)}
              checked={selectedPatients[index]}
              onCheckboxChange={() => handleCheckboxChange(index)}
            />
          ))}
      </div>

      <div className="relative flex w-full flex-row items-center gap-3">
        <Button
          type="submit"
          className={cn(
            'h-12 w-1/2 text-lg',
            !hasSelectedPatients ? 'hidden' : 'block',
          )}
          disabled={isLoading}
        >
          Enviar lembretes
        </Button>

        <Button
          variant="outline"
          className={cn(
            'h-12 w-1/2 text-lg',
            !hasSelectedPatients ? 'hidden' : 'block',
          )}
          onClick={() => setSelectedPatients(patients.map(() => false))}
        >
          Cancelar
        </Button>

        {!hasSelectedPatients && (
          <Link href="/pacientes/cadastro">
            <Button
              className={cn('absolute -bottom-8 right-0 rounded-full')}
              size="icon"
            >
              <Plus className="size-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}
