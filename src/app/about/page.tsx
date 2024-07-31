
import avatar from '@/assets/fabricio2.png'
import { Metadata } from 'next'
import Image from 'next/image'
import style from './about.module.css'

import Link from 'next/link'
import { PhoneIncoming, Github, Linkedin} from 'lucide-react';

export const metadata: Metadata = {
  description: "descrição about",
  title: "Sobre",
}

const Page = () => {
  return (
    <section className={ style.about } >

      <section className={ style.about_img }>

        <div className={ style.container_image }>
          <Image src={ avatar } alt="Imagem do Fabrício desenvolvedor" className={ style.image_dev } />
        </div>


        <div className={ style.icon_social }>
          <Link href="https://github.com/fabriciofcastro" >
            <Github />
          </Link>
          <Link href="https://www.linkedin.com/in/fabriciofcastro" >
            <Linkedin />
          </Link>
         
          <PhoneIncoming />
        </div>

        <div className={ style.steck }>

        </div>



      </section>

      <section className={ style.about_content }>
        <h2 className={ style.heading }> SOBRE <span>MIN</span>  </h2>
        <h3>Front-end developer </h3>
        <p>
        Sou Fabrício Castro, um entusiasta e desenvolvedor de SaaS com talento para criar soluções inovadoras. Com 1 ano de experiência no setor, aprimorei minhas habilidades em Web Design e design System, movido pela paixão por alavancar a tecnologia para resolver problemas do mundo real. Atualmente, estou explorando o Next.js, uma poderosa ferramenta para o desenvolvimento de aplicações web, que me permite criar experiências de usuário ricas e responsivas.


        </p>
        <p>
        Estou particularmente interessado nas funcionalidades de renderização do lado do servidor e geração de páginas estáticas que o Next.js oferece, pois isso me ajuda a otimizar o desempenho das aplicações e a melhorar a experiência do usuário. Além disso, a integração com APIs e a facilidade de manipulação de rotas me permitem construir soluções escaláveis e flexíveis para os desafios que enfrento.
        </p>
        <p>
        Busco constantemente aprender novas tecnologias e aprimorar minhas habilidades para me manter atualizado em um campo em rápida evolução. Estou animado com as possibilidades que o Next.js traz e ansioso para aplicá-lo em projetos futuros, onde posso continuar a resolver problemas e agregar valor aos usuários.
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