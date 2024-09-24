import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import Image from 'next/image'

import ItaloImage from '@/assets/projects/italo.jpeg'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function About() {
  return (
    <div className="bg-mainTheme text-gray-50 min-h-screen flex flex-col justify-between">
      <Navbar />
      <main>
        <div className="flex justify-center gap-8 pb-8">
          <div>
            <div className="w-40 h-40 rounded-full overflow-hidden">
              <Image
                src={ItaloImage}
                alt="Italo Vieira"
                width={250}
                height={250}
                className="rounded-full"
              />
            </div>
            <div className="flex justify-center pt-2">
              <div className="flex gap-6">
                <Link
                  href="https://github.com/italolvv04"
                  target="_blank"
                  className="text-gray-500 hover:text-gray-50"
                >
                  <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/italo-vieira"
                  target="_blank"
                  className="text-gray-500 hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=5562984353561"
                  className="text-gray-500 hover:text-green-500"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-2xl">Sobre mim</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-center leading-tight ">
                      Me chamo Italo Vieira, tenho 25 anos, sou desenvolvedor de
                      software há mais de 4 anos. Durante minha trajetória,
                      trabalhei com diversas tecnologias, como React.js,
                      Next.js, Node.js, TypeScript e React Native, entre outras.
                      Como desenvolvedor front-end, busco sempre proporcionar a
                      melhor experiência ao usuário. Tenho uma mentalidade de
                      aprendizado contínuo, sempre buscando me aperfeiçoar,
                      tanto profissionalmente quanto pessoalmente. Atualmente,
                      moro em Goianésia - GO com minha esposa. Nos momentos
                      livres, gosto de estar com a família, jogar um bom jogo e,
                      claro, assistir ao meu time do coração, o Corinthians 🖤🤍
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-2xl">Formação Educacional</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <h1>Graduação em Engenharia de Software</h1>
                    <span className="text-gray-400">
                      UniEVANGÉLICA - Universidade Evangélica de Goiás
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-2xl">Carreira</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <h1>Developer Front End</h1>
                    <span className="text-gray-400">Empresa: Getrak</span>
                    <span className="text-gray-400">
                      Tecnologias: React, Vue.js, Typescript, Node, Docker,
                      entre outras.
                    </span>
                    <span className="text-gray-400">
                      Tempo de duração: 2 anos e 7 meses
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <h1>Developer Front End</h1>
                    <span className="text-gray-400">
                      Empresa: iTER IoT Solutions
                    </span>
                    <span className="text-gray-400">
                      Tecnologias: React, Typescript | Atomic Design.
                    </span>
                    <span className="text-gray-400">
                      Tempo de duração: 9 meses
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <h1>Full Stack Engineer - Trainee </h1>
                    <span className="text-gray-400">
                      Empresa: Squadra Tecnologia
                    </span>
                    <span className="text-gray-400">
                      Tecnologias: React, Angular, .NET.
                    </span>
                    <span className="text-gray-400">
                      Tempo de duração: 1 ano e 3 meses
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Faça o download do meu CV
                </CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-center">
                  Caso queira saber mais sobre minha trajetória profissional,
                  faça o download do meu currículo.
                </span>
                <div className="space-y-4 pt-4 flex justify-center">
                  <a href="/assets/curriculo-italo-vieira.pdf" download>
                    <Button>Download</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
