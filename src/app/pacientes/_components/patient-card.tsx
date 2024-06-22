'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import type { Patient } from '@/types/patient'
import { SquarePenIcon } from 'lucide-react'

type PatientCardProps = {
  data: Patient
  onEdit: (patient: string) => void
  checked: boolean
  onCheckboxChange: () => void
}

export const PatientCard = ({
  data,
  onEdit,
  checked,
  onCheckboxChange,
}: PatientCardProps) => {
  return (
    <Card className="flex w-full flex-row items-start justify-between p-4">
      <Checkbox checked={checked} onCheckedChange={onCheckboxChange} />

      <div className="flex flex-col gap-1">
        <p className="text-base font-black">
          {data.name} {data.surname}
        </p>
        <div className="flex items-center gap-1">
          <span className="text-sm font-bold">Contato: </span>
          <p>{data.cellphone}</p>
        </div>
      </div>

      <Button
        className="size-8 p-0"
        variant="ghost"
        onClick={() => onEdit(data.id)}
      >
        <SquarePenIcon className="size-4" />
      </Button>
    </Card>
  )
}
