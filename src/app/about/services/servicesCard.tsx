import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import React from 'react';


const ServiceCard = ({ title, description }: { title: string, description: string }) => { 
return (
  <Card className="m-4">
    <CardHeader>
      <CardTitle>{ title }</CardTitle>
      <CardDescription>{ description }</CardDescription>

    </CardHeader>
    <CardContent>
      <Button variant="default">Conhecer</Button>
    </CardContent>
  </Card>
);
};

export default ServiceCard;