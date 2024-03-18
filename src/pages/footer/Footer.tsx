import Link from 'next/link'
import style from './footer.module.css'
import { FaArrowUp } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Footer = () => {

  const date = new Date()

  return (
    <footer className={ style.footer } >
      <section className={ style.footer_text }>
        <span> Dev  </span> 
        <FaCode /> <span>{ date.getFullYear() }</span> 
        <span>| Todos os direitos resenvados</span> 
        
      </section>
      <section className={ style.iconTop } id="#top">
        <Link href="/" className={style.ir_top}>
          <FaArrowUp size={20}/>
        </Link>

      </section>
    </footer>
  )
}

export default Footer