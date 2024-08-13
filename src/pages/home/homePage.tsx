"use client"

import Avatar from "@/assets/image/avatar/fabricio.png"
import { Button } from "@/components/ui/button"
import { BicepsFlexed } from "lucide-react"
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import HireMe from "./hire-me"

export default function HomePage() {
  return (
    <div className="bg-[url('../assets/banner_bg.png')] bg-no-repeat bg-cover">
      <div className="mt-24 grid grid-auto-fit-[30.5rem] max-sm:grid-auto-fit gap-12 py-[6rem] max-lg:py-10 max-w-screen-2xl m-auto  ">
        <div className="flex justify-center px-10 flex-col space-y-8 max-lg:order-2">
          <div className="space-y-4">
            <div>
              <h3 className="text-4xl text-blue-900 max-lg:text-2xl max-md:text-lg">Olá!</h3>
              <h1 className="text-6xl font-semibold max-lg:text-4xl max-md:text-2xl">
                EU SOU <br />
                DESENVOLVEDOR <br />
                FRONT-END
              </h1>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blueDark-A1">Seja Bem-vindo ao meu website</h3>
              <p>
                Estou feliz por ter você aqui. Este é o centro onde mostro minha paixão por software, como serviço (SaaS), website e compartilho insights sobre as soluções que construo. Faça um tour para descobrir mais sobre o que ofereço e como podemos colaborar.
              </p>
            </div>

          </div>
          <div className="flex gap-4">
            <Link href="/about/skills">
              <Button variant="default" className="flex gap-2 px-6" >
                Skills
                <BicepsFlexed strokeWidth={ 1.25 } size="16" />
              </Button>
            </Link>
          </div>

        </div>
        <div className=" flex  justify-center max-lg:order-1 bg-[url('../assets/vector.png')] bg-no-repeat bg-center bg-contain">
          <div className="w-[60%] flex items-end justify-center bg-local">
            <Image src={ Avatar } alt="Fabrício Castro" className="w-[21rem] " />
          </div>
        </div>

      </div>
      <HireMe />
    </div>

  )
}
