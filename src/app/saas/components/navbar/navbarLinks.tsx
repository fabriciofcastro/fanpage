//** @format */

"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { useState } from "react"
import { Nav } from "./navbar-saas"

export default function NavbarLinks() {

  const [isCollapsed, setIsCollapsed] = useState(true)

  function handleCollapsed() {
    setIsCollapsed(() => !isCollapsed)
  }
  return (
    <Card className={`max-md:hidden transition-all relative duration-300 ${isCollapsed ? "w-20" : "w-64"}`}>
      <div className="px-3 pt-3">
        <Button
          className="rounded-full p-0 h-7 w-7 ml-3"
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
