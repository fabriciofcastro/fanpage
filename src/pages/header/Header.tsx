'use client'

import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import style from '@/pages/header/header.module.css'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import Link from 'next/link'
import { useState } from "react";
import { MoonStars, SunDim } from "@phosphor-icons/react";
import { useTheme } from "next-themes";


const Header = () => {


  const [isLightDark, setIsLightDark] = useState(() => true)
  const [isMenu, setIsMenu] = useState(() => false)
  const { setTheme } = useTheme()

  function menuResponviso (): void {
    setIsMenu((menu) => !menu)
  }

  function lightDark() {
    isLightDark ? setTheme("light") : setTheme("dark")
    setIsLightDark((isLightDark) => !isLightDark) 
  }



  return (
    <header className={ `${style.header}` }>
      <div className={ style.logo }>
        <Link href="/" > 
          <Image className={ style.logo_image } src={ Logo } alt='Logo Hexágono' />
        </Link>
        <Link href="/" className={style.texto_logo} >
          Fabrício Castro
        </Link>

      </div>

      <IoIosMenu className={` ${style.menu_responsive} ${isMenu ? "" : style['display']} `}  onClick={ menuResponviso } />

      <div className={ style.icontheme }>

        <SunDim className={ `${style.iconlight} ${isLightDark ? style['visibility'] : style['hidden']}` } onClick={ lightDark } />

        <MoonStars className={ `${style.icondark}  ${isLightDark ? style['hidden'] : style['visibility']}` } onClick={ lightDark } />

      </div>

      <nav className={ `${style.tag_nav} ${isMenu ? style['display'] : ""} `}>
        
        <MdClose className={ `${style.menu_close} ${isMenu ? style['display'] : ""} `} onClick={menuResponviso}  />


       
        <ul className={ style.nav_ul }>
          <li>
            <Link className={ style.Link } href='/'>HOME</Link>
          </li>
          <li>
            <Link className={ style.Link } href='/about'>SOBRE</Link>
          </li>
          <li>
            <Link className={ style.Link } href='/#skills'>SKILLS</Link>
          </li>
          <li>
            <Link className={ style.Link } href='/#portfolio'>PORTFÓLIO</Link>
          </li>

          <li>
            <Link className={ style.Link } href='/contact'>CONTATO</Link>
          </li>

          <li>
            <Link className={ style.Link } href='/blog'>BLOG</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header