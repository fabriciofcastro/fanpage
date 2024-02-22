import imgTransportadora from '@/assets/portifolio/web.webp'
import { StaticImageData } from 'next/image'

interface itemsPortifolioProps {
  title: string
  category: string
  image: StaticImageData
  url: string
}

export const itemsPortifolio: itemsPortifolioProps[] = [
  {
    category: 'web',
    title: 'Transportadora',
    image: imgTransportadora,
    url: ''
  },
  {
    category: 'web',
    title: 'Transportadora',
    image: imgTransportadora,
    url: ''
  },
  {
    category: 'web',
    title: 'Transportadora',
    image: imgTransportadora,
    url: ''
  },
  {
    category: 'web',
    title: 'Transportadora',
    image: imgTransportadora,
    url: ''
  },{
    category: 'web',
    title: 'Transportadora',
    image: imgTransportadora,
    url: ''
  },{
    category: 'web',
    title: 'Transportadora',
    image: imgTransportadora,
    url: ''
  },
]