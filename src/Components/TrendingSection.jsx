import { Card } from "./Card";

export const TrendingSection = () => {
  return (
    <div className="text-center container  mx-auto my-8">
      <h2>Trending Drinks</h2>
      <div className="card-grid">
        <Card
          img="https://tb-static.uber.com/prod/image-proc/processed_images/83eb8ec02f9ba44c88bba91d49c844e6/5954bcb006b10dbfd0bc160f6370faf3.jpeg"
          title="Strawberry milkshake"
          description="Frappuccino crème syrup blended with milk, strawberry sauce and ice. Topped with whipped cream."
        />
        <Card
          img="https://tb-static.uber.com/prod/image-proc/processed_images/830aefa9882881d1b518b0e808809403/a19bb09692310dfd41e49a96c424b3a6.jpeg"
          title="Iced Cold Brew"
          description="Our signature, super-smooth cold brew, sweetened with a touch of vanilla flavour syrup, topped with a rich crème brulée inspired cream cold foam and finished with a dusting of fresh coffee grounds."
        />
        <Card
          img="https://tb-static.uber.com/prod/image-proc/processed_images/30cb259d9f17a7b15a6f28a083a38553/5954bcb006b10dbfd0bc160f6370faf3.jpeg"
          title="Caramel milkshake"
          description="Coffee blended with caramel syrup, milk and ice. Topped with whipped cream and caramel sauce."
        />
        <Card
          img="https://tb-static.uber.com/prod/image-proc/processed_images/6d8c93f8124dd101bda9e9b0fb36ac30/a19bb09692310dfd41e49a96c424b3a6.jpeg"
          title="Dragonfruit Refresher"
          description="A perfect blend of mango and dragon fruit flavours, this tropical beverage is hand-shaken with ice and dried dragon fruit pieces."
        />
      </div>
    </div>
  );
};
