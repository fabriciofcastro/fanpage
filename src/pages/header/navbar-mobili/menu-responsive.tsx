import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerTrigger
} from "@/components/ui/drawer"
import { SquareMenu, X } from "lucide-react"
import NavbarMobile from "./navbarMobili"

export default function MenuResponsive() {
  return (
    <Drawer direction='left'>
      <DrawerTrigger>
        <SquareMenu />
      </DrawerTrigger>
      <DrawerOverlay />
      <DrawerContent className=" flex flex-col h-full w-[400px] mt-24 fixed bottom-0 right-0">
        <DrawerHeader className="flex justify-between">
          <Logo />
          <DrawerClose >
            <Button className="border p-0 h-0"  >
              <X className="bg-rose-900 rounded-full" />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <NavbarMobile />
      </DrawerContent>
    </Drawer>

  )
}
