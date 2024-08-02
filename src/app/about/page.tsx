
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code } from 'lucide-react'
import { Metadata } from 'next'
import Header from './components/headerAbout/header'
export const metadata: Metadata = {
  description: "descrição about",
  title: "Sobre",
}

const Page = () => {
  return (
    <>
      <Header />
    <Card>
      <CardHeader>
        <CardTitle>
            Sobre mim

          </CardTitle>
          <CardDescription>
          <div className="flex gap-2">
            <Code />
            <span>Developer fron-end</span>
          </div>
          </CardDescription>
      </CardHeader>
      <CardContent>
          <div className="space-y-4">
            <p className="indent-2 ">
              Sou Fabrício Castro, um entusiasta e desenvolvedor de SaaS com talento para criar soluções inovadoras. Com 1 ano de experiência no setor, aprimorei minhas habilidades em Web Design e design System, movido pela paixão por alavancar a tecnologia para resolver problemas do mundo real. Atualmente, estou explorando o Next.js, uma poderosa ferramenta para o desenvolvimento de aplicações web, que me permite criar experiências de usuário ricas e responsivas.
        </p>
            <p className="indent-2">
              Estou particularmente interessado nas funcionalidades de renderização do lado do servidor e geração de páginas estáticas  que o Next.js oferece, pois isso me ajuda a otimizar o desempenho das aplicações e a melhorar a experiência do usuário. Além disso, a integração com APIs e a facilidade de manipulação de rotas me permitem construir soluções escaláveis e flexíveis para os desafios que enfrento.
        </p>
            <p className="indent-2">
              Busco constantemente aprender novas tecnologias e aprimorar minhas habilidades para me manter atualizado em um campo em rápida evolução. Estou animado com as possibilidades que o Next.js traz e ansioso para aplicá-lo em projetos futuros, onde posso continuar a resolver problemas e agregar valor aos usuários.
            </p >

          </div>

        </CardContent>
      </Card > 
    </>
  )
}



export default Page