import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Timeline } from "@/components/ui/timeline"
import { GraduationCap } from "lucide-react"

export const metadata = {  
  title: "Formação acadêmica",
  description: "Compartilho insights sobre as soluções que construo, para saber mais sobre o que ofereço e como podemos colaborar.",
  openGraph: {
    title: "Serviços | Fabrício Castro",
    type: "website",
    locale: "pt-BR",
    url: "https://www.fabriciofcastro.com.br/",
    siteName: "Fabrício Castro Dev"
  }
}

const timelineData = [
  {
    title: "Trabalho 1",
    description: "Desenvolvimento do projeto começou",
    date: "2023-10-01",
    content: <></>
  },
  {
    title: "Trabalho 2",
    description: "Implementação de novos recursos",
    date: "2024-01-15",
    content: <></>
  },
  {
    title: "Trabalho 3",
    description: "Primeira versão pública lançada",
    date: "2024-05-10",
    content: <></>
  },
];

export default function Academic() {
  return (
    <div className="flex flex-col gap-4">

      <Card className=" bg-muted shadow-xl dark:bg-muted-foreground ">
        <CardHeader>
          <CardTitle className="flex gap-2">
          <GraduationCap size={20}/>
            Formação Acadêmica
          </CardTitle>
          <CardDescription className="text-muted-foreground dark:text-muted ">
            Explore minha jornada educacional e minhas conquistas.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-[url('../assets/banner_bg.png')] bg-no-repeat bg-cover">
        <Timeline data={timelineData}/>
      </Card>

    </div>

  )
}