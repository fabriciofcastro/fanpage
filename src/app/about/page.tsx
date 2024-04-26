
import Image from 'next/image'
import style from './about.module.css'
import avatar from '@/assets/fabricio2.png'
import { Metadata } from 'next'
import { GithubLogo, LinkedinLogo, MicrosoftOutlookLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'


export const metadata: Metadata = {
 description: "descrição about",
 title: "Sobre",
}

const Page = () => {
  return (
    <section className={style.about} >

      <section className={ style.about_img }>
        
        <div className={style.container_image}>
          <Image src={ avatar } alt="Imagem do Fabrício desenvolvedor" className={style.image_dev}/>
        </div>
        

          <div className={style.icon_social}>
          <GithubLogo />
           <LinkedinLogo />
           <MicrosoftOutlookLogo />
           <WhatsappLogo />
          </div>
        
      </section>

      <section className={ style.about_content }>
        <h2 className={ style.heading }> SOBRE <span>MIN</span>  </h2>
        <h3>Front-end developer </h3>
        <p>
          Sou um entusiasta apaixonado pelo mundo do desenvolvimento front-end. Desde que entrei em contato com a magia da criação de interfaces digitais, tenho buscado incansavelmente aprimorar minhas habilidades e conhecimentos nesta área  emocionante além proporcionar conhecimentos paralelos.
          </p>
          <p>
          Minha jornada começou com um fascínio pelo design e pela interatividade dos sites que eu visitava, o que me levou a explorar o universo do desenvolvimento web. Desde então, mergulhei de cabeça em aprender as linguagens fundamentais, como HTML, CSS e JavaScript, Reactjs, Nextjs absorvendo tudo o que podia por meio de cursos online, projetos pessoais e experiências práticas.
          </p>
          <p>
          Além das habilidades técnicas, também valorizo muito a colaboração e a comunicação eficaz. Acredito que o trabalho em equipe é essencial para o sucesso de qualquer projeto, e estou sempre disposto a contribuir com ideias e soluções criativas para alcançar os objetivos da equipe.
        </p>
        <p>
          Estou animado com a oportunidade de aplicar minhas habilidades e conhecimentos em um ambiente profissional, onde posso contribuir para projetos desafiadores e fazer parte de uma equipe que compartilha minha paixão pela criação de experiências digitais excepcionais.
        </p>
        <p>
          Se você está em busca de um desenvolvedor front-end dedicado, motivado e pronto para enfrentar novos desafios, adoraria ter a oportunidade de conversar mais sobre como posso contribuir para o sucesso da sua equipe.
        </p>
       
      </section>

    </section>
  )
}

export default Page