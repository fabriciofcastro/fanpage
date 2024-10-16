//** @format */

"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { useState } from "react"
import { Nav } from "./navbar-about"

export default function NavbarLinks() {

  const [isCollapsed, setIsCollapsed] = useState(true)

  function handleCollapsed() {
    setIsCollapsed(() => !isCollapsed)
  }
  return (
    <Card className={`max-md:hidden transition-all relative duration-500 ${isCollapsed ? "w-20" : "w-64"}`}>
      <div className="px-3 pt-3 ">
        <Button
          className={` border border-white
            rounded-md transition-transform duration-300 ease-in-out
            absolute top-6 p-0 h-7 w-7 ml-3
            transform
            ${isCollapsed ? "translate-x-0 " : "translate-x-16"}
          `}
          variant="secondary"
          onClick={ handleCollapsed }
        >
          { isCollapsed ? <ChevronRight size={ 18 } /> : <ChevronLeft size={ 18 } /> }
        </Button>
        <Nav isCollapsed={ isCollapsed } />
      </div>
    </Card>
  )
}
