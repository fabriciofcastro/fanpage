import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

interface CardGridProps {
  title: string
  contentText: string
  Icon: React.ReactNode
  buttonText: string
}

export default function CardGrid({ title, contentText, Icon, buttonText }: CardGridProps) {
  return (
    <div>
      <Card className="group flex hover:bg-gray-300 focus:bg-gray-300 transition-colors duration-200 ease-linear shadow-lg  ">
            
            <div>
              <CardHeader>
                <CardTitle className="group-hover:text-blueDark-A1 group-focus:text-blueDark-A1 flex gap-2 max-md:text-xl">
                {Icon} 
                {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="group-hover:text-blueDark-A2 space-y-4 group-focus:text-blueDark-A2  ">
                <p>{contentText}</p>
                <div>
                  <Button variant="link" className="group-hover:text-blueDark-A1 group-focus:text-blueDark-A1">
                    {buttonText} { '>' }
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
    </div>
  )
}
