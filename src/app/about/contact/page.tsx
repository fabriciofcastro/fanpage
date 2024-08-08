"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ContactRound, Github, LocateIcon, MailIcon, PhoneIcon } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Contato",
  description: "Canal para nos conectar.",
  openGraph: {
    title: "Contato | Fabrício Castro",
    type: "website",
    locale: "pt-BR",
    url: "https://www.fabriciofcastro.com.br/",
    siteName: "Fabrício Castro Dev"
  }
}

export default function Contact() {
  return (
    <div
      className="w-full min-h-screen rounded-lg bg-center bg-no-repeat space-y-6"
      style={ { backgroundImage: 'url("/placeholder.svg")' } }
    >
      <Card className=" bg-muted shadow-xl dark:bg-muted-foreground">
        <CardHeader>
          <CardTitle className="flex gap-2">
            <ContactRound />
            Contate-me
          </CardTitle>
          <CardDescription className="text-muted-foreground dark:text-muted">
            Sinta-se à vontade para entrar em contato caso tenha alguma dúvida ou pergunta. Entrarei em contato com você o mais breve possível.
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="w-full px-4 md:px-6 py-6 md:py-16 backdrop-blur-sm bg-[url('../assets/banner_bg.png')] bg-no-repeat bg-cover  ">
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
          <Card className="bg-muted rounded-lg ">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Conecte-se comigo</CardTitle>
              <CardDescription>
                Estou sempre disponível para ouvir de você, seja para discutir uma possível colaboração, compartilhar ideias ou simplesmente dizer olá.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-2">
                <LocateIcon className="h-5 w-5 text-muted-foreground" />
                <p className="text-muted-foreground">São Paulo/SP</p>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                <p className="text-muted-foreground">(11) 99147-2010</p>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="h-5 w-5 text-muted-foreground" />
                <p className="text-muted-foreground">fabriciofeitosacastro@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-5 w-5 text-muted-foreground" />
                <Link href="#" className="text-muted-foreground" prefetch={ false } target="_blank">
                  https://github.com/fabriciofcastro
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}