
import style from '@/pages/portfolio/portfolio.module.css'
import itemsPortfolio from '../../components/items/itemsPortfolio'
import Image from 'next/image'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <section className={ style.container }>
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

      <section className={ style.portfolio_container }>
        {
          itemsPortfolio.map((item, index) => {
            return (
              <section key={ index } className={ style.portfolio_box }>

                <Image src={ item.image } alt='' className={ style.image } />


                <div className={ style.portfolio_layer }>
                  <Link href={ item.url } >
                    <h1>{ item.title }</h1>
                  </Link>
                </div>

              </section>
            )
          })
        }
      </section>
    </section>
  )
}

export default Portfolio