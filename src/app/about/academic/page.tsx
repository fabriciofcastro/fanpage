/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1mrcZgGTiU9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Component() {
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
        <div className="grid gap-8">
          <div className="grid gap-8 justify-center">

            <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-muted-foreground/20">
              <div className="grid gap-8">
                <div className="grid gap-1 text-sm relative">
                  <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                  <div className="font-medium">2018 - 2022 | Bachelor of Science in Computer Science</div>
                  <div className="text-muted-foreground">Massachusetts Institute of Technology (MIT)</div>
                  <div className="text-muted-foreground">GPA: 3.9 | Graduated Summa Cum Laude</div>
                  <div className="text-muted-foreground">Undergraduate Research Assistant, MIT Media Lab</div>
                </div>
                <div className="grid gap-1 text-sm relative">
                  <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                  <div className="font-medium">2016 - 2018 | Associate of Science in Mathematics</div>
                  <div className="text-muted-foreground">Bunker Hill Community College</div>
                  <div className="text-muted-foreground">GPA: 4.0 | Graduated with Highest Honors</div>
                  <div className="text-muted-foreground">Recipient of the Phi Theta Kappa Honor Society Scholarship</div>
                </div>
                <div className="grid gap-1 text-sm relative">
                  <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                  <div className="font-medium">2014 - 2016 | High School Diploma</div>
                  <div className="text-muted-foreground">Boston Latin School</div>
                  <div className="text-muted-foreground">GPA: 3.8 | Valedictorian</div>
                  <div className="text-muted-foreground">National Merit Scholarship Finalist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

    </div>

  )
}