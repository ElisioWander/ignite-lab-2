import { CircleNotch } from 'phosphor-react'

export function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center ">
      <CircleNotch size={48} className="animate-spin" />
    </div>
  )
}
