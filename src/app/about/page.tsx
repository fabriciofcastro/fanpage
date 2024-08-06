
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
        <CardContent className="bg-[url('../assets/banner_bg.png')] bg-no-repeat bg-cover">
          <div className="space-y-4">

            <p className="indent-2 "> 
              Minha trajetória profissional começou como atendente na drogaria JC por três anos e Drogaleste por mais três anos. Essa experiência foi fundamental para o desenvolvimento das minhas habilidades de atendimento ao cliente, comunicação e resolução de problemas.
            </p>

            <p className="indent-2 ">
              Após esse período, trabalhei no escritório da Frileste Refrigeração por um ano. Nesse cargo, adquiri habilidades administrativas e operacionais, o que ampliou minha visão sobre o funcionamento interno de uma empresa e me proporcionou uma compreensão mais profunda dos processos empresariais.
            </p>
            <p className="indent-2 ">
              Buscando novos desafios, decidi abrir meu próprio negócio, a Inforleste Informática, onde atuei por 12 anos. Minha loja oferecia venda de hardware e periféricos, além de uma ampla gama de serviços, incluindo:
            </p>
            <p className="indent-2 ">
              Manutenção de microcomputadores e notebooks Instalação de sistemas operacionais Windows, Windows Server e Linux Suporte remoto para clientes Montagem de computadores customizados, incluindo workstations e PCs gamers Gerenciar a Inforleste Informática me permitiu desenvolver uma visão empreendedora, habilidades de gestão de negócios e um profundo conhecimento técnico, consolidando minha experiência no setor de tecnologia.
            </p>

            <p className="indent-2 ">
              Posteriormente, trabalhei por um ano na Wikitec, onde fui responsável pelo desenvolvimento de um sistema LMS (Learning Management System). Minha função principal foi o desenvolvimento das interfaces da plataforma de gestão de treinamento, utilizando a plataforma Bubble. Essa experiência me proporcionou um entendimento valioso sobre o design e a funcionalidade de sistemas educacionais online.
            </p>
            <p className="indent-2 ">
              Nos últimos meses, decidi focar no desenvolvimento front-end e comecei a estudar na Rocketseat. Durante esse período de menos de um ano, aprofundei meus conhecimentos em tecnologias modernas e criei meu próprio website utilizando React e Next.js. Essas novas habilidades me entusiasmaram com as possibilidades que o desenvolvimento front-end oferece e estou ansioso para aplicá-las em projetos futuros, sempre buscando resolver problemas e agregar valor aos usuários.
            </p>
            <p className="indent-2 ">
              Essa trajetória reflete meu compromisso com o aprendizado contínuo e minha paixão por alavancar a tecnologia para criar soluções inovadoras. Atualmente, estou explorando o Next.js, uma poderosa ferramenta para o desenvolvimento de aplicações web, que me permite criar experiências de usuário ricas e responsivas.
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