"user client"

import web1 from '@/assets/image/web1.avif';
import web2 from '@/assets/image/web2.avif';
import web3 from '@/assets/image/web3.avif';
import web4 from '@/assets/image/web4.avif';
import web5 from '@/assets/image/web5.avif';
import web6 from '@/assets/image/web6.avif';
import web7 from '@/assets/image/web7.avif';

import { Button } from '@/components/ui/button';
import { View } from 'lucide-react';
import CardsProject from './CardsProject';

export default function MyProject() {

  return (
    <div className=" pt-6 pb-12 px-28 max-w max-lg:px-8">
      <div className="max-w-screen-2xl m-auto" >
        <div className="">
          <div className="flex py-6 gap-10 font-semibold">
            <h1 className="text-bg-blueDark-A1 text-4xl max-lg:text-2xl dark:text-bg-blueDark-A5">MEUS PROJETOS</h1>
          </div>
        </div>
        <div className="px-10 py-6 max-lg:px-0">

          <div className="grid grid-auto-fit-xl max-lg:grid-auto-fit-xl gap-10 justify-items-center max-lg:px-0">
            <CardsProject title="Website para testar SCORM" description="Ajudamos plataforma de gestão de treinamento LMS " image={ web7 } linkUrl="https://leitorscorm.com.br"/>
            <CardsProject title="Website Cyber Punk" description="Site para prover jogo de FPS" image={ web1 } />
            <CardsProject title="Website Gamer Top 10" description="Site ranking gamers Top 10 " image={ web2 } />
            <CardsProject title="Website analytical management" description="Dashboard informativo" image={ web3 } />
            <CardsProject title="Website Food Viogger" description="Promover startup Food " image={ web4 } />
            <CardsProject title="Website Cyber Security Hero" description="Startup de segurança digital" image={ web5 } />
            <CardsProject title="Website Dashboard Audio" description="Dashboard de ajuste de áudio" image={ web6 } />

          </div>
          <div className="flex justify-center">
            <Button className="flex gap-2 mt-14 px-6">
              Conheçer mais projetos
              <View strokeWidth={ 1.25 } />
            </Button>
          </div>

        </div>
      </div>

    </div>
  )
}
