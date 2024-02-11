import style from '@/componets/apresentation/apresentation.module.scss'
import Foto from '@/assets/Home_art 1.svg'
import Image from 'next/image'

export const Apresentation = () => {
  return (
    <div className={ style.container }>
      <section className={ style.salutation_text }>
        <div className={ style.text }>
          <h5>Olá!</h5>
          <h1>EU SOU DESENVOLVEDOR</h1>
          <h1>FRONT-END</h1>
          <h5>Seja bem-vindo ao meu website</h5>
        </div>
        <button className={ style.button } type='button'>
          Saiba mais sobre mim
        </button>

        <div className={ style.social }></div>
      </section>
      <section className={ style.foto }>
        <Image src={ Foto } alt='Imagem do desenvolvedor' width={ 450 } />
      </section>

    </div>
  )
}
