import { buttonVariants } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 justify-center items-center p-4">
      <div className="flex flex-col gap-2 text-foreground/70 ">
        <span className=" text-lg font-semibold">Best Quality Products</span>

        <div className="text-5xl flex flex-col font-semibold ">
          <span> We Print What </span>
          <span> You Want! </span>
        </div>
        <span className="text-sm">
          Click edit button to change this text. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sapien.
        </span>
        <div>
          <Link
            to="/products"
            className={buttonVariants({
              variant: 'default',
              size: 'lg',
              className: 'mt-5',
            })}
          >
            GET STARTED
          </Link>
        </div>
      </div>

      <div className="md:max-w-xl sm:max-w-lg max-w-sm mx-auto sm:mx-0 w-full aspect-square">
        <img src="/hero1/boy-t2.png" alt="product_showoff" width="551" />
      </div>
    </section>
  );
}
