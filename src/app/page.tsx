import Main from '@/components/Main'
import Apresentation from '@/pages/apresentation/Apresentation';
import MinhasTechs from '@/pages/minhasTechs/Minhas-techs';
import Portifolio from '@/pages/portifolio/Portifolio';

export default function Home() {
  return (
    <Main >
      <Apresentation />
      <MinhasTechs />
      <Portifolio />
    </Main>
  );
}
