'use client'

import style from '@/pages/apresentation/apresentation.module.scss'
import Foto from '@/assets/Home_art 1.svg'
import Image from 'next/image'
import { FaLinkedin, FaGithub } from "react-icons/fa6"
import Link from 'next/link'


export const Apresentation = () => {
  return (
    <div className={ style.container }>
      <section className={ style.saltation_text }>
        <div className={ style.text }>
          <h5>Olá!</h5>
          <h1>EU SOU DESENVOLVEDOR</h1>
          <h1>FRONT-END</h1>
          <h5>Seja bem-vindo ao meu website</h5>
        </div>
        <button className={ style.button } type='button'>
          Saiba mais sobre mim
        </button>

        <section className={ style.social }>
          <Link href='#'> <FaLinkedin /></Link>
          <Link href='#'> <FaGithub /></Link>
        </section>
      </section>
      <section className={ style.foto }>
        <Image src={ Foto } alt='Imagem do desenvolvedor' width={620} className={style.image_dev} />
      </section>

    </div>
  )
}
