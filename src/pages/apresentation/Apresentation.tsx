
import style from '@/pages/apresentation/apresentation.module.css'
import Foto from '@/assets/fabricio.png'
import Image from 'next/image'
import { MdDownload } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa6"
import Link from 'next/link'
import { Metadata } from 'next';

const Apresentation = () => {
  return (
    <div className={ style.container } id="top">
      
      <section className={ style.saltation_text }>
        <div className={ style.text }>
          <h5>Olá!</h5>
          <h1 data-text="EU SOU" >EU SOU </h1>
          <h1 data-yartext="DESENVOLVEDOR">DESENVOLVEDOR</h1>  
          <h1 data-text="FRONT-END"> FRONT-END</h1> 
          
          <p>Seja bem-vindo ao meu website</p>
        </div>

        <section className={ style.down_btn }>

          <Link href="/cv_fabricio.pdf" target="_blank" passHref className={ style.down_cv }>
            Download CV
            <MdDownload />
          </Link>

          <Link href="/about" className={ style.button } type='button'>
            Saiba mais 
          </Link>
        </section>
        <section className={ style.social }>
          <Link className={ style.social_icon } href='https://www.linkedin.com/in/fabriciofcastro/' target='_blank'> <FaLinkedin /></Link>
          <Link className={ style.social_icon } href='https://github.com/fabriciofcastro' target='_blank'> <FaGithub /></Link>
        </section>
      </section>

      <section className={ style.foto }>
        <Image src={ Foto } alt='Imagem do desenvolvedor' className={ style.image_dev } />
      </section>

    </div>
  )
}

export default Apresentation