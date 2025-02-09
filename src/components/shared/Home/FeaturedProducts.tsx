import { Separator } from '@/components/ui/separator';
import Loading from '@/e-com/Error_&_Loading/Loading';
import { useGetProducts } from '@/lib/hooks/useProducts';
import Product from '../Product/Product';

export default function FeaturedProducts() {
  const {
    data: productList,
    isLoading,
    isError,
  } = useGetProducts({ page: 1, limit: 4 });
  if (isError) return <></>;
  if (isLoading) return <Loading />;
  return (
    <div className="mx-auto max-w-6xl flex flex-col gap-16 justify-center items-center my-16">
      <div className="flex flex-col gap-4 justify-center items-center">
        <span className="text-2xl font-semibold text-foreground/80">
          Our Featured Products
        </span>
        <Separator className="w-28 h-1 bg-primary"></Separator>
      </div>

      <div className="flex sm:flex-row flex-col flex-wrap justify gap-4">
        {productList?.products.map((val) => {
          return (
            <Product
              {...val}
              key={val.id}
              thumbnail={val.thumbnail}
              title={val.title}
              id={val.id}
              price={val.price}
              rating={val.rating}
            />
          );
        })}
      </div>
    </div>
  );
}
