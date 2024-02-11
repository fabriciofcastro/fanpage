import style from '@/componets/minhasTechs/minhas-techs.module.scss'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import { techs } from './techs'
const { uuid } = require('uuidv4');

export const MinhasTechs = () => {
  return (

    <div className={ style.container }>

      <section className={ style.logo }>
        <Image src={ Logo } alt='Logo poligno' />

        <h1>Fabrício <span className={ style.sobrenome }>Castro</span></h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa velit repellendus eaque
          laudantium ab. Odio sapiente maxime omnis alias minus enim a obcaecati officia, necessitatibus
          nesciunt dolorum rem, eaque earum.
        </p>

        <h1 className={ style.hardSkill }>
          <span className={ style.skill }>Hard </span>Skill
        </h1>
      </section>

      <section className={ style.techs }>
        {
          techs.map(tech => {
            return (
              <div className={ style.contentTechs } key={ uuid() } >
                <span>{tech.tech}</span>
                <Image src={ tech.image } alt='' />
              </div>
            )
          })
        }
      </section>
    </div >
  )
}
