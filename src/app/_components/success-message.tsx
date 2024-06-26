type SuccessMessageProps = {
  message: string
}

export const SucessMessage = ({ message }: SuccessMessageProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-balance bg-green-400">
      <h1 className="max-w-sm text-center text-3xl font-bold text-white">
        {message}
      </h1>
    </div>
  )
}
