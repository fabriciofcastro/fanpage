'use client'

import  style  from '@/components/main.module.scss'

interface ChildrenProps {
  children: React.ReactNode
}

export const Main = ({children}: ChildrenProps) => {
  return (
    <div className={style.main}>
      {children}
    </div>
  )
}
