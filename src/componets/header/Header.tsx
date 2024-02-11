'use client'

import style from '@/componets/header/header.module.scss'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className={style.nav}>
      <div className={style.logo}>
        <Image className={style.logo_image} src={Logo} alt='LOGO POLIGNO' />
        <span>Fabrício Castro</span>
      </div>
      <nav>
        <ul className={style.nav_ul}>
          <li>
            <Link className={style.Link} href='#'>HOME</Link>
          </li>
          <li>
            <Link className={style.Link} href='#'>SOBRE</Link>
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
