import { ReactNode } from 'react'

interface ButtonProps {
  title: string
  icon: ReactNode
  variant: 'discord' | 'challenge'
}

export function Button({ title, icon, variant }: ButtonProps) {
  const discordStyle = `p-4 flex items-center justify-center gap-2 text-sm font-bold uppercase rounded bg-green-500 hover:bg-green-700 transition-colors`
  const challengeStyle = `p-4 flex items-center justify-center gap-2 text-sm text-blue-500 font-bold uppercase border border-blue-500 rounded hover:bg-blue-500 hover:text-gray-900 transition-colors`

  return (
    <a
      href=""
      className={variant === 'discord' ? discordStyle : challengeStyle}
    >
      {icon}
      {title}
    </a>
  )
}
