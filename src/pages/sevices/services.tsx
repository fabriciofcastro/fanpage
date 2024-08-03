import CardGrid from '@/components/card/card-grid'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Cable, Computer, MonitorPlay, Option, Palette, Presentation, View } from 'lucide-react'

export default function Services() {
  return (
    <div className="px-10 py-12 ">
      <div className="max-w-screen-2xl m-auto">
        <div className="flex py-10 gap-10 font-semibold">
          <h1 className="text-bg-blueDark-A1 text-4xl max-lg:text-2xl dark:text-bg-blueDark-A5">MEUS SERVIÇOS</h1>
          <Separator className="flex-1 flex self-center text-bg-blueDark-A1" />
        </div>
        <div className="grid grid-auto-fit-[25rem] max-lg:grid-auto-fit-sm gap-4 ">
          <CardGrid
            title="Website Designer"
            contentText="Desenvolvimento de sites institucionais de alta qualidade para fortalecer marcas e negócios, com
               layouts e elementos visuais elegantes, para sites e aplicativos que adapta a diferentes dispositivos garantindo uma experiência de usuário intuitiva e agradável."
            Icon={ <Palette strokeWidth={ 1.25 } className="group-hover:text-blueDark-A1" /> }
            buttonText="Saber mais"

          />
          <CardGrid
            title="Marketing Digital"
            contentText="Estratégia foca na criação e distribuição de conteúdo valioso, relevante e consistente para atrair e engajar um público-alvo definido. O marketing de conteúdo pode incluir blogs, artigos, e-books, infográficos, vídeos, podcasts e webinars."
            Icon={ <Presentation strokeWidth={ 1.25 } className="group-hover:text-blueDark-A1" /> }
            buttonText="Saber mais"
          />
          <CardGrid
            title="Computadores e notebooks"
            contentText="Manutenção de microcomputadores e notebooks com uma abordagem abrangente que inclui preventiva, corretiva e evolutiva, que beneficia você de um desempenho melhorado, maior durabilidade dos equipamentos e menor risco de falhas inesperadas."
            Icon={ <Computer strokeWidth={ 1.25 } className="group-hover:text-blueDark-A1" /> }
            buttonText="Saber mais"
          />
          <CardGrid
            title="Media Social"
            contentText="As mídias sociais são uma ferramenta poderosa para comunicação, marketing e construção de relacionamentos. Ao adotar uma estratégia eficaz de mídias sociais, empresas e indivíduos podem se conectar com seu público, aumentar a visibilidade da marca e impulsionar o engajamento. Contudo, é crucial estar ciente dos desafios e manter-se atualizado sobre as tendências."
            Icon={ <MonitorPlay strokeWidth={ 1.25 } className="group-hover:text-blueDark-A1" /> }
            buttonText="Saber mais"
          />
          <CardGrid
            title="Especialista SEO"
            contentText="É um conjunto de práticas e técnicas destinadas a otimizar um site para melhorar sua visibilidade e posicionamento nos resultados de busca orgânica dos motores de busca, como Google, Bing e Yahoo. O objetivo principal do SEO é aumentar o tráfego qualificado para o site, resultando em maior visibilidade e, potencialmente, mais conversões."
            Icon={ <Cable strokeWidth={ 1.25 } className="group-hover:text-blueDark-A1" /> }
            buttonText="Saber mais"
          />
          <CardGrid
            title="Outros serviços"
            contentText="Conheça outras soluções para sua necessidade "
            Icon={ <Option strokeWidth={ 1.25 } className="group-hover:text-blueDark-A1" /> }
            buttonText="Saber mais"
          />
        </div>
      </div>
    </div>
  )
}
