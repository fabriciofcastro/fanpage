import { Separator } from "@/components/ui/separator";

interface CardsSkillsProps {
  title: string
  textContent: string
}

export default function CardsSkills({title, textContent }: CardsSkillsProps) {
  return (
    <div className="space-y-6 ">
      <div className="px-36">
        <div className="pb-6">
          <h2 className="text-center text-3xl">{title}</h2>
        </div>
        <div>
          <p className="text-xl text-center">
            {textContent}
          </p>
        </div>
      </div>
      <Separator />
    </div>
  )
}
