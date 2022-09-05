import { Form } from '../Components/Form/Form'
import { Logo } from '../Components/Logo'

export function Subscribe() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-blur bg-cover bg-no-repeat ">
      <div className="w-full max-w-[1100px] mt-20 mx-auto flex items-center justify-between ">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-10 text-[2.5rem] leading-tight ">
            Construa uma{' '}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 border border-gray-500 rounded bg-gray-700">
          <strong className="block mb-6 text-2xl">
            Inscreva-se gratuitamente
          </strong>

          <Form />
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" alt="" className="mt-10" />
    </div>
  )
}
