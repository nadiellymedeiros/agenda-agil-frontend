import { Dot } from 'lucide-react'
import moment from 'moment'
import 'moment/locale/pt-br'

export const CurrentDate = () => {
  const weekDay = moment().format('dddd')
  const dayAndMonth = moment().format('D MMMM')

  return (
    <div className="flex flex-col">
      <p className="text-sm">Hoje</p>
      <div className="flex items-center">
        <p className="text-base font-semibold">{weekDay}</p>
        <Dot className="text-sm font-thin" />
        <p className="text-sm italic">{dayAndMonth}</p>
      </div>
    </div>
  )
}
