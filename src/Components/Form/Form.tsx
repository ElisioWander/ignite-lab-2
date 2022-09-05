import { useMutation } from '@apollo/client'
import { CircleNotch } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CREATE_SUBSCRIBER_MUTATION } from './Mutation'

export function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION,
  )

  const isFieldsEmpty = loading || name.length === 0 || email.length === 0

  function handleGetInputNameValue(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function handleGetInputEmailValue(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email,
      },
    })

    navigate('/event')
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
      <input
        type="text"
        placeholder="Seu nome completo"
        className="h-14 px-5 rounded bg-gray-900"
        onChange={handleGetInputNameValue}
      />
      <input
        type="email"
        placeholder="Digite seu email"
        className="h-14 px-5 rounded bg-gray-900"
        onChange={handleGetInputEmailValue}
      />

      <button
        type="submit"
        className="mt-4 py-4 flex items-center justify-center text-sm font-bold uppercase rounded bg-green-500 hover:bg-green-700 transition-colors disabled:bg-green-700 disabled:cursor-not-allowed "
        disabled={isFieldsEmpty}
      >
        {loading ? (
          <CircleNotch size={20} className="animate-spin" />
        ) : (
          'Garantir minha vaga'
        )}
      </button>
    </form>
  )
}
