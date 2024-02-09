import  style  from '@/componets/main.module.css'

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
