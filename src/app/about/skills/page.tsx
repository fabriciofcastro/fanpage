
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BicepsFlexed, Code2 } from 'lucide-react'
import BarProgress from './barprogress'
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
        <div className="grid grid-auto-fit">
          <CardContent>
            <Card>

              <CardHeader>
                <CardTitle>Frameworks & Libraries</CardTitle>
              </CardHeader>
              <CardContent >
                <BarProgress percentage={ 60 } textLanguage="Reat" textPercentage="60%" />
                <BarProgress percentage={ 60 } textLanguage="Next" textPercentage="60%" />
                <BarProgress percentage={ 40 } textLanguage="Styled-Components" textPercentage="40%" />
                <BarProgress percentage={ 50 } textLanguage="Tailwindcss" textPercentage="50%" />
              </CardContent>

            </Card>
          </CardContent>

          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle>ORM & SMS</CardTitle>
              </CardHeader>
              <CardContent >
                <BarProgress percentage={ 40 } textLanguage="Prisma" textPercentage="40%" />
                <BarProgress percentage={ 50 } textLanguage="Sanity" textPercentage="50%" />
              </CardContent>
            </Card>
          </CardContent>
          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle>DATABASE</CardTitle>
              </CardHeader>
              <CardContent >
                <BarProgress percentage={ 10 } textLanguage="PostgreSQL" textPercentage="10%" />
                <BarProgress percentage={ 10 } textLanguage="SQL Server" textPercentage="10%" />
              </CardContent>
            </Card>
          </CardContent>


        </div>

      </Card>
    </div>

  )
}