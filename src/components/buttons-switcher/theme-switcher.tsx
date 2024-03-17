'use client'

import { useTheme } from 'next-themes'

import React from 'react'

const ThemeSwitcher = () => {

  const {setTheme} = useTheme()

  return (
    <div>
      <button onClick={() => setTheme("light")} >Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  )
}

export default ThemeSwitcher