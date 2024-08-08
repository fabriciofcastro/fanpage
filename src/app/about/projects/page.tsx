import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import ProjectCard from './projectCard';
import { Proportions, Workflow } from 'lucide-react';

export const metadata = {  
  title: "Projetos",
  description: "Conheça alguns de meus trabalhos.",
  openGraph: {
    title: "Projetos | Fabrício Castro",
    type: "website",
    locale: "pt-BR",
    url: "https://www.fabriciofcastro.com.br/",
    siteName: "Fabrício Castro Dev"
  }
}


const projects = [
  {
    title: 'Website Development',
    description: 'Developed a responsive and modern website using React and Next.js.',
    link: 'https://example.com/website-development',
  },
  {
    title: 'Mobile App Development',
    description: 'Created a cross-platform mobile app using React Native.',
    link: 'https://example.com/mobile-app-development',
  },
  {
    title: 'UI/UX Design Project',
    description: 'Designed a user-friendly interface for an e-commerce platform.',
    link: 'https://example.com/ui-ux-design',
  },
];

const Projects: React.FC = () => {
  return (
    <div className=" space-y-4 ">
      <Card className=" bg-muted shadow-xl dark:bg-muted-foreground">
        <CardHeader>
          <CardTitle className="flex gap-2">
          <Proportions />
            Projetos
          </CardTitle>
          <CardDescription className="text-muted-foreground dark:text-muted">
            Conheça alguns projetos que já entreguei
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </Card>
    </div>
  );
};

export default Projects;
