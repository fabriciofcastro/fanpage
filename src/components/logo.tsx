import { Hexagon } from 'lucide-react'

export default function Logo() {
  return (
   
      <div className="flex items-center flex-1 gap-2 max-lg:gap-2">
        <div className="relative flex">
          <Hexagon strokeWidth={1.25} className="size-14 max-lg:size-12 " />
          <span className="absolute top-3 left-3 text-2xl max-lg:text-xl max-lg:top-2 max-lg:left-2">{ ">_" }</span>
        </div>
        <div className=" ">
          <span className="font-semibold text-3xl max-lg:text-2xl">Fabrício Castro</span> 
        </div>
      </div>
   
  )
}
