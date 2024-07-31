import { Button } from '@/components/ui/button'
import { BicepsFlexed, View } from 'lucide-react'
import CardsSkills from './CardsSkills'

export default function Skills() {
  return (
    <div className="py-16 px-28 max-lg:px-6 max-w ">
      <div className="space-y-6 max-w-screen-2xl m-auto">
        <div className=" flex justify-center  font-semibold">
          <h1 className="text-bg-blueDark-A1 text-4xl max-lg:text-2xl dark:text-bg-blueDark-A5 flex gap-4 items-center">
            MINHAS SKILLS
            <BicepsFlexed className="size-12" strokeWidth={ 1.25 } />
          </h1>
        </div>
        <div className="space-y-6">
          <CardsSkills
            title="Marketing Digital"
            textContent="Como estrategista de marketing digital, sou especialista em elaborar planos abrangentes para aumentar a visibilidade e gerar conversões. Através de estratégias de SEO direcionadas, complementando a criação de conteúdo e análises baseadas em dados, otimizo a presença online e atraio públicos relevantes."
          />
          <CardsSkills
            title="Gerenciamento de projetos"
            textContent="No domínio do gerenciamento de projetos, supervisão e iniciativas multifacetadas, desde o início até a conclusão. Com um olhar atento aos detalhes e fortes habilidades organizacionais, orquestro um fluxo de trabalho contínuo, garantindo a entrega pontual de projetos dentro das restrições orçamentárias."
          />
          <CardsSkills title="Marketing Digital" textContent="Na área de desenvolvimento web, me destaquei na criação de conteúdos dinâmicos e fáceis de usar. Desde a conceituação, aproveito minha expertise em front-end para construir plataformas digitais imersivas. Com proficiência em HTML, CSS e Javascript."
          />
        </div>
        <Button className="flex gap-2">
          Conheçer skills
          <View strokeWidth={ 1.25 } />
        </Button>
      </div>
    </div>
  )
}
