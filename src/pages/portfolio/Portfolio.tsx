
import style from '@/pages/portfolio/portfolio.module.scss'
import { itemsPortfolio } from './itemsPortfolio'
import Image from 'next/image'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={ style.container }>
      <section className={ style.header_portfolio }>
        <section className={ style.title }>
          <span className={ style.text_my }>Meu</span><br />
          <span className={ style.text_portfolio }>Portifólio</span>
        </section>
        <section className={ style.descricao_portifolio }>
          <span>Estes são alguns dos trabalhos e</span>  <br />
          <span>projetos que já realizei</span>
        </section>
      </section>

      <section className={ style.grid_portfolio }>
        {
          itemsPortfolio.map((item, index) => {
            return (
              <section key={ index } className={style.box_project}>
                <Link href={ item.url } >
                  <Image src={ item.image } alt='' className={ style.image } />
                  <h1>{ item.title }</h1>
                </Link>
              </section>
            )
          })
        }
      </section>
    </div>
  )
}

export default Portfolio