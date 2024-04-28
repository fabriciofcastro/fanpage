import { StaticImageData } from 'next/image'

import nivel_1 from '@/assets/nivel-1.png'
import nivel_2 from '@/assets/nivel-2.png'
import nivel_3 from '@/assets/nivel-3.png'
import nivel_4 from '@/assets/nivel-4.png'
import nivel_5 from '@/assets/nivel-5.png'
import html from '../../assets/iconskill/file-html.svg'
import css from '../../assets/iconskill/icons8-css.svg'
import js from '../../assets/iconskill/icons8-javascript.svg'
import react from '../../assets/iconskill/icons8-react-js.svg'
import next from '../../assets/iconskill/icons8-nextjs.svg'
import figma from '../../assets/iconskill/icons8-figma.svg'
import styled from '../../assets/iconskill/styled-components-svgrepo-com.svg'
import java from '../../assets/iconskill/icons8-java.svg'
import terminal from '../../assets/iconskill/terminal-box-svgrepo-com.svg'
import typescript from '../../assets/iconskill/icons8-typescript.svg'
import git from '../../assets/iconskill/icons8-git.svg'
import python from '../../assets/iconskill/icons8-python.svg'
import github from '../../assets/iconskill/icons8-github.svg'
import redux from '../../assets/iconskill/redux-svgrepo-com.svg'
import tailwind from '../../assets/iconskill/icons8-tailwind-css.svg'
import sql from '../../assets/iconskill/icons8-sql-server.svg'
import sass from '../../assets/iconskill/icons8-sass.svg'
import fedora from '../../assets/iconskill/icons8-fedora-48.png'

interface TechsProps {
  tech: string
  image: StaticImageData
  IconStack: StaticImageData
}

const techs: TechsProps[] = [
  {
    tech: 'HTML',
    image: nivel_4,
    IconStack: html,
  },
  {
    tech: 'CSS',
    image: nivel_4,
    IconStack: css
  },
  {
    tech: 'Javascript',
    image: nivel_3,
    IconStack: js
  },
  {
    tech: 'React.js',
    image: nivel_3,
    IconStack: react
  },
  {
    tech: 'Next.js',
    image: nivel_3,
    IconStack: next
  },
  {
    tech: 'Python',
    image: nivel_2,
    IconStack: python
  },
  {
    tech: 'Figma',
    image: nivel_2,
    IconStack: figma
  },

  {
    tech: 'styled-components',
    image: nivel_2,
    IconStack: styled
  },
  {
    tech: 'GITHUB',
    image: nivel_3,
    IconStack: github
  },
  {
    tech: 'GIT',
    image: nivel_3,
    IconStack: git
  },
  {
    tech: 'Typescript',
    image: nivel_2,
    IconStack: typescript
  },
  {
    tech: 'JAVA',
    image: nivel_1,
    IconStack: java
  },
  {
    tech: 'Redux Toolkit',
    image: nivel_1,
    IconStack: redux
  },
  {
    tech: 'Tailwind',
    image: nivel_1,
    IconStack: tailwind
  },
  {
    tech: 'Sass',
    image: nivel_2,
    IconStack: sass
  },
  {
    tech: 'SQL SERVER',
    image: nivel_1,
    IconStack: sql
  },
  {
    tech: 'Linux',
    image: nivel_2,
    IconStack: fedora
  },
  {
    tech: 'Terminal',
    image: nivel_2,
    IconStack: terminal
  },
 
]

export default techs