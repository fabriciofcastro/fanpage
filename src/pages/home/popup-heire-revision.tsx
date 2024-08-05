import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"

export function DialogHireRevision() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">Continue lendo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Revisão ilimitada </DialogTitle>
        </DialogHeader>
        <p>
          Prática essencial para garantir a qualidade e a eficiência do software. Promove ciclos contínuos de melhoria e adaptação, beneficiando tanto o desenvolvedor quanto o produto final. Conceito abrangente várias práticas e princípios fundamentais: Iteração Contínua, Feedback Constante, Qualidade de Código, Adaptação e Aprendizado e Flexibilidade.
        </p>

      </DialogContent>
    </Dialog>
  )
}
