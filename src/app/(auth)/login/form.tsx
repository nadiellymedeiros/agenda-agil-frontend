'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const LoginFormSchema = z.object({
  email: z.string().email('Email inválido').min(1, 'Email é obrigatório'),
  password: z
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .min(1, 'Senha é obrigatória'),
})

type LoginFormData = z.infer<typeof LoginFormSchema>

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
  })

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  const onSubmit = () => {
    console.log('Submit')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <Label
          htmlFor="email"
          className={cn(errors.email && 'text-red-500', 'font-bold')}
        >
          E-mail
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="seuemail@email.com"
          className={cn(errors.email && 'border-red-500 focus:border-red-500')}
          {...register('email')}
        />
      </div>

      <div className="relative flex flex-col gap-1">
        <Label
          htmlFor="password"
          className={cn(errors.password && 'text-red-500', 'font-bold')}
        >
          Senha
        </Label>
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="******"
          className={cn(errors.email && 'border-red-500 focus:border-red-500')}
          {...register('password')}
        />

        <button
          type="button"
          className="absolute right-3 top-7"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <Eye className="size-4 text-gray-500 hover:text-gray-700" />
          ) : (
            <EyeOff className="size-4 text-gray-500 hover:text-gray-700" />
          )}
        </button>

        <Link
          href="/recuperarSenha"
          className="self-end text-xs text-muted-foreground underline hover:text-gray-800"
        >
          Esqueci minha senha
        </Link>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
        Entrar
      </Button>

      <div className="text-sm">
        <p className="text-muted-foreground">
          Não tem uma conta?{' '}
          <Link
            href="/cadastro"
            className="cursor-pointer text-green-500 hover:text-green-600"
          >
            Cadastre-se agora
          </Link>
        </p>
      </div>
    </form>
  )
}
