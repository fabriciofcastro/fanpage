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
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react"
import { Nav } from "./navbar-about"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function NavbarLinks() {

  const [isCollapsed, setIsCollapsed] = useState(false)
  
  function handleCollapsed() {
    setIsCollapsed(() => !isCollapsed)
  }
  return (
    <Card>
    <div className="px-3 pt-3">
      <Button
      className="rounded-full p-0 h-7 w-7 ml-3"
        variant="secondary"
        onClick={handleCollapsed}
      >
        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </Button>
      <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Sobre mim",
                label: "",
                icon: Inbox,
                variant: "default",
                href: "/about"
              },
              {
                title: "Dashboard",
                label: "",
                icon: File,
                variant: "ghost",
                href: "/dashboard"
              },
              {
                title: "Sent",
                label: "",
                icon: Send,
                variant: "ghost",
                href: "#"
              },
              {
                title: "Junk",
                label: "",
                icon: ArchiveX,
                variant: "ghost",
                href: "#"
              },
              {
                title: "Trash",
                label: "",
                icon: Trash2,
                variant: "ghost",
                href: "#"
              },
              {
                title: "Archive",
                label: "",
                icon: Archive,
                variant: "ghost",
                href: "#"
              },
            ]}
          />
    </div>
    </Card>
  )
}
