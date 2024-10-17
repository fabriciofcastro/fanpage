"use client"

import { Nav } from "@/app/about/components/navbar/navbar-about"
import {
  BicepsFlexed,
  Construction,
  GraduationCap,
  Inbox,
  NotebookTabs,
  PanelsTopLeft
} from "lucide-react"


export default function NavbarMobile() {


  return (
    <div className="px-3 pt-3">
      <Nav isCollapsed={ false }
      />
    </div>
  )
}
