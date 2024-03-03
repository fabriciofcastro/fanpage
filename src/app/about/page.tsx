'use client'

import Image from 'next/image'
import style from './about.module.css'
import avatar from '@/assets/fabricio2.png'


import React from 'react'

const Page = () => {
  return (
    <section className={style.about} >

      <section className={ style.about_img }>
        <Image src={ avatar } alt="Imagem do Fabrício desenvolvedor" className={style.image}/>
      </section>

      <section className={ style.about_content }>
        <h2 className={ style.heading }> SOBRE <span>EU</span>  </h2>
        <h3>Front-end developer </h3>
        <p>
          Atualmente estou em fase de transição de carreira. Busco uma oportunidade na área de desenvolvimento, especificamente como front-end para colocar em prática meus conhecimentos, aprender e contribuir junto a vossa empresa. Estou extremamente motivado e apaixonado pela área!
          Fui proprietário na Loja de Informática Inforleste por 12 anos, desde jovem sempre me interessei e admirei o mundo da tecnologia e essa experiência me possibilitou entender o quanto a vida de um empresário é desafiadora, pois além das tarefas administrativas, também executava a parte operacional: manutenção em hardwares, instalação de softwares, redes, visitas presenciais em clientes, assistência remota, dentre outras funções relacionadas à área, sempre visando a satisfação do cliente. Muitos são amigos até o presente momento.
          </p>
          <p>
          Trabalhei nos últimos meses com o desenvolvimento de uma plataforma de (LMS) treinamentos corporativos online para executivos e colaboradores. O desenvolvimento aconteceu plataforma Bubble no code. Encarregado de criar páginas, layouts e responsivos, foi uma tarefa inicialmente tanto desafiadora por não saber nada sobre o conceito no code, devido meus conhecimentos em HTML, CSS e JS foi o diferencia no meu aprendizado por utilizar os mesmos conceitos de codificação. E junto com alguns colegas, estamos desenvolvendo um sistema que facilita a conversão de habitações brasileiras,  para condução em Portugal, também via Bubble. Se desejar consultar maiores detalhes deste trabalho, apresentarei com o maior prazer. 
          </p>
          <p>
          Comecei a estudar por conta própria desenvolvimento Web no início de 2023, iniciando 2024 na graduação de análise e desenvolvimento de sistema pela universidade Fiap, atualmente sou capaz de contruir interfaces utilizando HTML, CSS (sass, styled-componestent, css module), Javascript, React.js e Next.js.  Iniciei recentemente a estudar com axios, Redux.js 
        </p>
       
      </section>

    </section>
  )
}

export default Page