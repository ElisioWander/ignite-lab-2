import { CheckCircle, Lock } from 'phosphor-react'
import { format, isPast } from 'date-fns'
import { Link, useParams } from 'react-router-dom'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()

  const isLessonActive = props.slug === slug

  const isLessonAvalible = isPast(props.availableAt)
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    },
  )

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={`p-4 mt-2 border border-gray-500 rounded group-hover:border-green-700 ${
          isLessonActive ? 'bg-green-500 group-hover:border-gray-300 ' : ''
        }`}
      >
        <header className="flex items-center justify-between">
          {isLessonAvalible ? (
            <span
              className={`flex items-center gap-2 text-sm text-blue-500 font-medium ${
                isLessonActive ? 'text-white-100' : ''
              }`}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={`py-[0.125rem] px-2 text-xs text-white font-bold border border-green-300 rounded ${
              isLessonActive ? 'text-white-100 ' : ''
            }`}
          >
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong
          className={`block mt-5 text-gray-200 ${
            isLessonActive ? 'text-white-100' : ''
          }`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  )
}
