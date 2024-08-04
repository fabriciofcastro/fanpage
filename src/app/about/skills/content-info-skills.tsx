import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ContentInfoProps {
  title: string
  children: React.ReactNode
  // Icon: LucideIcon
  // description: string
  // href?: string 
}

export default function ContentInfoSkills({ title, children }: ContentInfoProps) {
  return (
   
    <Card className="max-md:flex max-md:flex-col max-md:items-center shadow-xl">
      
       <CardHeader>
        <CardTitle className="flex gap-2 mb-3">
          <span>{ title }</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex justify-center">
       {children}
      </CardContent>   
   </Card>
   

  )
}
