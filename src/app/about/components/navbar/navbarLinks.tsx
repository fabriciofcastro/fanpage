//** @format */

"use client"

import {
  AlertCircle,
  Archive,
  ArchiveX,
  ChevronLeft,
  ChevronRight,
  File,
  Inbox,
  Send,
  Trash2,
  LayoutDashboard,
  NotebookTabs,
  GraduationCap,
  BicepsFlexed,
} from "lucide-react"
import { Nav } from "./navbar-about"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function NavbarLinks() {

  const [isCollapsed, setIsCollapsed] = useState(true)
  
  function handleCollapsed() {
    setIsCollapsed(() => !isCollapsed)
  }
  return (
    <Card className="max-md:hidden">
    <div className="px-3 pt-3">
      <Button
      className="rounded-full p-0 h-7 w-7 ml-3"
        variant="secondary"
        onClick={handleCollapsed}
      >
        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </Button>
      <Nav isCollapsed={isCollapsed}
            links={[
              {
                title: "Sobre mim",
                label: "",
                icon: Inbox,
                variant: "ghost",
                href: "/about"
              },
              {
                title: "Skills",
                label: "",
                icon: BicepsFlexed,
                variant: "ghost",
                href: "/about/skills"
              },
              {
                title: "Formação",
                label: "",
                icon: GraduationCap ,
                variant: "ghost",
                href: "/about/academic"
              },
              {
                title: "Contato",
                label: "",
                icon: ArchiveX,
                variant: "ghost",
                href: "/about/contact"
              },
              {
                title: "Trash",
                label: "",
                icon: Trash2,
                variant: "ghost",
                href: "#"
              },
              {
                title: "Contato",
                label: "",
                icon: NotebookTabs,
                variant: "ghost",
                href: "#"
              },
            ]}
          />
    </div>
    </Card>
  )
}
