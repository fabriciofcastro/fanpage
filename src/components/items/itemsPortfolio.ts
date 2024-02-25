import img1 from '@/assets/portfolio1.jpg'
import img2 from '@/assets/portfolio2.jpg'
import img3 from '@/assets/portfolio3.jpg'
import img4 from '@/assets/portfolio4.jpg'
import img5 from '@/assets/portfolio5.jpg'
import img6 from '@/assets/portfolio6.jpg'
import { StaticImageData } from 'next/image'

interface itemsPortfolioProps {
  title: string
  category: string
  image: StaticImageData
  url: string
}

 const itemsPortfolio: itemsPortfolioProps[] = [
  {
    category: 'web',
    title: 'Transportadora',
    image: img1,
    url: '',
  },
  {   
    category: 'web',
    title: 'Transportadora',
    image: img2,
    url: '',
  },
  {
    category: 'web',
    title: 'Transportadora',
    image: img3,
    url: '',
  },
  {
    category: 'web',
    title: 'Transportadora',
    image: img4,
    url: '',
  },{
    category: 'web',
    title: 'Transportadora',
    image: img5,
    url: '',
  },{
    category: 'web',
    title: 'Transportadora',
    image: img6,
    url: '',
  }
]

export default itemsPortfolio