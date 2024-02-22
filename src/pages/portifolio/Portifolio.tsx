import Button from '@/components/buttons_portifolio/Button'
import style from '@/pages/portifolio/portifolio.module.scss'
import { itemsPortifolio } from './items.potifolio'
import Image from 'next/image'
import Link from 'next/link'


const Portifolio = () => {
  return (
    <div className={ style.container }>
      <section className={ style.header_portifolio }>
        <h1>Meu Portifólio</h1>
        <span>Estes são alguns dos trabalhos e projetos que já trabalhei</span>
      </section>
      <section className={ style.buttonPortifolio }>
        <Button />
      </section>

      <section className={ style.grid_projetos }>
        {
          itemsPortifolio.map((item, index) => {
            return (
              <div key={index } className={ style.grid_mosaico }>
                <Link href={ item.url } >
                  <Image src={ item.image } alt='' className={ style.image }/>
                  <h3>{ item.title }</h3>
                </Link>
              </div>
            )
          })
        }

      </section>
    </div>
  )
}

export default Portifolio