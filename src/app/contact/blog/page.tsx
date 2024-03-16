import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Blog de tecnoligia",
  description: "Bem-vindos ao blog! Aqui você ficará informado sobre o munda da tecnologia."
}

const Blog = () => {
  return (
    <div>

        <h1>Blog sobre tecnologia</h1>

        <h3>Em breve</h3>
      <p>Conteúdos adversos do mundo da tecnologia</p>
      </div>
  )
}

export default Blog