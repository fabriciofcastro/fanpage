import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

export default function HireMe() {

  const [isHovered, setIsHovered] = useState(false);

  const textCard1 = "Sou uma pessoa dedicada e comprometida, sempre buscando cumprir minhas responsabilidades com excelência e integridade. Valorizo a lealdade e a confiança, tanto em relações pessoais quanto profissionais. Acredito que o compromisso vai além de simplesmente concluir tarefas; trata-se de estar presente, apoiar colegas e contribuir para o sucesso coletivo. Minha abordagem é focada em construir relacionamentos sólidos e duradouros, onde a honestidade e a responsabilidade são fundamentais. Estou sempre disposto a ir além para garantir que as expectativas sejam atendidas e superadas, reafirmando meu compromisso com aqueles que confiam em mim."

  const textCard2 = "Prática essencial para garantir a qualidade e a eficiência do software. Promove ciclos contínuos de melhoria e adaptação, beneficiando tanto o desenvolvedor quanto o produto final. Conceito abrangente várias práticas e princípios fundamentais: Iteração Contínua, Feedback Constante, Qualidade de Código, Adaptação e Aprendizado e Flexibilidade"

  const textCard3 = "Se você está interessado em explorar um novo projeto, compartilhar ideias ou buscar conselhos, estou com você. A colaboração e a troca de ideias são fundamentais no mundo do desenvolvimento. Juntos, podemos discutir suas visões, solucionar problemas e criar soluções inovadoras. Estou aqui para ouvir suas necessidades, oferecer insights e trabalhar em conjunto para transformar suas ideias em realidade. Vamos aproveitar essa oportunidade para crescer e aprender juntos."

  return (
    <div className="px-10 py-12 bg-zinc-800 dark:bg-zinc-500  ">
      <div className="grid grid-auto-fit-xl gap-6 max-w-screen-2xl m-auto">
        <Card
          className=" hover:scale-105 transition-all duration-200 ease-linear shadow-lg  overflow-y-scroll"
          onMouseEnter={ () => setIsHovered(true) }
          onMouseLeave={ () => setIsHovered(false) }
        >
          <CardHeader>
            <CardTitle className="text-blueDark-A1">
              Quer dedicação
            </CardTitle>
            { isHovered && (
              <CardContent className="absolute left-0 top-0 z-10 w-full px-2 h-12 ">
                <div className="relative  mt-1 p-2 border rounded-md bg-blue-950 mx-1 text-blue-200 dark:bg-slate-300 dark:text-blue-800 dark: ">
                  { textCard1 }
                </div>
              </CardContent>
            ) }
          </CardHeader>
          <CardContent className="relative">
            <div className="line-clamp-2 mb-6">
              { textCard1 }
            </div>
            <div className="underline leading-10">
                Continuei lendo { '>' }
            </div>
          </CardContent>

        </Card>
        <Card
          className=" hover:scale-105 transition-all duration-200 ease-linear shadow-lg overflow-y-scroll"
          onMouseEnter={ () => setIsHovered(true) }
          onMouseLeave={ () => setIsHovered(false) }
          onTouchStart={ () => setIsHovered(true)}
          onTouchEnd=  { () => setIsHovered(false)}
        >
          <CardHeader>
            <CardTitle className="text-blueDark-A1">
              Revisão ilimitada
            </CardTitle>
            { isHovered && (
              <CardContent className="absolute left-0 top-0 z-10 w-full px-2">
                <div className="relative  mt-1 p-2 border rounded-md bg-blue-950 mx-1 text-blue-200 dark:bg-slate-300 dark:text-blue-800 dark: ">
                  { textCard2 }
                </div>
              </CardContent>
            ) }
          </CardHeader>
          <CardContent>
            <div className="line-clamp-2 mb-6">
              { textCard2 }
            </div> 
            <div className="underline leading-10">
                Continuei lendo { '>' }
            </div>
          </CardContent>
        </Card >
        <Card
          className=" hover:scale-105 transition-all duration-200 ease-linear shadow-lg overflow-y-scroll"
          onMouseEnter={ () => setIsHovered(true) }
          onMouseLeave={ () => setIsHovered(false) }
          onTouchStart={ () => setIsHovered(true)}
          onTouchEnd=  { () => setIsHovered(false)}

        >
          <CardHeader>
            <CardTitle className="text-blueDark-A1">
              Vamos conversar
            </CardTitle>
            { isHovered && (
              <CardContent className="absolute left-0 top-0 z-10 w-full px-2">
                <div className="relative  mt-1 p-2 border rounded-md bg-blue-950 mx-1 text-blue-200 dark:bg-slate-300 dark:text-blue-800 dark: ">
                  { textCard3 }
                </div>
              </CardContent>
            ) }
          </CardHeader>
          <CardContent>
            <div className="line-clamp-2 mb-6">
              { textCard3 }
            </div> 
            <div className="underline leading-10">
                Continuei lendo { '>' }
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
