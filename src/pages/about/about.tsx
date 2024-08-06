import { Button } from "@/components/ui/button";
import { Workflow } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="py-16 px-28 max-lg:px-16 max-w max-md:px-3 max-lg:pb-4">
      <div className="space-y-6 max-w-screen-2xl m-auto">
        <div className=" flex justify-center font-semibold">
          <h1 className="text-bg-blueDark-A1 text-4xl max-lg:text-2xl dark:text-bg-blueDark-A5 ">UM POUCO SOBRE MIM</h1>
        </div>
        <div className="px-36 max-lg:px-0">
          <p className="text-xl text-center max-md:text-lg max-md:text-start">
            Ei!
            Sou Fabrício Castro, um entusiasta e desenvolvedor de SaaS com talento para criar soluções inovadoras. Com 1 ano de experiência no setor, aprimorei minhas habilidades em Web Design e designer System, movido pela paixão por alavancar a tecnologia para resolver problemas do mundo real.
          </p>
          <div className="mt-10 w-full flex justify-center">
            <Link href="/about">
              <Button variant="default" className="px-10 flex gap-2">
                Mais sobre mim
                <Workflow absoluteStrokeWidth />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
