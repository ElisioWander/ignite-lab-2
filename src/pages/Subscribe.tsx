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

          <form className="w-full flex flex-col gap-2">
            <input
              type="text"
              placeholder="Seu nome completo"
              className="h-14 px-5 rounded bg-gray-900"
            />
            <input
              type="email"
              placeholder="Digite seu email"
              className="h-14 px-5 rounded bg-gray-900"
            />

            <button
              type="submit"
              className="mt-4 py-4 text-sm font-bold uppercase rounded bg-green-500 hover:bg-green-700 transition-colors "
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" alt="" className="mt-10" />
    </div>
  )
}
