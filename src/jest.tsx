'use client'

import { useState } from 'react'

const Jest = () => {
  
  const [text, setText] = useState(() => "estado normal")
  
  function menssage() {
      setText(() => "Messagem trocada")
  }

  return (
    <div>
      <h1>HALLO WORLD</h1>
      <p>{text}</p>
      <button onClick={menssage}>Olá</button>
    </div>
  )
}

export default Jest