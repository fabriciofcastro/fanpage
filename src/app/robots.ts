import { MetadataRoute } from 'next'

export default function robots():MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/public/',
    },
    sitemap: 'https://www.fabriciofcastro.com.br/sitemap.xml'
  }
}
