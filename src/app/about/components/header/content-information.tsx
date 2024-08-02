import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface ContentInfoProps {
  title: string
  Icon: LucideIcon
  description: string
}

export default function ContentInfo({ title, Icon, description }: ContentInfoProps) {
  return (
    <Card className="max-md:flex max-md:flex-col max-md:items-center">
      <CardHeader>
        <CardTitle className="flex gap-2 mb-3">
          <Icon />
          <span>{ title }</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <span>{ description }</span>
      </CardContent>
    </Card>


  )
}
