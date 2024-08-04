import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ContentInfoProps {
  title: string
  Icon: LucideIcon
  description: string
  href?: string 
}

export default function ContentInfo({ title, Icon, description, href="" }: ContentInfoProps) {
  return (
   
    <Card className="max-md:flex max-md:flex-col max-md:items-center shadow-xl bg-muted dark:g-muted-foreground">
      
       <CardHeader>
        <CardTitle className="flex gap-2 mb-3">
          <Icon />
          <span>{ title }</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="text-sm hover:text-blueDark-A3">
        <Link href={href} target="_blank">
        { description }
        </Link>  
      </CardContent>   
   </Card>
   

  )
}
