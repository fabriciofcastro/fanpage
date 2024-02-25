'use client'

import Image from 'next/image'
import style from './about.module.scss'
import avatar from '@/assets/avatar.png'
import Link from 'next/link'
import { FaCode } from "react-icons/fa";


import React from 'react'

const Page = () => {
  return (
    <section className={style.about} id="about">

      <section className={ style.about_img }>
        <Image src={ avatar } alt="Imagem do Fabrício desenvolvedor" className={style.image}/>
      </section>

      <section className={ style.about_content }>
        <h2 className={ style.heading }> SOBRE <span>MIM</span>  </h2>
        <h3>Front-end developer </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis autem quae nemo officiis molestiae earum odit facere, delectus iure odio repudiandae porro voluptates. Cum et laborum, doloribus quae eaque voluptates.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore amet quae, odit sequi excepturi tenetur qui dignissimos vel at aliquam blanditiis ipsa praesentium quia incidunt, perferendis veniam laboriosam ipsam dolore.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui eum quis laudantium sit aliquid nam tempore laborum officia nostrum consequuntur natus, sequi fugit nisi ratione voluptate nobis perspiciatis ipsam?
        </p>
       
      </section>

    </section>
  )
}

export default Page