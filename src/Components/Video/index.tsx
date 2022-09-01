import {
  DiscordLogo,
  FileArrowDown,
  ImageSquare,
  Lightning,
} from 'phosphor-react'
import { Button } from '../Button'
import { Card } from './Card'
import { DefaultUi, Player, Youtube } from '@vime/react'

import '@vime/core/themes/default.css'

export function Video() {
  return (
    <div className="flex-1 ">
      <div className="flex justify-center bg-black">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video ">
          <Player>
            <Youtube videoId="nDLftuZfqK0" />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto p-8 ">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Aula 01 - Abertura do Ignite Lab
            </h1>

            <p className="mt-4 text-gray-200 leading-relaxed">
              Nessa aula vamos dar início ao projeto criando a estrutura base da
              aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também
              realizar o setup do nosso projeto no GraphCMS criando as entidades
              da aplicação e integrando a API GraphQL gerada pela plataforma no
              nosso front-end utilizando Apollo Client.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <img
                src="https://github.com/diego3g.png"
                alt=""
                className="w-16 h-16 border-2 border-blue-500 rounded-full"
              />

              <div className="leading-relaxed">
                <strong className="block text-2xl font-bold">
                  Diego Fernandes
                </strong>
                <span className="block text-sm text-gray-200">
                  CTO @Rocketseat
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Button
              title="Comunidade do discord"
              icon={<DiscordLogo size={22} />}
              variant="discord"
            />
            <Button
              title="Acesse o desafio"
              icon={<Lightning size={22} />}
              variant="challenge"
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 ">
          <Card
            icon={<FileArrowDown size={40} />}
            title="Material complementar"
            content="Acesse o material complementar para acelerar o seu desenvolvimento"
          />
          <Card
            icon={<ImageSquare size={40} />}
            title="Wallpapers exclusivos"
            content="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
          />
        </div>
      </div>
    </div>
  )
}
