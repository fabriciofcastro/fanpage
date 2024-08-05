"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Contact, LinkIcon, LocateIcon, MailIcon, PhoneIcon } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div
      className="w-full min-h-screen rounded-lg bg-center bg-no-repeat space-y-6"
      style={ { backgroundImage: 'url("/placeholder.svg")' } }
    >
      <Card className=" bg-muted shadow-xl dark:bg-muted-foreground">
        <CardHeader>
          <CardTitle className="flex gap-2">
            <Contact />
            Contate-me
          </CardTitle>
          <CardDescription className="text-muted-foreground dark:text-muted">
            Sinta-se à vontade para entrar em contato caso tenha alguma dúvida ou pergunta. Entrarei em contato com você o mais breve possível.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full px-4 md:px-6 py-6 md:py-16 backdrop-blur-sm ">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Informe seu nome " />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="Informe seu e-mail" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" placeholder="Escreva sua mensagem" className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </form>
          </div>
          <div className="bg-muted rounded-lg p-6 md:p-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Conecte-se comigo</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LocateIcon className="h-5 w-5 text-muted-foreground" />
                  <p className="text-muted-foreground">123 Main St, Anytown USA 12345</p>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5 text-muted-foreground" />
                  <p className="text-muted-foreground">jdoe@example.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <LinkIcon className="h-5 w-5 text-muted-foreground" />
                  <Link href="#" className="text-muted-foreground" prefetch={ false }>
                    example.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}