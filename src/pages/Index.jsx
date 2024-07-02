import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid, GridItem } from "@/components/ui/grid";
import { Sidebar } from "@/components/ui/sidebar";

const Index = () => {
  return (
    <div className="container mx-auto">
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Top News</h1>
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Featured Article</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Details about the featured article...</p>
          </CardContent>
        </Card>
      </section>
      <Grid className="grid-cols-1 md:grid-cols-3 gap-4">
        <GridItem>
          <Card>
            <CardHeader>
              <CardTitle>Article 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details about article 1...</p>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardHeader>
              <CardTitle>Article 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details about article 2...</p>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardHeader>
              <CardTitle>Article 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details about article 3...</p>
            </CardContent>
          </Card>
        </GridItem>
      </Grid>
      <Sidebar className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Trending Topics</h2>
        <ul>
          <li>Topic 1</li>
          <li>Topic 2</li>
          <li>Topic 3</li>
        </ul>
      </Sidebar>
    </div>
  );
};

export default Index;
