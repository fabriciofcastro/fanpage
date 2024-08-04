
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BicepsFlexed, Code2 } from 'lucide-react'
import PieChartWithNeedleCSS from './chart/PieChartWithNeedleCSS'
import PieChartWithNeedleHTML from './chart/PieChartWithNeedleHTML'
import PieChartWithNeedleJS from './chart/PieChartWithNeedleJS'
import ContentInfoSkills from './content-info-skills'

export default function Skill() {
  return (
    <div className="space-y-4">
      <Card className=" bg-muted shadow-xl dark:bg-muted-foreground">
        <CardHeader>
          <CardTitle className="flex gap-2">
            <BicepsFlexed />
            Skills
          </CardTitle>
          <CardDescription className="text-muted-foreground dark:text-muted">
            Explore minhas habilidades e conhecimentos por meio desses gráficos interativos.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex gap-2">
            <Code2 />
            Front-end
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-auto-fit gap-3 max-md:grid-auto-fit-xl-">
            <ContentInfoSkills title="HTML" >
              <PieChartWithNeedleHTML />
            </ContentInfoSkills>
            <ContentInfoSkills title="CSS" >
              <PieChartWithNeedleCSS />
            </ContentInfoSkills>
            <ContentInfoSkills title="Javascript" >
              <PieChartWithNeedleJS />
            </ContentInfoSkills>

          </div>
        </CardContent>

      </Card>
    </div>

  )
}