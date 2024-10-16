import { LucideIcon, BicepsFlexed, CloudCog, Construction, GraduationCap, Inbox, NotebookTabs, PanelsTopLeft } from "lucide-react";

interface LinksProps {
  title: string;
  label?: string;
  icon:  LucideIcon
  variant: string
  href: string;

}

 const Links: LinksProps[]  = [
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
  {
    title: "SaaS",
    label: "",
    icon: CloudCog,
    variant: "ghost",
    href: "/saas"
  },
] 
export default Links