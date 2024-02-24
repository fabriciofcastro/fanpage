'use client'

import style from '@/pages/minhasTechs/minhas-techs.module.scss'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import techs from './techs'

const MyTechs = () => {
  return (

    <div className={ style.container }>

      <section className={ style.header_skills }>
        <div className={ style.skills_logo }>
          <Image src={ Logo } alt='Logo poligno' />
          <h1 className={ style.hardSkill }>
            <span className={ style.hard }>
              Hard 
            </span>
              Skill
           
          </h1>
        </div>
        <p>
          Aqui está algumas das minhas competências
        </p>

      </section>
    
      <section className={ style.techs }>
        {
          techs.map((tech, index) => {
            return (
              <div className={ style.contentTechs } key={ index } >
                <span>{ tech.tech }</span>
                <Image src={ tech.image } alt='Imagens que ilustra nível de competência de hard skill' />
              </div>
            )
          }) 
        } 
      </section>
    </div >
  )
}

export default MyTechs