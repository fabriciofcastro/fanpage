"use client"

import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Links from "./Links"

interface NavProps {
  isCollapsed: boolean
}

export function Nav({ isCollapsed }: NavProps) {

  const pathname = usePathname()
  return (
    <TooltipProvider>
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2 "
    >
      <nav className="grid gap-1 space-y-2 px-2 group-[[data-collapsed=true]]:justify-center  group-[[data-collapsed=true]]:px-2 mt-12 ">
          { Links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={2}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  className={cn(
                    buttonVariants({ variant: link.href === pathname ? "default" : "secondary" , size: "icon" }),
                    `h-9 w-9 `,
                    link.variant === "default"  &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                  )}
                >
                  <link.icon className="h-4 w-4 " />
                  <span className="sr-only ">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4 transition-all ">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground ">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={link.href}
              className={cn(
                buttonVariants({ 
                  variant: link.href === pathname ? "default" : "secondary", size: "sm" }),
                  link.variant === "default" &&
                   "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white", 
                   `justify-start px-4 `
              )}
            >
              <link.icon className="mr-2 h-4 w-4 " />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto ",
                    link.variant === "default" &&
                      "text-background dark:text-white"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          )
        )}
      </nav>
    </div>
  
    </TooltipProvider>
  )
}
