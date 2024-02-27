import Link from 'next/link'
import style from './footer.module.scss'
import { FaArrowUp } from "react-icons/fa";

export const Footer = () => {

  const date = new Date()

  return (
    <footer className={ style.footer }>
      <section className={ style.footer_text }>
        <p>
          Copyright &copy; { date.getFullYear() } | Todos os direitos resenvados
        </p>
      </section>
      <section className={ style.iconTop }>
        <Link href="/" className={style.ir_top}>
          <FaArrowUp size={20}/>
        </Link>

      </section>
    </footer>
  )
}
