"use client"

import { Nav } from "@/app/about/components/navbar/navbar-about"
import {
  BicepsFlexed,
  GraduationCap,
  Inbox,
  NotebookTabs,
  PanelsTopLeft,
  Trash2,
  Construction
} from "lucide-react"

export default function NavbarMobile() {


  return (
    <div className="px-3 pt-3">
      <Nav 
        isCollapsed={ false }
        links={ [
          {
            title: "Home",
            label: "",
            icon: Inbox,
            variant: "ghost",
            href: "/"
          },
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
            icon: GraduationCap,
            variant: "ghost",
            href: "/about/academic"
          },
          {
            title: "Projetos",
            label: "",
            icon: PanelsTopLeft,
            variant: "ghost",
            href: "/about/projects"
          },
          {
            title: "Serviços",
            label: "",
            icon: Construction,
            variant: "ghost",
            href: "/about/services"
          },
          {
            title: "Contato",
            label: "",
            icon: NotebookTabs,
            variant: "ghost",
            href: "/about/contact"
          },
        ] }
      />
    </div>
  )
}
