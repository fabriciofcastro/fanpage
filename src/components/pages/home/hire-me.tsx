import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

export default function HireMe() {
  return (
    <div className="px-10 py-12 bg-zinc-800 dark:bg-zinc-500  ">
      <div className="grid grid-auto-fit-xl gap-6 max-w-screen-2xl m-auto">
        <Card className=" hover:scale-105 transition-all duration-200 ease-linear shadow-lg ">
          <CardHeader>
            <CardTitle>
              Quer dedicação
            </CardTitle>
          </CardHeader>
          <CardContent >
            <p>Ajudo equipe chegar ao sucesso</p>
            <div>
              <Button variant="link">
                Contrate-me { '>' }
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className=" hover:scale-105 transition-all duration-200 ease-linear shadow-lg">
          <CardHeader>
            <CardTitle>
              Revisão ilimitada
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>experimente a paz de espírito que
              vem com revisão ilimitada</p>
            <div>
              <Button variant="link">
                Contrate-me { '>' }
              </Button>
            </div>
          </CardContent>
        </Card >
        <Card className=" hover:scale-105 hover:text- transition-all duration-200 ease-linear shadow-lg">
          <CardHeader>
            <CardTitle>
              Vamos conversar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              se você está interessado em explorar um novo projeto, compartilhar ideias ou buscar conselhos, estou com você.
            </p>
            <div>
              <Button variant="link">
                Contrate-me { '>' }
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
