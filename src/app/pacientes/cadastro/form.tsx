'use client'

import { SucessMessage } from '@/app/_components/success-message'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { api } from '@/services/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHookFormMask } from 'use-mask-input'
import { z } from 'zod'

const RegisterFormSchema = z.object({
  email: z.string().email().min(1),
  name: z.string().min(1),
  surname: z.string().min(1),
  birthDate: z.string().min(1),
  cellphone: z.string().min(1),
  phone: z.string().optional(),
  cep: z.string().optional(),
  address: z.string().min(1),
  number: z.string().min(1),
  complement: z.string().optional(),
  neighborhood: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1).max(2),
})

type RegisterFormData = z.infer<typeof RegisterFormSchema>

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterFormSchema),
  })

  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false)

  const registerWithMask = useHookFormMask(register)

  const hasErrors = Object.keys(errors).length > 0

  const onSubmit = async (data: RegisterFormData) => {
    await api.post('/patients', {
      ...data,
      birthDate: new Date(data.birthDate),
    })
    await onSuccess()
  }

  const onSuccess = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setShowSuccessMessage(true)

    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 2000)

    reset()
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center p-4">
      {showSuccessMessage && (
        <SucessMessage message="Paciente cadastrado com sucesso" />
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-5xl flex-col gap-6"
      >
        <div className="flex flex-col">
          <p
            className={`text-[40px] ${hasErrors ? 'text-black' : 'text-green-600'}`}
          >
            Cadastre aqui
          </p>
          <span
            className={`text-[40px] font-black ${hasErrors ? 'text-black' : 'text-green-600'}`}
          >
            novo paciente!
          </span>
          <p
            className={`text-sm md:w-[430px] ${hasErrors ? 'font-bold text-red-500' : 'text-green-600'}`}
          >
            Lembre-se de preencher os campos obrigatórios
          </p>
          <p
            className={`text-sm md:w-[430px] ${hasErrors ? 'text-black' : 'text-green-600'}`}
          >
            corretamente, para que você possa aproveitar ao máximo a plataforma
            Agenda Ágil!
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-3">
          <div className="flex flex-col gap-1 md:w-full">
            <Label
              htmlFor="name"
              className={cn(errors.name && 'text-red-500', 'font-bold')}
            >
              Nome*
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Nome do Cliente"
              className={cn(
                errors.name && 'border-red-500 focus:border-red-500',
              )}
              {...register('name')}
            />
          </div>

          <div className="flex flex-col gap-1 md:w-full">
            <Label
              htmlFor="surname"
              className={cn(errors.surname && 'text-red-500', 'font-bold')}
            >
              Sobrenome*
            </Label>
            <Input
              id="surname"
              type="text"
              placeholder="Sobrenome do Cliente"
              className={cn(
                errors.email && 'border-red-500 focus:border-red-500',
              )}
              {...register('surname')}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 lg:w-1/2">
          <Label
            htmlFor="birthDate"
            className={cn(errors.birthDate && 'text-red-500', 'font-bold')}
          >
            Data de nascimento*
          </Label>
          <Input
            id="birthDate"
            type="date"
            placeholder="DD/MM/AAAA"
            className={cn(
              errors.birthDate && 'border-red-500 focus:border-red-500',
            )}
            {...register('birthDate')}
          />
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-3">
          <div className="flex flex-col gap-1 lg:w-full">
            <Label
              htmlFor="email"
              className={cn(errors.email && 'text-red-500', 'font-bold')}
            >
              E-mail*
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="seuemail@email.com"
              className={cn(
                errors.email && 'border-red-500 focus:border-red-500',
              )}
              {...register('email')}
            />
          </div>

          <div className="flex flex-col gap-1 lg:w-full">
            <Label
              htmlFor="cellphone"
              className={cn(errors.cellphone && 'text-red-500', 'font-bold')}
            >
              Celular*
            </Label>
            <Input
              id="cellphone"
              type="text"
              placeholder="(DDD) 99999-9999"
              className={cn(
                errors.cellphone && 'border-red-500 focus:border-red-500',
              )}
              {...registerWithMask('cellphone', ['(99) 99999-9999'])}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 lg:w-1/2">
          <Label htmlFor="phone" className="font-bold">
            Telefone
          </Label>
          <Input
            id="phone"
            type="text"
            placeholder="(DDD) 99999-9999 "
            {...registerWithMask('phone', ['(99) 99999-9999'])}
          />
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-3">
          <div className="flex flex-col gap-1 lg:w-full lg:max-w-36">
            <Label htmlFor="cep" className="font-bold">
              CEP
            </Label>
            <Input id="cep" type="number" placeholder="00000-000" />
          </div>

          <div className="flex flex-col gap-1 lg:w-full lg:max-w-md">
            <Label
              htmlFor="address"
              className={cn(errors.address && 'text-red-500', 'font-bold')}
            >
              Endereço*
            </Label>
            <Input
              id="address"
              type="text"
              placeholder="Avenida, Rua, Travessa"
              className={cn(
                errors.address && 'border-red-500 focus:border-red-500',
              )}
              {...register('address')}
            />
          </div>

          <div className="flex w-full items-center gap-3 lg:w-2/5">
            <div className="flex w-1/2 flex-col gap-1">
              <Label
                htmlFor="number"
                className={cn(errors.number && 'text-red-500', 'font-bold')}
              >
                Numero*
              </Label>
              <Input
                id="number"
                type="number"
                placeholder="0000"
                className={cn(
                  errors.number && 'border-red-500 focus:border-red-500',
                )}
                {...register('number')}
              />
            </div>

            <div className="flex w-1/2 flex-col gap-1">
              <Label htmlFor="complement" className="font-bold">
                Complemento
              </Label>
              <Input
                id="complement"
                type="text"
                placeholder="Casa/Apto"
                {...register('complement')}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-3">
          <div className="flex flex-col gap-1 lg:w-1/2">
            <Label
              htmlFor="neighborhood"
              className={cn(errors.neighborhood && 'text-red-500', 'font-bold')}
            >
              Bairro*
            </Label>
            <Input
              id="neighborhood"
              type="text"
              placeholder="Bairro"
              className={cn(
                errors.neighborhood && 'border-red-500 focus:border-red-500',
              )}
              {...register('neighborhood')}
            />
          </div>

          <div className="flex items-center gap-3 lg:flex-1">
            <div className="flex w-full flex-col gap-1">
              <Label
                htmlFor="city"
                className={cn(errors.city && 'text-red-500', 'font-bold')}
              >
                Cidade
              </Label>
              <Input
                id="city"
                type="text"
                placeholder="Cidade"
                className={cn(
                  errors.city && 'border-red-500 focus:border-red-500',
                )}
                {...register('city')}
              />
            </div>

            <div className="flex w-16 flex-col gap-1">
              <Label
                htmlFor="state"
                className={cn(errors.state && 'text-red-500', 'font-bold')}
              >
                Estado*
              </Label>
              <Input
                id="state"
                type="text"
                placeholder="AC"
                className={cn(
                  errors.state && 'border-red-500 focus:border-red-500',
                )}
                {...register('state')}
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 lg:max-w-2xl lg:flex-row lg:gap-10 lg:self-center">
          <Button type="submit" className="lg:w-full" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
            Cadastrar
          </Button>

          <Link href="/pacientes" className="w-full">
            <Button variant="outline" className="w-full">
              Cancelar
            </Button>
          </Link>
        </div>
      </form>
    </div>
  )
}
