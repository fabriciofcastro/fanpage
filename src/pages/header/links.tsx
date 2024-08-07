"use client"

import Link from "next/link"
import * as React from "react"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/providers/ThemeProvider/modoToggle"

export default function MenuNavigation() {
  return (
    <div className="flex items-center gap-1">
      <NavigationMenu className="max-lg:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={ navigationMenuTriggerStyle() }>
                HOME
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={ navigationMenuTriggerStyle() }>
                SOBRE
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ ref }
          className={ cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          ) }
          { ...props }
        >
          <div className="text-sm font-medium leading-none">{ title }</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            { children }
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
















// import { ModeToggle } from "@/providers/ThemeProvider/modoToggle"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// interface LinksProps {
//   href: string
//   name: string
// }

// const NavLink: LinksProps[] = [
//   {
//     name: 'HOME',
//     href: '/',
//   },
//   {
//     name: 'SOBRE',
//     href: '/about',
//   },

// ]

// export default function Links() {

//   const pathname = usePathname()
//   return (
//     <div className="flex items-center gap-">
//       <ul className="flex gap-6" >
//         {
//           NavLink.map(links => {
//             return (
//               <li key={ links.href } className="text-muted font-semibold hover:text-muted-foreground dark:text-muted-foreground transition-colors duration-200 ease-linear" >
//                 <Link
//                   className={ `link ${pathname === links.href ? ' text-rose-700' : ''}` }
//                   href={ links.href } >
//                   { links.name }

//                 </Link>
//               </li>
//             )
//           })
//         }
//       </ul>
//       <ModeToggle />
//     </div >
//   )
// }
