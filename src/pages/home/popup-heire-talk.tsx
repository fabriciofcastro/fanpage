import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"

export default function DialogHireTalk() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">Continue lendo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Vamos conversar </DialogTitle>
        </DialogHeader>
        <p>
        Se você está interessado em explorar um novo projeto, compartilhar ideias ou buscar conselhos, estou com você. A colaboração e a troca de ideias são fundamentais no mundo do desenvolvimento. Juntos, podemos discutir suas visões, solucionar problemas e criar soluções inovadoras. Estou aqui para ouvir suas necessidades, oferecer insights e trabalhar em conjunto para transformar suas ideias em realidade. Vamos aproveitar essa oportunidade para crescer e aprender juntos.
        </p>

      </DialogContent>
    </Dialog>
  )
}
