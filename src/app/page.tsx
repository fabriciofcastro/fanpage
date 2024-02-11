import { Main } from '@/componets/Main'
import { Apresentation } from '@/componets/apresentation/Apresentation';
import { MinhasTechs } from '@/componets/minhasTechs/Minhas-techs';

export default function Home() {
  return (
    <Main >
      <Apresentation />
      <MinhasTechs />
    </Main>
  );
}
