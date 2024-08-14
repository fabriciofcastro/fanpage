import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";


interface CardsProjectProps {
  title: string
  description: string
  image: StaticImageData
  linkUrl?: string
}

export default function CardsProject({ title, description, image, linkUrl = "#" }: CardsProjectProps) {

  return (
    <Link href={ linkUrl } target="_blank">
      <Card className="max-w-max pt-5 hover:scale-105 focus:scale-105 transition-all duration-200 relative z-0 shadow-md">
        <CardContent className="">
          <div className="flex items-center">
            <Image src={ image } alt="projeto 1" className="rounded-md" />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-1.7xl">{ title }</CardTitle>
          <CardDescription className="py-2">{ description }</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
