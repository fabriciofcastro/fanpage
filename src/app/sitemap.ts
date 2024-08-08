import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://www.fabriciofcastro.com.br/`,
      lastModified: new Date()
    },
    {
      url: `https://www.fabriciofcastro.com.br/about`,
      lastModified: new Date()
    },
    {
      url: `https://www.fabriciofcastro.com.br/about/skills`,
      lastModified: new Date()
    },
    {
      url: `https://www.fabriciofcastro.com.br/about/projects`,
      lastModified: new Date()
    },
    {
      url: `https://www.fabriciofcastro.com.br/about/academic`,
      lastModified: new Date()
    },
    {
      url: `https://www.fabriciofcastro.com.br/about/contact`,
      lastModified: new Date()
    },
    
    
  ]
}
