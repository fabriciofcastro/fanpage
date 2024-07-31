import { Hexagon } from 'lucide-react'

export default function Logo() {
  return (
   
      <div className="flex items-center flex-1 gap-2 max-lg:gap-2">
        <div className="relative flex">
          <Hexagon strokeWidth={1.25} className="size-14 max-lg:size-12 max-sm:size-7 " />
          <span className="absolute top-3 left-3 text-2xl max-lg:text-2xl max-lg:-top-2 max-lg:left-0 max-sm:-top-0.2 max-sm:text-[1rem] max-sm:left-1">{ ">_" }</span>
        </div>
        <div className=" ">
          <span className="font-semibold text-3xl max-lg:text-2xl max-lg:text-[1rem]">Fabrício Castro</span> 
        </div>
      </div>
   
  )
}
