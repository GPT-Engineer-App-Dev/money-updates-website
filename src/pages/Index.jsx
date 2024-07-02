import React from 'react';
import Grid from '@/components/ui/grid/Grid';
import GridItem from '@/components/ui/grid/GridItem';

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <Grid className="grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <GridItem className="md:col-span-2 lg:col-span-3">
          <h1 className="text-3xl font-bold mb-4">Financial Times</h1>
          <p>Welcome to the Financial Times website. Stay updated with the latest news and articles.</p>
        </GridItem>
        <GridItem className="md:col-span-1 lg:col-span-1">
          <h2 className="text-2xl font-semibold mb-2">Sidebar</h2>
          <p>Additional content and links can go here.</p>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Index;