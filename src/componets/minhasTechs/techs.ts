import { StaticImageData } from 'next/image'

import nivel_1 from '@/assets/nivel-1.png'
import nivel_2 from '@/assets/nivel-2.png'
import nivel_3 from '@/assets/nivel-3.png'
import nivel_4 from '@/assets/nivel-4.png'
import nivel_5 from '@/assets/nivel-5.png'


import { DiCss3, DiHtml5, DiJsBadge, DiSass } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
import { SiStyledcomponents } from "react-icons/si";
import { FaGitAlt, FaSquareGithub } from "react-icons/fa6";
import { Icons } from 'next/dist/lib/metadata/types/metadata-types'




interface TechsProps {
  tech: string
  image: StaticImageData
}

export const techs: TechsProps[] = [
  {
    tech: 'HTML',
    image: nivel_4,
  },
  {
    tech: 'CSS',
    image: nivel_4,
  },
  {
    tech: 'Javascript',
    image: nivel_3,

  },
  {
    tech: 'React',
    image: nivel_3,
  },
  {
    tech: 'Next',
    image: nivel_3,
  },
  {
    tech: 'Figma',
    image: nivel_2
  },

  {
    tech: 'styled-components',
    image: nivel_3
  },
  {
    tech: 'GITHUB',
    image: nivel_3
  },
  {
    tech: 'GIT',
    image: nivel_3
  },
  {
    tech: 'typescript',
    image: nivel_2
  },
  {
    tech: 'JAVA',
    image: nivel_1
  },
  {
    tech: 'Redux Toolkit',
    image: nivel_2
  },
]