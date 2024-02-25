'use client'

import { IoIosMenu } from "react-icons/io";
import style from '@/pages/header/header.module.scss'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import Link from 'next/link'

const Header = () => {
  return (
    <div className={style.nav}>
      <div className={style.logo}>
        <Image className={style.logo_image} src={Logo} alt='LOGO POLIGNO' />
        <span>Fabrício Castro</span>
      </div>
      <IoIosMenu className={style.menu_responsive}/>
      <nav>
      
        <ul className={style.nav_ul}>
          <li>
            <Link className={style.Link} href='/'>HOME</Link>
          </li>
          <li>
            <Link className={style.Link} href='/about'>SOBRE</Link>
          </li>
          <li>
            <Link className={style.Link} href='#'>PORTIFOLIO</Link>
          </li>
          <li>
            <Link className={style.Link} href='#'>CONTATO</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header