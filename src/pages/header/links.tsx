import Link from "next/link"
import { usePathname } from "next/navigation"
interface LinksProps {
  href: string
  name: string
}

const NavLink: LinksProps[] = [
  {
    name: 'HOME',
    href: '/',
  },
  {
    name: 'SOBRE',
    href: '/about',
  },

]

export default function Links() {

  const pathname = usePathname()
  return (
    <div>
      <ul className="flex gap-6" >
        {
          NavLink.map(links => {
            return (
              <li key={ links.href } className="text-muted font-semibold hover:text-muted-foreground dark:text-muted-foreground transition-colors duration-200 ease-linear" >
                <Link
                  className={ `link ${pathname === links.href ? ' text-rose-700' : ''}` }
                  href={ links.href } >
                  { links.name }

                </Link>
              </li>
            )
          })
        }
      </ul>
    </div >
  )
}
