"use client"

import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerTrigger } from '@/components/ui/drawer'
import MenuResponsive from './navbar-mobili/menu-responsive'
import MenuNavigation from './links'

function Header() {

  return (
    <div className="flex items-center h-20 px-5 bg-slate-400 dark:bg-slate-900 shadow-md w-full fixed top-0 left-0  z-10  ">

      <div className="flex items-center justify-between flex-1 max-w-screen-2xl m-auto ">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="flex items-center gap-2 ">
          <div className="lg:hidden ">
            <Drawer >
              <DrawerTrigger asChild>
                <Button >
                  <MenuResponsive />
                </Button>
              </DrawerTrigger>
            </Drawer>
          </div>
          <nav>
            <MenuNavigation />
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header