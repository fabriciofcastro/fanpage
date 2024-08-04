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
      <section className="flex flex-col gap-4 pt-28 px-3 pb-4 max-w-screen-2xl m-auto">
        <Card className='md:hidden '>
          <CardContent className="">
            <div>
              <Sheet>
                <SheetTrigger asChild className="flex items-center">
                  <Button size="icon" variant="outline" className="md:hidden">
                    <MenuIcon className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                { isOpenMenu && (
                  <SheetContent side="left" className="sm:max-w-xs">
                    <nav className="grid gap-6 text-lg font-medium">
                      <Link
                        href="#"
                        className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                        prefetch={ false }
                      >
                        <MountainIcon className="h-5 w-5 transition-all group-hover:scale-110" />
                        <span className="sr-only">Acme Inc</span>
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        prefetch={ false }
                      >
                        <HomeIcon className="h-5 w-5" />
                        Home
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        prefetch={ false }
                      >
                        <UserIcon className="h-5 w-5" />
                        About
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        prefetch={ false }
                      >
                        <BriefcaseIcon className="h-5 w-5" />
                        Services
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        prefetch={ false }
                      >
                        <MailIcon className="h-5 w-5" />
                        Contact
                      </Link>
                    </nav>
                  </SheetContent>
         
              )

              }
               </Sheet>
            </div>

          </CardContent>
        </Card>
        <div className="flex gap-6">
          <NavbarLinks />

          <div className="w-full space-y-6">
            { children }
          </div>
        </div>



      </section>
    </>
  )
}
