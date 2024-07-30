import CardGrid from '@/components/card/card-grid'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Palette, View } from 'lucide-react'

export default function Services() {
  return (
    <div className="px-10 py-12 ">
      <div className="max-w-screen-2xl m-auto">
        <div className="flex py-10 gap-10 font-semibold">
          <h1 className="text-bg-blueDark-A1 text-4xl max-lg:text-2xl dark:text-bg-blueDark-A5">MEUS SERVIÇOS</h1>
          <Separator className="flex-1 flex self-center text-bg-blueDark-A1" />
        </div>
        <div className="grid grid-auto-fit-[25rem] gap-4 ">
          <CardGrid
            title="Website Designer"
            contentText="Layouts bonitos e elegantes, adaptativo a diferentes dispositivos"
            Icon={ <Palette strokeWidth={ 1.25 } className="group-hover:text-blueDark-A1" /> }
            buttonText="Saber mais"

          />
          <CardGrid
            title="Marketing Digital"
            contentText="Layouts bonitos e elegantes, adaptativo a diferentes dispositivos"
            Icon={ <Palette strokeWidth={ 1.25 } className="group-hover:text-blueDark-A1" /> }
            buttonText="Saber mais"
          />
          <CardGrid
            title="Designer Gráfico"
            contentText="Layouts bonitos e elegantes, adaptativo a diferentes dispositivos"
            Icon={ <Palette strokeWidth={ 1.25 } className="group-hover:text-blueDark-A1" /> }
            buttonText="Saber mais"
          />
          <CardGrid
            title="Media Social"
            contentText="Layouts bonitos e elegantes, adaptativo a diferentes dispositivos"
            Icon={ <Palette strokeWidth={ 1.25 } className="group-hover:text-blueDark-A1" /> }
            buttonText="Saber mais"
          />
          <CardGrid
            title="Especialista SEO"
            contentText="Layouts bonitos e elegantes, adaptativo a diferentes dispositivos"
            Icon={ <Palette strokeWidth={ 1.25 } className="group-hover:text-blueDark-A1" /> }
            buttonText="Saber mais"
          />
          <CardGrid
            title="Mais Categoria"
            contentText="Layouts bonitos e elegantes, adaptativo a diferentes dispositivos"
            Icon={ <Palette strokeWidth={ 1.25 } className="group-hover:text-blueDark-A1" /> }
            buttonText="Saber mais"
          />
        </div>
      </div>
    </div>
  )
}
