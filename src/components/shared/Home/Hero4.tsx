import { buttonVariants } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Hero4() {
  return (
    <section className="w-full bg-primary/70">
      <div className="mx-auto max-w-6xl flex justify-between gap-4 p-4">
        <h2 className="text-2xl font-medium text-muted">
          Grab this one time Offer
        </h2>
        <Link
          to={'/products'}
          className={buttonVariants({
            variant: 'outline',
            size: 'default',
            className: 'w-fit text-foreground border-foreground',
          })}
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
