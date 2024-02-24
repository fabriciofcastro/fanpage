import imgTransportadora from '@/assets/portfolio/web.webp'
import { StaticImageData } from 'next/image'

interface itemsPortfolioProps {
  title: string
  category: string
  image: StaticImageData
  url: string
}

 export const itemsPortfolio: itemsPortfolioProps[] = [
  {
    category: 'web',
    title: 'Transportadora',
    image: imgTransportadora,
    url: '',
  },
  {   
    category: 'web',
    title: 'Transportadora',
    image: imgTransportadora,
    url: '',
  },
  {
    category: 'web',
    title: 'Transportadora',
    image: imgTransportadora,
    url: '',
  },
  {
    category: 'web',
    title: 'Transportadora',
    image: imgTransportadora,
    url: '',
  },{
    category: 'web',
    title: 'Transportadora',
    image: imgTransportadora,
    url: '',
  },{
    category: 'web',
    title: 'Transportadora',
    image: imgTransportadora,
    url: '',
  },
]