
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import PieChartWithNeedleCSS from './chart/PieChartWithNeedleCSS'
import PieChartWithNeedleHTML from './chart/PieChartWithNeedleHTML'
import PieChartWithNeedleJS from './chart/PieChartWithNeedleJS'
import ContentInfoSkills from './content-info-skills'
import { BicepsFlexed } from 'lucide-react'

export default function Skill() {
  return (
    <div className="space-y-4">
      <Card className=" bg-muted shadow-xl dark:bg-muted-foreground">
        <CardHeader>
          <CardTitle className="flex gap-2">
            <BicepsFlexed />
            Skills
          </CardTitle>
          <CardDescription className="text-muted-foreground dark:text-muted">Habilidades que possuo e que serão adquiridas</CardDescription>
        </CardHeader>
      </Card> 
      <div className="grid grid-auto-fit gap-3 max-md:grid-auto-fit-xl-">
      <ContentInfoSkills title="HTML" >
        <PieChartWithNeedleHTML  />
      </ContentInfoSkills>
      <ContentInfoSkills title="CSS" >
        <PieChartWithNeedleCSS  />
      </ContentInfoSkills>
      <ContentInfoSkills title="Javascript" >
        <PieChartWithNeedleJS  />
      </ContentInfoSkills>
      
    </div>
    </div>
    
  )
}