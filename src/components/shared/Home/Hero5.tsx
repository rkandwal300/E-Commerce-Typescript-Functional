import { buttonVariants } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero5() {
  const [url, setUrl] = React.useState<string>('/hero2/mug-blue.jpg');
  const url1 = '/hero2/mug-coffee-768x768.jpg';
  const url2 = '/hero2/mug-blue.jpg';
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setUrl((prev) => (prev === url1 ? url2 : url1));
    }, 2000);
    return () => clearTimeout(timer);
  }, [url]);
  // /hero2/mug-coffee-768x768.jpg'
  return (
    <section className="mx-auto max-w-6xl grid grid-cols-1 gap-10 p-4 sm:grid-cols-2">
      <div className="h-[300px] aspect-square flex flex-col justify-center text-foreground/80 gap-4">
        <h4 className="font-bold text-3xl">
          Hundreds Of Ready Designs To Choose From
        </h4>
        <p className="text-xs font-medium text-muted-foreground">
          Nam at congue diam etiam erat lectus, finibus eget commodo quis,
          congue diam etiam erat lectus.
        </p>
        <Link
          to="/products"
          className={buttonVariants({
            variant: 'outline',
            className: 'w-fit',
          })}
        >
          View All Products
        </Link>
      </div>
      <Card className="h-[300px] aspect-square">
        <img
          className="h-full w-full object-contain object-center"
          src={url}
          alt="mug"
        />
      </Card>
    </section>
  );
}
