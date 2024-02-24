import Main from '@/components/Main'
import Apresentation from '@/pages/apresentation/Apresentation';
import MyTechs from '@/pages/minhasTechs/Minhas-techs';
import Portfolio from '@/pages/portfolio/Portfolio';

export default function Home() {
  return (
    <Main >
      <Apresentation />
      <MyTechs />
      <Portfolio />
    </Main>
  );
}
