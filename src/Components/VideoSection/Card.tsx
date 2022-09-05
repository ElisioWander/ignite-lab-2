import { CaretRight } from 'phosphor-react'
import { ReactNode } from 'react'

interface CardProps {
  icon: ReactNode
  title: string
  content: string
}

export function Card({ icon, title, content }: CardProps) {
  return (
    <a
      href=""
      className="flex items-stretch gap-6 overflow-hidden bg-gray-700 rounded hover:scale-105 transition-all "
    >
      <div className="h-full p-6 flex items-center bg-green-700 ">{icon}</div>
      <div className="py-6 leading-relaxed">
        <strong className="text-xl">{title}</strong>
        <p className="mt-2 text-sm text-gray-200">{content}</p>
      </div>
      <div className="h-full p-6 flex items-center">
        <CaretRight />
      </div>
    </a>
  )
}
