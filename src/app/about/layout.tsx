"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { BriefcaseIcon, HomeIcon, MailIcon, MenuIcon, MountainIcon, SquareMenu, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import NavbarLinks from './components/navbar/navbarLinks'


export default function AboutLayout({ children }: { children: React.ReactNode }) {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  function handleOpenMenu() {
    setIsOpenMenu(true)
  }

  return (
    <>
      <div className="flex gap-6 pt-28 max-w-screen-2xl m-auto pb-8 px-3">
          <NavbarLinks />
          <div className="w-full space-y-6">
            { children }
          </div>
      </div>
    </>
  )
}
