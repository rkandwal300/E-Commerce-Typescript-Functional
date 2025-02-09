import FeaturedProducts from './FeaturedProducts';
import Hero from './Hero';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import Hero4 from './Hero4';
import Hero5 from './Hero5';

type valtype = {
  id: number;
  title: string;
  brand: string;
  rating: number;
  category: string;
  description: string;
  discount_percentage: 16;
  images: string;
  price: string;
  stock: number;
  thumbnail: string;
};

const Home = () => {
  return (
    <section className="flex flex-1 flex-col">
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <FeaturedProducts />
      <Hero5 />
    </section>
  );
};

export default Home;
