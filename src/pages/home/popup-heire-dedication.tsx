import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"

export function DialogHireDedication() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">Continue lendo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Dedicação </DialogTitle>
        </DialogHeader>
        <p>
          Sou uma pessoa dedicada e comprometida, sempre buscando cumprir minhas responsabilidades com excelência e integridade. Valorizo a lealdade e a confiança, tanto em relações pessoais quanto profissionais. Acredito que o compromisso vai além de simplesmente concluir tarefas; trata-se de estar presente, apoiar colegas e contribuir para o sucesso coletivo. Minha abordagem é focada em construir relacionamentos sólidos e duradouros, onde a honestidade e a responsabilidade são fundamentais. Estou sempre disposto a ir além para garantir que as expectativas sejam atendidas e superadas, reafirmando meu compromisso com aqueles que confiam em mim.
        </p>

      </DialogContent>
    </Dialog>
  )
}
