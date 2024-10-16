"use client"

import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/providers/ThemeProvider/modoToggle"
import { usePathname } from "next/navigation"

export default function MenuNavigation() {
  const pathname = usePathname()

  const getNavLinkClass = (href: string) => {
    return `${pathname === href && "bg-blue-200 dark:bg-blueDark-A1" } ${navigationMenuTriggerStyle()}`
  }

  return (
    <div className="flex items-center gap-1">
      <NavigationMenu className="max-lg:hidden">
        <NavigationMenuList >
          <NavigationMenuItem>
            <Link href="/">
              <NavigationMenuLink className={getNavLinkClass("/")}>
                HOME
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about">
              <NavigationMenuLink className={getNavLinkClass("/about")}>
                SOBRE
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/saas">
              <NavigationMenuLink className={getNavLinkClass("/saas")}>
                SAAS
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </div>
  )
}
