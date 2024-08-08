import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import ServiceCard from './servicesCard';
import { Workflow } from 'lucide-react';

export const metadata = {  
  title: "Serviços",
  description: "Compartilho insights sobre as soluções que construo, para saber mais sobre o que ofereço e como podemos colaborar.",
  openGraph: {
    title: "Serviços | Fabrício Castro",
    type: "website",
    locale: "pt-BR",
    url: "https://www.fabriciofcastro.com.br/",
    siteName: "Fabrício Castro Dev"
  }
}

interface servicesProps {
  title: string
  description: string
}

const services: servicesProps[] = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern web applications.',
  },
  {
    title: 'Mobile Development',
    description: 'Creating mobile applications for iOS and Android platforms.',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-friendly and aesthetically pleasing interfaces.',
  },
];

const Services = () => {
  return (
    <div className="space-y-4">
      <Card className=" bg-muted shadow-xl dark:bg-muted-foreground">
        <CardHeader>
          <CardTitle className="flex gap-2">
            <Workflow />
            Serviços
          </CardTitle>
          <CardDescription className="text-muted-foreground dark:text-muted">
            Conheça os tarbalho que já realizei
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="grid grid-auto-fit gap-4 max-lg:grid-auto-fit-xl">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </Card>
    </div>
  );
};

export default Services;
