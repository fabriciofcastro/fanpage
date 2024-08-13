import { CodeXml } from 'lucide-react'
import Link from 'next/link'

export default function Logo() {
  return (

    <div className="flex items-center flex-1 gap-2 max-lg:gap-2">
      <Link href="/">
        <div className="flex items-center gap-2 text-2xl">
          <CodeXml size={ 30 } />
          <span>Fabrício Castro</span>
        </div>
      </Link>
    </div>

  )
}
