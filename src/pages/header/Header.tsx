'use client'

import { IoIosMenu } from "react-icons/io";
import style from '@/pages/header/header.module.scss'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={ style.header }>
      <div className={ style.logo }>
        <Link href="/" >
          <Image className={ style.logo_image } src={ Logo } alt='LOGO POLIGNO' />
        </Link>
        <Link href="/" >
          <span>Fabrício Castro</span>
        </Link>

      </div>
      <IoIosMenu className={ style.menu_responsive } />
      <nav className={style.tag_nav}>

        <ul className={ style.nav_ul }>
          <li>
            <Link className={ style.Link } href='/'>HOME</Link>
          </li>
          <li>
            <Link className={ style.Link } href='/about'>SOBRE</Link>
          </li>
          <li>
            <Link className={ style.Link } href='#'>PORTIFOLIO</Link>
          </li>
          <li>
            <Link className={ style.Link } href='/contact'>CONTATO</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header