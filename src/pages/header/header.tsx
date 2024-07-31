"use client"

import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/providers/ThemeProvider/modoToggle'
import { SquareMenu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Links from './links'

export function Header() {

  const [isMenu, setIsMenu] = useState(() => false)

  function handleMenu() {
    setIsMenu(true)
  }

  return (
    <div className="flex justify-between h-24 px-5 bg-slate-400 dark:bg-slate-900 shadow-md w-full fixed top-0 left-0  z-10  ">
      <div className="flex items-center justify-between flex-1 ">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="flex items-center gap-8 ">


          <nav className="max-lg:hidden ">
            <ul className="flex gap-6">
              {
                Links.map(links => {
                  return (
                    <li key={ links.href } className="text-muted font-semibold hover:text-muted-foreground dark:text-muted-foreground transition-colors duration-200 ease-linear">
                      <Link href={ links.href }>
                        { links.name }
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </nav>

          { isMenu &&
          <div className="absolute top-0 left-0 min-h-screen w-full flex justify-center items-center">
            <nav className=" ">
              <ul className="flex gap-6">
                {
                  Links.map(links => {
                    return (
                  <li key={ links.href } className="text-muted font-semibold hover:text-muted-foreground dark:text-muted-foreground transition-colors duration-200 ease-linear">
                    <Link href={ links.href }>
                      { links.name }
                    </Link>
                  </li>
                )
              })
                }
              </ul>
            </nav>
          </div>
            
          }

          <div className="flex items-center gap-4 ">
            <Button variant="outline" className="lg:hidden" onClick={ () => handleMenu() }>
              <SquareMenu strokeWidth={ 1 } />
            </Button>
            <div className="relative top-0 left-0">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
