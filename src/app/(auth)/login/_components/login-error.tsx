import Link from 'next/link'

export const LoginError = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-center">
      <h3 className="text-3xl text-red-500">Algo está errado!</h3>
      <p className="font-bold text-red-500">
        Seu e-mail ou senha podem estar incorretos,
      </p>
      <p className="text-center">
        verifique seus dados de acesso ou
        <Link
          href="/recuperarSenha"
          className="text-green-500 underline hover:text-green-600"
        >
          clique aqui para recuperar sua senha.
        </Link>
      </p>
    </div>
  )
}
