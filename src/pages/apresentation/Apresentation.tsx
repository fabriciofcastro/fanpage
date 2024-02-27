'use client'

import style from '@/pages/apresentation/apresentation.module.scss'
import Foto from '@/assets/Home_art 1.svg'
import Image from 'next/image'
import { MdDownload } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa6"
import Link from 'next/link'


const Apresentation = () => {
  return (
    <div className={ style.container }>
      <section className={ style.saltation_text }>
        <div className={ style.text }>
          <h5>Olá!</h5>
          <h1>EU SOU DESENVOLVEDOR</h1>
          <h1>FRONT-END</h1>
          <h5>Seja bem-vindo ao meu website</h5>
        </div>
        
        <section className={style.down_btn}>
          
          <section className={style.down_cv}>
            <span>Download CV</span>
            <MdDownload />
          </section>

          <Link href="/about" className={ style.button } type='button'>
          Saiba mais sobre mim
        </Link>
        </section>
        

        

        <section className={ style.social }>
          <Link className={style.social_icon} href='https://www.linkedin.com/in/fabriciofcastro/' target='_blank'> <FaLinkedin /></Link>
          <Link className={style.social_icon} href='https://github.com/fabriciofcastro' target='_blank'> <FaGithub /></Link>
        </section>
      </section>
      <section className={ style.foto }>
        <Image src={ Foto } alt='Imagem do desenvolvedor' className={style.image_dev} />
      </section>

    </div>
  )
}

export default Apresentation