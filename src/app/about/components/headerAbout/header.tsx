"use client"

import { Card } from '@/components/ui/card'
import { Code, Linkedin, Mail, User } from 'lucide-react'
import Avatar from './Avatar'
import ContentInfo from './content-information'

export default function Header() {
  return (
    <header >
      <Card className="max-w-full flex gap-4 p-6">
        <div className="">
          <Avatar username="fabriciofcastro" />
        </div>
        <div className="w-full flex flex-col gap-6">

          <div className="grid grid-auto-fit gap-6">
            <ContentInfo title="Fabricio Feitosa" Icon={ User } description="Meu nome" />
            <ContentInfo title="Linkedin" Icon={ Linkedin } description="linkedin.com/in/fabriciofcastro" />
            <ContentInfo title="E-mail" Icon={ Mail } description="fabriciofeitosacastro@gmail" />

          </div>
          <div>
              
          </div>
        </div>
      </Card>

    </header>
  )
}
