import { Card } from "./Card";

export const TrendingSection = () => {
  return (
    <div className="text-center">
      <h2>Trending Drinks</h2>
      <div className="grid grid-cols-4 col-auto mx-20 gap-10">
        <Card
          img="https://tb-static.uber.com/prod/image-proc/processed_images/83eb8ec02f9ba44c88bba91d49c844e6/5954bcb006b10dbfd0bc160f6370faf3.jpeg"
          title="Strawberries & Cream Frappuccino®"
        />
        <Card
          img="https://tb-static.uber.com/prod/image-proc/processed_images/830aefa9882881d1b518b0e808809403/a19bb09692310dfd41e49a96c424b3a6.jpeg"
          title="Crème Brulée Cold Brew"
        />
        <Card
          img="https://tb-static.uber.com/prod/image-proc/processed_images/30cb259d9f17a7b15a6f28a083a38553/5954bcb006b10dbfd0bc160f6370faf3.jpeg"
          title="Caramel Cream Frappuccino®"
        />
        <Card
          img="https://tb-static.uber.com/prod/image-proc/processed_images/6d8c93f8124dd101bda9e9b0fb36ac30/a19bb09692310dfd41e49a96c424b3a6.jpeg"
          title="Mango Dragonfruit Starbucks Refresha®"
        />
      </div>
    </div>
  );
};
