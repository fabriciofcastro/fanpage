import { StaticImageData } from 'next/image'

import nivel_1 from '@/assets/nivel-1.png'
import nivel_2 from '@/assets/nivel-2.png'
import nivel_3 from '@/assets/nivel-3.png'
import nivel_4 from '@/assets/nivel-4.png'
import nivel_5 from '@/assets/nivel-5.png'
import html from '../../assets/iconskill/html.svg'
import css from '../../assets/iconskill/css.svg'
import js from '../../assets/iconskill/javascript.svg'
import react from '../../assets/iconskill/react.svg'
import next from '../../assets/iconskill/next.svg'
import figma from '../../assets/iconskill/figma.svg'
import styled from '../../assets/iconskill/styled-components.png'
import java from '../../assets/iconskill/java.svg'
import terminal from '../../assets/iconskill/terminal.svg'
import typescript from '../../assets/iconskill/typescript.svg'
import git from '../../assets/iconskill/git.svg'
import python from '../../assets/iconskill/python.svg'
import github from '../../assets/iconskill/github.svg'
import redux from '../../assets/iconskill/redux.svg'
import tailwind from '../../assets/iconskill/tailwindcss.svg'
import sql from '../../assets/iconskill/sql-server.svg'
import sass from '../../assets/iconskill/sass.svg'
import fedora from '../../assets/iconskill/fedora.png'

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