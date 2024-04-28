'use client'

import style from '@/pages/minhasTechs/minhasTechs.module.css'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import techs from '../../components/items/techs'

const MyTechs = () => {
  return (

    <div className={ style.container } id="skills">

      <section className={ style.header_skills }>
        <div className={ style.skills_logo }>
          <Image src={ Logo } alt='Logo hexagono' />
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
                <div className={ style.skills_logo_title }>
                  <Image src={ tech.IconStack } alt="" className={style.logo_svg} />
                  <span className={ style.title_stacks }>  { tech.tech }</span>

                </div>


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