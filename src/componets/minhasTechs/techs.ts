import nivel_1 from '@/assets/nivel-1.png'
import nivel_2 from '@/assets/nivel-2.png'
import nivel_3 from '@/assets/nivel-3.png'
import nivel_4 from '@/assets/nivel-4.png'
import nivel_5 from '@/assets/nivel-5.png'
import { StaticImageData } from 'next/image'

interface ImageProps {
  Image: StaticImageData 
}

export const techs = [
  {
    tech: 'HTML',
    image: nivel_4
  },
  {
    tech: 'CSS',
    image: nivel_4
  },
  {
    tech: 'Javascript',
    image: nivel_3
  },
  {
    tech: 'React',
    image: nivel_3
  },
  {
    tech: 'Next',
    image: nivel_3
  },

  {
    tech: 'Figma',
    image: nivel_2
  },

  {
    tech: 'styled-components',
    image: nivel_3
  },
]