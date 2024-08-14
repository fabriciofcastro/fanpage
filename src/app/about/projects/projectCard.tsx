"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <motion.div
      whileHover={ { scale: 1.05 } }
      whileTap={ { scale: 0.95 } }
      className="m-4"
    >
      <Card>
        <CardHeader>
          <CardTitle>{ title }</CardTitle>
          <CardDescription>{ description }</CardDescription>
        </CardHeader>
        <CardContent>

          <Link href={ link } target="_blank" rel="noopener noreferrer">
            <Button variant="default" >
              Visualizar Projeto
            </Button>
          </Link> 
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
