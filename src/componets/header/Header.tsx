import style from '@/componets/header/header.module.css'
import Image from 'next/image'
import Logo from '../../../public/logo.svg'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className={style.nav}>
      <div className={style.logo}>
        <Image src={Logo} alt='LOGO POLIGNO' />
        <span>Fabrício Castro</span>
      </div>
      <nav>
        <ul className={style.nav_ul}>
          <li>
            <Link href='#'>HOME</Link>
          </li>
          <li>
            <Link href='#'>SOBRE</Link>
            
          </li>
          <li>
            <Link href='#'>PORTIFOLIO</Link>
          </li>
          <li>
            <Link href='#'>CONTATO</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
